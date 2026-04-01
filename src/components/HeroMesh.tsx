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

    const colorPrimary = new THREE.Color(0x00d4ff); // primary_container
    const colorSecondary = new THREE.Color(0xedb1ff); // secondary
    const colorTertiary = new THREE.Color(0xffb4ab); // error/pinkish

    const originalPositions = geometry.attributes.position.clone();
    const originalWireframePositions = wireframe.attributes.position.clone();

    let currentSpeed = 0.0; // Starts dormant until terminal wakes it up
    let targetSpeed = 0.0;
    let accumulatedTime = 0;
    let lastTime = performance.now();

    const handleMeshActivity = (e: Event) => {
      const customEvent = e as CustomEvent;
      targetSpeed = customEvent.detail?.active ? 1.0 : 0.0;
    };
    window.addEventListener("mesh-activity", handleMeshActivity);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const delta = now - lastTime;
      lastTime = now;

      // Smoothly interpolate current speed towards target speed
      currentSpeed += (targetSpeed - currentSpeed) * 0.05;

      // Accumulate time based on speed for the breath effect
      accumulatedTime += delta * 0.0012 * currentSpeed;

      heroGroup.rotation.y += 0.005 * currentSpeed;
      heroGroup.rotation.x += 0.002 * currentSpeed;

      // Breath effect: animate individual vertices in a waveform
      const time = accumulatedTime;
      
      const posAttribute = geometry.attributes.position;
      for (let i = 0; i < posAttribute.count; i++) {
        const x = originalPositions.getX(i);
        const y = originalPositions.getY(i);
        const z = originalPositions.getZ(i);
        
        const wave = Math.sin(x * 1.5 + time) * Math.cos(y * 1.5 + time) * Math.sin(z * 1.5 + time);
        const offset = 0.25 * wave * currentSpeed; // Reduce wave amplitude based on speed
        
        const length = Math.sqrt(x*x + y*y + z*z) || 1;
        posAttribute.setXYZ(i, x + (x/length)*offset, y + (y/length)*offset, z + (z/length)*offset);
      }
      posAttribute.needsUpdate = true;

      const wirePosAttribute = wireframe.attributes.position;
      for (let i = 0; i < wirePosAttribute.count; i++) {
        const x = originalWireframePositions.getX(i);
        const y = originalWireframePositions.getY(i);
        const z = originalWireframePositions.getZ(i);
        
        const wave = Math.sin(x * 1.5 + time) * Math.cos(y * 1.5 + time) * Math.sin(z * 1.5 + time);
        const offset = 0.25 * wave * currentSpeed; // Reduce wave amplitude based on speed
        
        const length = Math.sqrt(x*x + y*y + z*z) || 1;
        wirePosAttribute.setXYZ(i, x + (x/length)*offset, y + (y/length)*offset, z + (z/length)*offset);
      }
      wirePosAttribute.needsUpdate = true;

      // Make dormancy highly visible with scale and opacity
      heroGroup.scale.setScalar(0.7 + 0.3 * currentSpeed);
      lineMat.opacity = 0.05 + 0.25 * currentSpeed;
      pointMat.opacity = 0.2 + 0.6 * currentSpeed;

      // Fade colors back and forth smoothly between cyan/blue and purple
      const t = (Math.sin(time * 0.8) + 1) / 2; // 0.0 to 1.0
      lineMat.color.lerpColors(colorPrimary, colorSecondary, t);
      pointMat.color.lerpColors(colorSecondary, colorPrimary, t);

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
      window.removeEventListener("mesh-activity", handleMeshActivity);
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
