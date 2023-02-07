import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Ball } from "./Ball";

export const BallManager = () => {
  const [BallArray, setBallArray] = useState([]);

  function addToArray(mouseX, mouseY) {
    if (BallArray.length >= 200) {
      BallArray.pop();
    }
    setBallArray((prevState) => [{ mouseX, mouseY }, ...prevState]);
  }

  useFrame((state) => {
    const { width, height } = state.viewport;
    const { x: mouseX, y: mouseY } = state.mouse;
    addToArray(mouseX * (width - 5), mouseY * (height - 3));
  });

  return BallArray.length > 0
    ? BallArray.map((ball, index) => {
        return (
          <Ball
            position={[ball.mouseX, ball.mouseY, 0]}
            index={index}
            key={index}
          />
        );
      })
    : null;
};
