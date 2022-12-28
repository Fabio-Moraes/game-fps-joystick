import { ThreeEvent } from '@react-three/fiber';
import { usePlane } from "@react-three/cannon";
import { Mesh } from 'three';
import { useStore } from "../hooks/useStore";
import { groundTexture } from "../images/textures"

type AltKeyTypes = ThreeEvent<MouseEvent> & { altKey: boolean }

export const Plane = () => {
  const [addCube] = useStore((state) => [state.addCube]);

  const [ref, api] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.25, 0],
    material: {
      friction: 0.1
    }
  }));

  groundTexture.repeat.set(50, 50)

  return (
    <mesh
      onClick={(e) => {
        const { altKey, stopPropagation, point } = e as AltKeyTypes;
        const [x, y, z] = Object.values(point).map(val => Math.ceil(val));

        //stopPropagation();
        /*  if ( !altKey ) addCube(x, y, z); */
      }}
      ref={ref}
      receiveShadow={true}
    >
      <planeGeometry attach='geometry' args={[50, 50]} />
      <meshLambertMaterial attach='material' map={groundTexture} />
    </mesh>
  );
};
