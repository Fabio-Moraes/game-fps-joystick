import create from 'zustand'
import { nanoid } from 'nanoid'

import data from '../loadMap/home.json'

/* const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))
 */

interface CubeTypes {
    key: string,
    pos: [x: number, y: number, z: number],
    texture: string
}

interface PrevTypes {
    texture: string;
    cubes: CubeTypes[]
}

interface StateTypes {
    texture: string;
    cubes: CubeTypes[];
    addCube: (x: number, y: number, z: number) => void;
    removeCube: (x: number, y: number, z: number) => void;
    setTexture: (texture: string) => void;
    saveWorld: () => void;
    resetWorld: () => void;
    loadMap: () => void;
}

const load = JSON.parse(JSON.stringify(data))

export const useStore = create<StateTypes>((set) => ({
    texture: 'dirt',
    cubes: [
      {
              key: nanoid(),
              pos: [2, 1, 0],
              texture: 'dirt'
          },
          {
              key: nanoid(),
              pos: [2, 0, 0],
              texture: 'wood'
          } 
    ],
    
    addCube: (x, y, z) => {
        set((prev: PrevTypes) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x, y, z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: (x, y, z) => {
        set((prev: PrevTypes) => ({
            cubes: prev.cubes.filter(cube => {
                const [X, Y, Z] = cube.pos
                return X !== x || Y !== y || Z !== z
            })
        }))
    },
    loadMap: () => {
        console.log('load', load)
        set(() => ({
            cubes: load
        }))
    },
    setTexture: (texture) => {
        set(() => ({
            texture
        }))
    },
    saveWorld: () => {
        /* set((prev: any) => {
                setLocalStorage('cubes', prev.cubes)
            }) */
    },
    resetWorld: () => {
        set(() => ({
            cubes: []
        }))
    },
}))