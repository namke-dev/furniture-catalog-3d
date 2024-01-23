import { Canvas } from "@react-three/fiber";
import React from "react";
import styles from "./style.module.scss";
import { OrbitControls } from "@react-three/drei";

export default function ModelContainer({ children }) {
  return (
    <div className={styles.main}>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        {children}
      </Canvas>
    </div>
  );
}
