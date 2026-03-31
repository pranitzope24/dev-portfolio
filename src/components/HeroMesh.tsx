"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroMesh() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const heroContainer = mountRef.current;
    const heroScene = new THREE.Scene();
    const heroCamera = new THREE.PerspectiveCamera(
      75,
      heroContainer.offsetWidth / heroContainer.offsetHeight,
      0.1,
      1000
    );
    const heroRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    heroRenderer.setSize(heroContainer.offsetWidth, heroContainer.offsetHeight);
    heroRenderer.setPixelRatio(window.devicePixelRatio);
    heroContainer.appendChild(heroRenderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.3,
    });
    const coreMesh = new THREE.LineSegments(wireframe, lineMat);

    const pointMat = new THREE.PointsMaterial({
      color: 0xedb1ff,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const corePoints = new THREE.Points(geometry, pointMat);

    const heroGroup = new THREE.Group();
    heroGroup.add(coreMesh);
    heroGroup.add(corePoints);
    heroScene.add(heroGroup);

    heroCamera.position.z = 5;
    heroGroup.position.y = 0.5; // Offset to visually center properly

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      heroGroup.rotation.y += 0.005;
      heroGroup.rotation.x += 0.002;

      heroRenderer.render(heroScene, heroCamera);
    };

    animate();

    const handleResize = () => {
      if (!heroContainer) return;
      heroCamera.aspect = heroContainer.offsetWidth / heroContainer.offsetHeight;
      heroCamera.updateProjectionMatrix();
      heroRenderer.setSize(heroContainer.offsetWidth, heroContainer.offsetHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      lineMat.dispose();
      pointMat.dispose();
      heroRenderer.dispose();

      if (heroContainer && heroRenderer.domElement.parentNode === heroContainer) {
        heroContainer.removeChild(heroRenderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-10" id="hero-canvas-container" />;
}
