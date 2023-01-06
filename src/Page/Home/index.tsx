import { Suspense, StrictMode } from "react";
import { Canvas } from "@react-three/fiber";

import { Joysticks } from '../../components/Joysticks';
import { FloatingControl } from '../../components/FloatingControl';

import { DefaultScene } from "../../scene/DefaultScene";
import { useContexState } from '../../hooks/context';

import * as S from './styles'

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
    <S.Container>
      <S.WrapperCanvas>
        <StrictMode>
          <Suspense fallback={<S.Loading>loading...</S.Loading>}>
            <Canvas shadows camera={{ fov: 45 }} gl={{ alpha: false }}>
              <DefaultScene />
            </Canvas>
            <S.Aim>+</S.Aim>
            <Joysticks />
            <FloatingControl />
          </Suspense>
        </StrictMode>
      </S.WrapperCanvas>
      {/* <Duty src={callofduty} /> */}
    </S.Container>
  );
}

