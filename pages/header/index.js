import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <h2 id="loading">{progress} % loaded</h2>
    </Html>
  );
}

const Model = () => {
  const gltf = useLoader(
    GLTFLoader,
    "https://ik.imagekit.io/fx30u3wgcqib/logo_10_ZkMj5uZks.glb?updatedAt=1629708924337"
  );
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
};

const Head = () => {
  return (
    <div id="header_container">
      <Canvas camera={{ position: [0, -2, 15] }}>
        <Suspense fallback={<Loader />}>
          <Model />
          <OrbitControls autoRotate autoRotateSpeed={0.5} />
          <Environment preset="dawn" background />
        </Suspense>
      </Canvas>
      <div id="header_content">
        <a id="header_button" href="http://www.aaronjcunningham.com">
          Aaron J. Cunningham
        </a>
      </div>
    </div>
  );
};

export default Head;
