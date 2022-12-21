import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { Mesh } from "three";

const Box = () => {
  const ref = useRef<Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxBufferGeometry args={isHovered ? [1.2, 1.2, 1.2] : [1, 1, 1]} />
      <meshLambertMaterial color={isHovered ? 0x44c2b5 : 0x9178e6} />
    </mesh>
  );
};

const canvas = () => {
  return (
    <Canvas dpr={2}>
      <color attach="background" args={[0xf5f3fd]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[-10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>{canvas()}</React.StrictMode>
);
