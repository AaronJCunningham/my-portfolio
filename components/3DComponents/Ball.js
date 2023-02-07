import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Ball = ({ position, index }) => {
  const ballRef = useRef();
  const accelerateY = 0.01;
  const accelerateX = 0.01;
  const accelerateZ = -0.01;

  const bool = () => {
    return Math.random() < 0.6;
  };

  useFrame((state) => {
    const { width, height } = state.viewport;
    const { x: mouseX, y: mouseY } = state.mouse;
    const w = width / 2;
    const h = height / 2;
    const zdepth = 1;
    const y = ballRef.current.position.y;
    const x = ballRef.current.position.x;
    const z = ballRef.current.position.z;
    if (x >= w - 0.5) {
      accelerateX = -0.001;
    }
    if (x <= w * -1 + 0.5) {
      accelerateX = 0.001;
    }
    if (y >= h - 0.5) {
      accelerateY = -0.01;
    }
    if (y <= h * -1 + 0.5) {
      accelerateY = 0.01;
    }
    if (z >= zdepth) {
      accelerateZ = -0.001;
    }
    if (z <= zdepth * -1) {
      accelerateZ = 0.001;
    }

    ballRef.current.position.z += accelerateZ;
    ballRef.current.rotation.y += mouseX * 0.04;
    ballRef.current.rotation.x += mouseY * 0.04;
    ballRef.current.material.opacity = index * 10;
  });

  return (
    <mesh ref={ballRef} position={position}>
      <icosahedronGeometry args={[1, 0]} />
      <meshNormalMaterial wireframe={true} transparent={true} />
    </mesh>
  );
};
