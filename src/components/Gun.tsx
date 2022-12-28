import { useSphere, SphereProps } from "@react-three/cannon";
import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, TextureLoader } from 'three'
import { useContexState } from '../hooks/context'

export function Gun({ url }: { url: string }) {
  //const texture = useLoader(TextureLoader, '/public/textures/grass.jpg');

  const texture = new TextureLoader().load('/public/textures/brilho.png')


  const meshRef = useRef({} as Mesh);

  const [rotation, setRotation] = useState('DOWN');
  const [position, setPosition] = useState('BACK');

  const { scene } = useGLTF(url);
  const { buttonShoot } = useContexState();

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
      <mesh ref={meshRef} rotation={[0, 1.6, 0]} position={[.2, -.025, .35]} scale={.04} >
        <pointLight position={[0, 0, 0]} intensity={position === 'BACK' ? 1 : 0} distance={0.5} />
        <sphereGeometry args={[1, 32, 32]} /> 
        <meshLambertMaterial  attach='material' map={texture} transparent={true} opacity={position === 'BACK' ? 1 : 0} />
      </mesh>
      <mesh ref={meshRef} rotation={[0, 1.6, 0]} position={[.2, -.1, .6]} scale={.06} >
        <pointLight position={[10, 0, -5]} intensity={0.1} castShadow distance={5} />
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial color="hotpink" transparent={true} opacity={0} />
        <primitive object={scene} onClick={() => console.log('-gun-')} wireframe />
      </mesh>
    </>
  )
}