import { Canvas } from "@react-three/fiber";
import React from "react";
import styles from "./style.module.scss";
import { OrbitControls, ScrollControls } from "@react-three/drei";

export default function ModelContainer({ children }) {
  return (
    <div className={styles.main}>
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <ScrollControls pages={3} damping={0.25} />
        {children}
      </Canvas>
    </div>
  );
}
