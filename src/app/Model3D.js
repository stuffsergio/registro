"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/sergioModel.glb"); // Asegúrate de colocar tu modelo en la carpeta `public`

  return <primitive object={scene} scale={1} />;
};

const Model3D = () => {
  return (
    <Canvas camera={{ position: [1, 1, 1] }} style={{ height: "fit-content" }}>
      <ambientLight intensity={10} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default Model3D;
