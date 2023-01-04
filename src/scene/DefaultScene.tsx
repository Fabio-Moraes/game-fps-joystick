import { Physics } from '@react-three/cannon';
import { useEffect } from 'react';
import { extend, useThree } from '@react-three/fiber';
import { Plane } from '../components/Plane';
import { Player } from '../components/Player';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { Skybox } from '../components/Skybox';
import { Cube } from '../components/Cube';
import { Stars, Sky } from '@react-three/drei';

import { Planet } from '../components/Planet';

extend({ PointerLockControls });

export const DefaultScene = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.layers.enable(0);
    camera.layers.enable(1);
  }, [camera]);

  return (
    <>
   {/*    <Skybox /> */}
   {/*    <Stars radius={500} depth={50} count={1000} factor={10} /> */}
      <Sky sunPosition={[100, 100, 20]} />


     <directionalLight position={[3, 0, 3]} intensity={0.5} castShadow />
      <pointLight position={[0, 0, -3]} intensity={0.6} castShadow />
      <pointLight position={[0, 0, 4]} intensity={0.6} castShadow />

    <ambientLight intensity={0.6} />
      <Physics
        gravity={[0, -18, 0]}
        tolerance={0}
        iterations={50}
        broadphase={"SAP"}
      >
        <Player />
        <Plane />
        <Cube position={[0, 0, -5]} layers={1} />
        <Cube position={[1, 0, -5]} />
        <Cube position={[2, 0, -5]} />
        <Cube position={[0, 1, -5]} />
        <Cube position={[1, 1, -5]} />
        <Cube position={[2, 1, -5]} />

        <Cube position={[-5, 3, -5]} />
        <Cube position={[-5, 2, -5]} />
        <Cube position={[-5, 1, -5]} />
        <Cube position={[-5, 0, -5]} />

       {/*  <  Soldier /> */}

       {/*  <Planet /> */}
        <Cube position={[0, 1, 5]} type={"Static"} />
        <Cube position={[1, 0, 5]} type={"Static"} />
        <Cube position={[0, 0, 5]} type={"Static"} />
      </Physics>
    </>
  );
};
