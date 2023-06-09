// Credits to memoji model author: Paul Hamilton for this awesome model and animation that i could use off the shelf for this 3d project
// "Paul Memoji Typing animation" (https://skfb.ly/6TENv) by Appsbypaulhamilton is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).



import React, { Suspense, useEffect, useState, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations,  } from "@react-three/drei";
import * as THREE from 'three'

import CanvasLoader from "../Loader";

const Memoji = ({ isMobile, setMemojiLoaded }) => {
  const group = useRef()
  const { scene, animations } = useGLTF("./memoji_typing.glb");
  // const { actions } = useAnimations(animations, group);
  // const action = actions['mixamo.com'];
  // // action?.play();

  // useEffect(() => {
  //   action?.play()
  // });

  let mixer = new THREE.AnimationMixer(scene);
  animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
  });
  useFrame((state, delta) => {
      mixer.update(delta);
  });

  useEffect(() => {
    console.log('memoji loaded')
    setMemojiLoaded(true)
  },[group?.current])

  return (
    <mesh>
      <hemisphereLight intensity={0.32} />
      <spotLight
        position={[10, 100, 40]}
        angle={0.2}
        penumbra={1}
        intensity={0.8}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        ref={group}
        object={scene}
        scale={isMobile ? 1.3 : 1.4}
        position={isMobile ? [-1, -3.5, -1.5] : [2.6, -1.6, -1.5]}
        rotation={[0.01, -0.1, -0.04]}
        dispose={null}
      />
    </mesh>
  );
};

const MemojiCanvas = ({setMemojiLoaded}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 760px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return ( true &&
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        dispose={null}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enableDamping
            autoRotate
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 6}
            maxAzimuthAngle={Math.PI / 4}
            reverseOrbit
          />
          <Memoji isMobile={isMobile} setMemojiLoaded={setMemojiLoaded} />
        </Suspense>

        <Preload all />
      </Canvas>
  );
};

useGLTF.preload("./memoji_typing.glb");

export default MemojiCanvas;
