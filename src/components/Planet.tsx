import { useGLTF} from '@react-three/drei'
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, MeshStandardMaterial } from 'three';

const scene = '/src/assets/object3d/scene.glb';

type GLTResult = GLTF & {
  nodes: {
    planet003: Mesh;
    planet002: Mesh;
  };
  materials: {
    ['default']: MeshStandardMaterial
  }
}

export function Planet() {
  const { nodes } = useGLTF(scene) as GLTResult;
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 10, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh receiveShadow castShadow geometry={nodes.planet002.geometry} material={nodes.planet002.material} />
        <mesh geometry={nodes.planet003.geometry} material={nodes.planet003.material} />
      </group>
    </group>
  )
}

