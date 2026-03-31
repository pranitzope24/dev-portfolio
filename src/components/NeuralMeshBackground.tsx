"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeuralMeshBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const bgScene = new THREE.Scene();
    const bgCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const bgRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    bgRenderer.setSize(window.innerWidth, window.innerHeight);
    bgRenderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(bgRenderer.domElement);

    const bgGeometry = new THREE.IcosahedronGeometry(20, 1);
    const bgWireframe = new THREE.WireframeGeometry(bgGeometry);
    const bgMaterial = new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.08 });
    const bgNetwork = new THREE.LineSegments(bgWireframe, bgMaterial);
    
    const pointMat = new THREE.PointsMaterial({
        color: 0xedb1ff,
        size: 0.1,
        transparent: true,
        opacity: 0.4
    });
    const bgPoints = new THREE.Points(bgGeometry, pointMat);

    const bgGroup = new THREE.Group();
    bgGroup.add(bgNetwork);
    bgGroup.add(bgPoints);
    bgScene.add(bgGroup);

    bgCamera.position.z = 25;

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 100;
      mouseY = (e.clientY - window.innerHeight / 2) / 100;
    };

    document.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      bgGroup.rotation.y += 0.001;
      bgGroup.rotation.x += 0.0005;
      bgGroup.position.x = targetX * 0.5;
      bgGroup.position.y = -targetY * 0.5;

      // Global Parallax Layers
      const parallaxLayers = document.querySelectorAll(".parallax-layer");
      parallaxLayers.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute("data-depth") || "0.1");
        const x = targetX * depth * 40;
        const y = targetY * depth * 40;
        (layer as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });

      bgRenderer.render(bgScene, bgCamera);
    };

    animate();

    const handleResize = () => {
      bgCamera.aspect = window.innerWidth / window.innerHeight;
      bgCamera.updateProjectionMatrix();
      bgRenderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      
      bgGeometry.dispose();
      bgMaterial.dispose();
      pointMat.dispose();
      bgRenderer.dispose();
      
      if (mountRef.current && bgRenderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(bgRenderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
