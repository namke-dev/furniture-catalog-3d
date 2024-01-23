import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model3(props) {
  const { nodes, materials } = useGLTF("/models/model3/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.Transluc}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.ESTRUTUR}
        />
        <mesh geometry={nodes.Object_20.geometry} material={materials.PALHA} />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
