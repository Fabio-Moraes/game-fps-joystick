import { useEffect, useState } from "react";
import { useBox } from "@react-three/cannon";
import { Mesh } from 'three';



import niceColors from "nice-color-palettes";

interface PropTypes {
  type?: string;
  layers?: number;
  position?: [number, number, number];
};

interface ObjProps {
  mass: number;
  args: [number, number, number];
  material: {
    friction: number;
    restitution: number;
  };
}

export const Cube = (props: PropTypes) => {
  const [color, setColor] = useState("white");
  const [cubeRef, api] = useBox<Mesh>(() => ({
    mass: 2,
    args: [0.5, 0.5, 0.5],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  } as ObjProps));

  const paletteIndex = 8;

  useEffect(
    () =>
      setColor(
        niceColors[paletteIndex][
        Math.floor(Math.random() * niceColors[paletteIndex].length)
        ]
      ),
    []
  );

  return (
    <mesh
      ref={cubeRef}
      castShadow
      layers={props.layers}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />

      <meshStandardMaterial
        color={color}
      />

    </mesh>
  );
};