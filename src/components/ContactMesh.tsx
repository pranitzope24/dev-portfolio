"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ContactMesh() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const cardContainer = mountRef.current;
    const cardScene = new THREE.Scene();
    const cardCamera = new THREE.PerspectiveCamera(
      75,
      cardContainer.offsetWidth / cardContainer.offsetHeight,
      0.1,
      1000
    );
    const cardRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    cardRenderer.setSize(cardContainer.offsetWidth, cardContainer.offsetHeight);
    cardRenderer.setPixelRatio(window.devicePixelRatio);
    cardContainer.appendChild(cardRenderer.domElement);

    const coreGeom = new THREE.SphereGeometry(2, 32, 32);
    const coreWire = new THREE.WireframeGeometry(coreGeom);
    const coreMat = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.2,
    });
    const signalCore = new THREE.LineSegments(coreWire, coreMat);

    const pulseGeom = new THREE.IcosahedronGeometry(2.2, 1);
    const pulseMat = new THREE.PointsMaterial({
      color: 0xedb1ff,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const signalPoints = new THREE.Points(pulseGeom, pulseMat);

    const cardGroup = new THREE.Group();
    cardGroup.add(signalCore);
    cardGroup.add(signalPoints);
    cardScene.add(cardGroup);

    cardCamera.position.z = 5;

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      cardGroup.rotation.y += 0.01;
      cardGroup.rotation.z += 0.005;

      const time = Date.now() * 0.001;
      signalPoints.scale.setScalar(1 + Math.sin(time * 2) * 0.05);

      cardRenderer.render(cardScene, cardCamera);
    };

    animate();

    const handleResize = () => {
      if (!cardContainer) return;
      cardCamera.aspect = cardContainer.offsetWidth / cardContainer.offsetHeight;
      cardCamera.updateProjectionMatrix();
      cardRenderer.setSize(cardContainer.offsetWidth, cardContainer.offsetHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      coreGeom.dispose();
      coreMat.dispose();
      pulseGeom.dispose();
      pulseMat.dispose();
      cardRenderer.dispose();

      if (cardContainer && cardRenderer.domElement.parentNode === cardContainer) {
        cardContainer.removeChild(cardRenderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-crosshair" />;
}
