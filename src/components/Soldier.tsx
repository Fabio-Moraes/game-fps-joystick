import { useGLTF } from '@react-three/drei'
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, MeshStandardMaterial } from 'three';


export function Soldier() {

  function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} onClick={console.log} />
  }

  return (
    <group rotation={[0, 0, 0]} position={[0, 0, 0]} scale={.06}>
        <Model url='/src/assets/object3d/falcon_rilfe.glb' />
    </group>
  )
}

