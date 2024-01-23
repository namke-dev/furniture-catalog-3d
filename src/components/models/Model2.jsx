import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model2(props) {
  const { nodes, materials } = useGLTF("/models/model2/scene.gltf");
  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.1;
  });

  return (
    <group {...props} dispose={null} ref={mesh}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_18.geometry} material={materials.VIDRO} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.BASE} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.BASE} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.BASE} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.BASE} />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.EdgeColo}
        />
        <mesh geometry={nodes.Object_11.geometry} material={materials.BASE} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.BASE} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.BASE} />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.EdgeColo}
        />
        <mesh geometry={nodes.Object_17.geometry} material={materials.TAMPO} />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
