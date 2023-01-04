import { useSphere } from "@react-three/cannon";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3, Mesh, Group } from "three";

import { Bullet } from "./Bullet";
import { Gun } from "./Gun";

import { useContexState } from "../hooks/context";

//import { Mesh, MeshStandardMaterial } from 'three';

const speed = 5;
const bulletSpeed = 80;
const jumpSpeed = 5;

interface BulletsTypes {
  id: number,
  position: [number, number, number],
  velocity: [number, number, number]
};

export const Player = () => {
  const { camera } = useThree();

  const [bullets, setBullets] = useState<BulletsTypes[]>([]);
  const [recoil, setRecoil] = useState(false);
  const [shoot, setShoot] = useState(true);

  const {
    buttonShoot,
    buttonJump,
    playerMove,
    playerRotation,
    playerMovePosition,
    playerRotationPosition
  } = useContexState();

  //---------------------------------------------------------------- Player
  const [playerRef, playerApi] = useSphere<Mesh>(() => ({
    mass: 100,
    fixedRotation: true,
    position: [0, 1, 0],
    material: {
      friction: 0
    }
  }));

  const playerVelocity = useRef({
    timeToShoot: 0,
    timeTojump: 0,
    vel: [0, 0, 0],
    jumping: false
  });

  const playerPosition = useRef([0, 0, 0])

  useEffect(() => {
    playerApi.velocity.subscribe((v) => playerVelocity.current.vel = v);
    playerApi.position.subscribe((p) => playerPosition.current = p)
  }, [playerApi]);
  //---------------------------------------------------------------- Player

  const gunRef = useRef({} as Mesh);

  useFrame((_, delta) => {
    const velocity = new Vector3(0, 0, 0);
    const cameraDirection = new Vector3();
    camera.getWorldDirection(cameraDirection);

    const forward = new Vector3();
    forward.setFromMatrixColumn(camera.matrix, 0);
    forward.crossVectors(camera.up, forward);

    const right = new Vector3();
    right.setFromMatrixColumn(camera.matrix, 0);

    let [playerMoveHorizontal, playerMoveVertical] = [0, 0];

    if (playerMove?.y === 'up') {
      playerMoveVertical += -playerMovePosition.y * delta * 2;
    }
    if (playerMove?.y === 'down') {
      playerMoveVertical += -playerMovePosition.y * delta * 2;
    }
    if (playerMove?.x === 'right') {
      playerMoveHorizontal -= -playerMovePosition.x * delta * 2
    }
    if (playerMove?.x === 'left') {
      playerMoveHorizontal -= -playerMovePosition.x * delta * 2
    }

    if (playerMoveHorizontal !== 0 && playerMoveVertical !== 0) {
      velocity
        .add(forward.clone().multiplyScalar(speed * playerMoveVertical))
        .add(right.clone().multiplyScalar(speed * playerMoveHorizontal));
      velocity.clampLength(-5, 5);
    } else if (playerMoveHorizontal !== 0) {
      velocity.add(right.clone().multiplyScalar(speed * playerMoveHorizontal));
    } else if (playerMoveVertical !== 0) {
      velocity.add(forward.clone().multiplyScalar(speed * playerMoveVertical));
    }

    playerApi.velocity.set(velocity.x, playerVelocity.current.vel[1], velocity.z);

    camera.position.x = playerPosition.current[0];
    camera.position.y = playerPosition.current[1];
    camera.position.z = playerPosition.current[2];
    camera.rotation.order = 'YXZ';

    if (playerRotation?.x === 'right') {
      camera.rotation.y += -playerRotationPosition.x / 40 * delta
    }

    if (playerRotation?.x === 'left') {
      camera.rotation.y += -playerRotationPosition.x / 40 * delta
    }

    if (camera.rotation.x < 1 && playerRotation?.y === 'up') {
      camera.rotation.x += -playerRotationPosition.y / 40 * delta
    }

    if (camera.rotation.x > -0.7 && playerRotation?.y === 'down') {
      camera.rotation.x += -playerRotationPosition.y / 40 * delta
    }

    if (buttonJump && Math.abs(playerVelocity.current.vel[1]) < 0.05) {
      playerApi.velocity.set(playerVelocity.current.vel[0], jumpSpeed, playerVelocity.current.vel[2]);
    }

    //---------------------------------------------------------------- Bullet
    const bulletDirection = cameraDirection.clone().multiplyScalar(bulletSpeed);
    const bulletPosition = camera.position.clone().add(cameraDirection.clone().multiplyScalar(2));

    if (shoot && buttonShoot) {
      const now = Date.now();
      setBullets((bullets: BulletsTypes[]) => [
        ...bullets,
        {
          id: now,
          position: [bulletPosition.x, bulletPosition.y, bulletPosition.z],
          velocity: [bulletDirection.x, bulletDirection.y, bulletDirection.z]
        }
      ]);
      setShoot(false);
      setTimeout(() => {
        setShoot(true);
      }, 300);
    }

    if (!buttonShoot && !shoot) {
      setShoot(true);
      setTimeout(() => {
        setBullets([])
      }, 1000);
    }

    if (shoot && buttonShoot) {
    }

    //---------------------------------------------------------------- Bullet

    const gunRotation = new Vector3();
    const gunPosition = new Vector3(camera.position.x, camera.position.y - .05, camera.position.z);

    gunRef.current.position.copy(gunPosition).add(camera.getWorldDirection(gunRotation).multiplyScalar(1))
    gunRef.current.rotation.copy(camera.rotation);
  });

  return (
    <>
      {bullets.map((bullet: BulletsTypes) => {
        return (
          <Bullet
            key={bullet.id}
            velocity={bullet.velocity}
            position={bullet.position}
          />
        )
      })}

      <mesh ref={gunRef}>
        <Gun url='https://legpzytiaeepvlgmekfk.supabase.co/storage/v1/object/public/game-3d/elements/weapons/cybergun_basic/models/cybergun_basic.glb?t=2022-12-29T12%3A27%3A27.707Z' />
      </mesh>

      <mesh ref={playerRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color={"hotpink"} />
      </mesh>
    </>
  );
};

{/* <group ref={gunRef} scale={.003}>
<group rotation={[0, 3.1, 0]} position={[60, -80, 100]}>
    <Model url='/src/assets/object3d/desert_eagle_gun.glb' />
  </group>
</group> */}

{/* <group ref={gunRef} scale={.09}>
<group rotation={[0, 1.55, 0]} position={[2, -1.3, 5]}>
    <Model url='/src/assets/object3d/desert_eagle_gun.glb' />
  </group>
</group> */}

{/* <group ref={gunRef} scale={.03}>
<group rotation={[0, 3.2, 0]} position={[5, -9, 15]}>
    <Model url='/src/assets/object3d/falcon_rilfe.glb' />
  </group>
</group> */}