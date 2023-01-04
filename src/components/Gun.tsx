import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

import { useContexState } from '../hooks/context';
import { shotTexture } from '../assets/textures';

export function Gun({ url }: { url: string }) {
  const [rotation, setRotation] = useState('DOWN');
  const [position, setPosition] = useState('BACK');

  const { buttonShoot } = useContexState();
  const { night, setNight } = useContexState();

  const { scene } = useGLTF(url);

  const meshRef = useRef({} as Mesh);

  useFrame((_, delta) => {
    if (buttonShoot || rotation === 'DOWN') {
      meshRef.current.rotation.x > .07 && setRotation('UP');
      meshRef.current.rotation.x < 0 && setRotation('DOWN');

      meshRef.current.rotation.x += (rotation === 'UP' ? -1.5 : 1.5) * delta;
    } else {
      meshRef.current.rotation.x -= meshRef.current.rotation.x > 0 ? 1.5 * delta : 0
    }


    if (buttonShoot || position === 'BACK') {
      meshRef.current.position.z > .61 && setPosition('FRONT');
      meshRef.current.position.z < .6 && setPosition('BACK');

      meshRef.current.position.z += (position === 'FRONT' ? -.5 : .5) * delta;
    } else {
      meshRef.current.position.z -= meshRef.current.position.z > .6 ? .5 * delta : 0
    }
  });

  return (
    <>
      <mesh>
        {night && <pointLight position={[0, 1.6, 0]} intensity={.5} distance={20} />}
      </mesh>

      <mesh ref={meshRef} rotation={[0, 1.6, 0]} position={[.2, -.025, .35]} scale={.04} >
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial attach='material' map={shotTexture} transparent={true} opacity={position === 'BACK' ? 1 : 0} />
      </mesh>

      <mesh ref={meshRef} rotation={[0, 1.6, 0]} position={[.2, -.1, .6]} scale={.06} >
        <pointLight position={[10, 0, -5]} intensity={0.1} castShadow distance={3} />
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial color="hotpink" transparent={true} opacity={0} />
        <primitive object={scene} onClick={() => console.log('-gun-')} wireframe />
      </mesh>
    </>
  )
}