import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import { OrbitControls } from "@react-three/drei";

export default function index() {
  return (
    <div className={styles.main}>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.z += delta * 0.25;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}
