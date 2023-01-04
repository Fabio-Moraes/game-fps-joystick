import { createContext, useContext, ReactNode, useState } from 'react';

interface DirectionTypes {
  x?: string;
  y?: string;
}

type StateContext = {
  night: boolean;
  setNight: (value: boolean) => void;

  buttonDeleteCube: boolean;
  setButtonDeleteCube: (value: boolean) => void;

  buttonShoot: boolean;
  setButtonShoot: (value: boolean) => void;

  buttonJump: boolean;
  setButtonJump: (value: boolean) => void;

  playerMovePosition: { x: number; y: number };
  setPlayerMovePosition: (value: { x: number; y: number }) => void;

  playerMove?: DirectionTypes;
  setPlayerMove: (value?: DirectionTypes) => void;

  playerRotationPosition: { x: number; y: number };
  setPlayerRotationPosition: (value: { x: number; y: number }) => void;

  playerRotation?: DirectionTypes;
  setPlayerRotation: (value?: DirectionTypes) => void;
};

type ProviderProps = {
  children: ReactNode;
};

export const Context = createContext({} as StateContext);

const Provider = ({ children }: ProviderProps) => {
  const [buttonJump, setButtonJump] = useState(false);
  const [buttonShoot, setButtonShoot] = useState(false);

  const [playerRotationPosition, setPlayerRotationPosition] = useState({ x: 0, y: 0 });
  const [playerMovePosition, setPlayerMovePosition] = useState({ x: 0, y: 0 });

  const [playerRotation, setPlayerRotation] = useState(undefined);
  const [playerMove, setPlayerMove] = useState(undefined);

  const [buttonDeleteCube, setButtonDeleteCube] = useState(false);

  const [night, setNight] = useState(false);

  return (
    <Context.Provider
      value={
        {
          night,
          setNight,

          buttonDeleteCube,
          setButtonDeleteCube,

          buttonShoot,
          setButtonShoot,

          buttonJump,
          setButtonJump,

          playerMove,
          setPlayerMove,

          playerMovePosition,
          setPlayerMovePosition,

          playerRotationPosition,
          setPlayerRotationPosition,

          playerRotation,
          setPlayerRotation
        } as StateContext
      }
    >
      {children}
    </Context.Provider>
  );
};

function useContexState() {
  const context = useContext(Context);
  return context;
}

export { Provider, useContexState };