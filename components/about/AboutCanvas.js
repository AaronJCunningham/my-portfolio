import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Ball } from "../3DComponents/Ball";
import { BallManager } from "../3DComponents/BallManager";

export const AboutCanvas = () => {
  return (
    <div className="about-canvas">
      <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 5] }}>
        <BallManager />
      </Canvas>
    </div>
  );
};
