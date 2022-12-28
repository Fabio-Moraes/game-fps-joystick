import { Suspense, StrictMode } from "react";
import { Canvas } from "@react-three/fiber";

import { Joysticks } from '../../components/Joysticks';
import { FloatingControl } from '../../components/FloatingControl';

import { DefaultScene } from "../../scene/DefaultScene";
import { useContexState } from '../../hooks/context'

import callofduty from '/src/assets/textures/callofduty3.png';

import { Aim } from './styles'

import {
  Container,
  WrapperCanvas,
  Duty
} from './styles'

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={1} />
    </mesh>
  )
}

export function Home() {
  const { playerRotationPosition } = useContexState();

  return (
    <Container>
      <WrapperCanvas>
        <StrictMode>
          <Canvas shadows camera={{ fov: 45 }} gl={{ alpha: false }}>
            <Suspense fallback={null}>
              <DefaultScene />
            </Suspense>
          </Canvas>
        </StrictMode>
      </WrapperCanvas>
      <Aim>+</Aim>
      {/* <Duty src={callofduty} /> */}
      <Joysticks />
      <FloatingControl />
    </Container>
  );
}

