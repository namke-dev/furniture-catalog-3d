import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/data/models/model1/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.ASSENTO}
        />
        <mesh geometry={nodes.Object_5.geometry} material={materials.ENCOSTO} />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_12_1.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.ESTRUTUR}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/data/models/model1/scene.gltf");
