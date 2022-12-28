import { useSphere, SphereProps } from "@react-three/cannon";
import { Mesh } from 'three'

export const Bullet = (props: SphereProps) => {
  const [ref, api] = useSphere<Mesh>(() => ({
    mass: 1,
    ...props
  }));

  return (
    <mesh ref={ref} castShadow>
      <sphereBufferGeometry args={[0.1, 32, 32]} />
      <meshLambertMaterial color="hotpink" transparent={true} opacity={0} />
    </mesh>
  );
};
