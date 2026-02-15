import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { SystemCoreFallback } from "./SystemCoreFallback";

type Props = {
  simpleView: boolean;
  onNavigate: (id: string) => void;
};

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl") ||
      canvas.getContext("webgl2");
    return !!gl;
  } catch {
    return false;
  }
}

function CoreScene({ onNavigate }: { onNavigate: (id: string) => void }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const coreGlowRef = useRef<THREE.Mesh>(null);
  const [hoveredCore, setHoveredCore] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const scrollRef = useRef(0);
  const nodeRefs = useRef<Array<THREE.Mesh | null>>([]);
  const lineGeomRefs = useRef<
    Array<THREE.BufferGeometry<THREE.NormalOrGLBufferAttributes> | null>
  >([]);
  const linePositions = useRef<Array<Float32Array>>([]);

  const colors = useMemo(
    () => ({
      base: new THREE.Color("rgb(16,20,29)"),
      border: new THREE.Color("rgb(36,46,66)"),
      blue: new THREE.Color("rgb(56,189,248)"),
      teal: new THREE.Color("rgb(45,212,191)"),
      purple: new THREE.Color("rgb(167,139,250)"),
    }),
    []
  );

  const navNodes = useMemo(
    () =>
      [
        {
          id: "overview",
          tone: "blue" as const,
          r: 1.55,
          speed: 0.55,
          phase: 0.3,
          y: 0.25,
        },
        {
          id: "services",
          tone: "teal" as const,
          r: 1.75,
          speed: 0.42,
          phase: 2.0,
          y: 0.55,
        },
        {
          id: "lab",
          tone: "purple" as const,
          r: 1.62,
          speed: 0.5,
          phase: 4.1,
          y: -0.35,
        },
      ] as const,
    []
  );

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      scrollRef.current = window.scrollY / max;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((_state, delta) => {
    const core = coreRef.current;
    const glow = coreGlowRef.current;
    if (!core || !glow) return;

    const scroll = scrollRef.current;
    const t = _state.clock.elapsedTime;

    const spin = 0.12 + scroll * 0.35;
    core.rotation.y += delta * spin;
    core.rotation.x += delta * 0.06;
    glow.rotation.y -= delta * (spin * 0.8);
    glow.rotation.x += delta * 0.03;

    const target = hoveredCore ? 1.03 : 1;
    core.scale.lerp(new THREE.Vector3(target, target, target), 0.08);
    glow.scale.lerp(
      new THREE.Vector3(target * 1.05, target * 1.05, target * 1.05),
      0.08
    );

    navNodes.forEach((n, idx) => {
      const node = nodeRefs.current[idx];
      const geom = lineGeomRefs.current[idx];
      const pos = linePositions.current[idx];
      if (!node || !geom || !pos) return;

      const angle = t * n.speed * (1 + scroll * 0.35) + n.phase;
      const x = Math.cos(angle) * n.r;
      const z = Math.sin(angle) * (n.r * 0.55);
      const y = Math.sin(angle * 0.7) * 0.18 + n.y;
      node.position.set(x, y, z);

      // line from center to node
      pos[0] = 0;
      pos[1] = 0;
      pos[2] = 0;
      pos[3] = x;
      pos[4] = y;
      pos[5] = z;
      const attr = geom.getAttribute("position") as THREE.BufferAttribute;
      attr.needsUpdate = true;
    });
  });

  return (
    <group>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4.5, 5, 3.5]} intensity={1.05} />
      <pointLight position={[-3, 1.5, 3]} intensity={0.6} color={colors.blue} />
      <pointLight
        position={[3, -1.5, 2.2]}
        intensity={0.5}
        color={colors.purple}
      />

      <mesh
        ref={coreRef}
        onPointerOver={() => setHoveredCore(true)}
        onPointerOut={() => setHoveredCore(false)}
        onClick={() => onNavigate("overview")}
      >
        <sphereGeometry args={[0.82, 64, 64]} />
        <meshPhysicalMaterial
          color={colors.base}
          metalness={0.25}
          roughness={0.22}
          clearcoat={0.9}
          clearcoatRoughness={0.25}
          emissive={colors.blue}
          emissiveIntensity={hoveredCore ? 0.24 : 0.14}
        />
      </mesh>

      <mesh ref={coreGlowRef}>
        <torusGeometry args={[1.2, 0.022, 12, 140]} />
        <meshStandardMaterial
          color={colors.border}
          emissive={colors.teal}
          emissiveIntensity={0.24}
          metalness={0.2}
          roughness={0.55}
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0.2, 0]}>
        <torusGeometry args={[1.55, 0.012, 10, 180]} />
        <meshStandardMaterial
          color={colors.border}
          emissive={colors.blue}
          emissiveIntensity={0.18}
          metalness={0.1}
          roughness={0.7}
          transparent
          opacity={0.55}
        />
      </mesh>

      {navNodes.map((n, idx) => {
        const emissive =
          n.tone === "blue"
            ? colors.blue
            : n.tone === "teal"
            ? colors.teal
            : colors.purple;
        const isHovered = hoveredNode === n.id;

        return (
          <group key={n.id}>
            <line>
              <bufferGeometry
                ref={(g) => {
                  lineGeomRefs.current[idx] = g;
                  if (!linePositions.current[idx]) {
                    const arr = new Float32Array(6);
                    linePositions.current[idx] = arr;
                  }
                  const arr = linePositions.current[idx];
                  if (g && arr) {
                    g.setAttribute(
                      "position",
                      new THREE.BufferAttribute(arr, 3)
                    );
                  }
                }}
              />
              <lineBasicMaterial color={emissive} transparent opacity={0.22} />
            </line>

            <mesh
              ref={(m) => {
                nodeRefs.current[idx] = m;
              }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(n.id);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredNode(n.id);
                (document.body.style.cursor as string) = "pointer";
              }}
              onPointerOut={() => {
                setHoveredNode(null);
                document.body.style.cursor = "default";
              }}
            >
              <sphereGeometry args={[0.11, 32, 32]} />
              <meshStandardMaterial
                color={new THREE.Color("rgb(226,232,240)")}
                emissive={emissive}
                emissiveIntensity={isHovered ? 0.95 : 0.72}
                metalness={0.05}
                roughness={0.35}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export function SystemCore({ simpleView, onNavigate }: Props) {
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    if (simpleView) {
      setWebgl(false);
      return;
    }
    setWebgl(supportsWebGL());
  }, [simpleView]);

  if (simpleView || webgl === false) return <SystemCoreFallback />;
  if (webgl === null) return <SystemCoreFallback />;

  return (
    <div className="relative h-[480px] w-full overflow-hidden rounded-xl2 border border-border/60 bg-panel/30 cc-surface">
      <div className="absolute inset-0 opacity-60 cc-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgb(var(--cc-blue)/0.15),transparent_60%)]" />
      <Canvas
        camera={{ position: [0, 0.15, 4.8], fov: 44 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <fog attach="fog" args={[new THREE.Color("rgb(11,14,20)"), 3.2, 7]} />
        <CoreScene onNavigate={onNavigate} />
      </Canvas>
      <div className="pointer-events-none absolute bottom-3 left-0 right-0 flex justify-center">
        <div className="rounded-full border border-border/60 bg-bg/40 px-3 py-1 text-xs font-mono text-muted cc-surface">
          hover: energize • click: navigate
        </div>
      </div>
    </div>
  );
}
