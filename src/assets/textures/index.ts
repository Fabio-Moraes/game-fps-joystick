import { NearestFilter, TextureLoader, RepeatWrapping } from 'three';

const shot = 'https://legpzytiaeepvlgmekfk.supabase.co/storage/v1/object/public/game-3d/elements/weapons/cybergun_basic/textures/shot_effect.png?t=2022-12-29T12%3A24%3A18.712Z';

import ground from './ground.jpg';

const shotTexture = new TextureLoader().load(shot);
const groundTexture = new TextureLoader().load(ground);

shotTexture.magFilter = NearestFilter;

groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.repeat.set(50, 50);

export {
	shotTexture,
	groundTexture
}