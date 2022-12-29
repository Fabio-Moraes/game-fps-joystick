import { extend } from "@react-three/fiber";
import { useState } from "react";
import ReactNipple from "react-nipple";
import { useContexState } from '../../hooks/context';
import { Container, JoystickRight, JoystickLeft } from './styles';


interface Data {
    direction?: {
        x: 'left' | 'right';
        y: 'up' | 'down';
    };

    frontPosition: {
        x: number;
        y: number;
    };

    instance: {
        frontPosition: {
            x: number;
            y: number;
        }
    };
};


interface Evt {
    type: string;
    target: {};
};

export function Joysticks() {
    const {
        setPlayerMove,
        setPlayerRotation,
        setPlayerMovePosition,
        setPlayerRotationPosition
    } = useContexState();


    const joystickLeftEnd = () => {
        setPlayerMovePosition({ x: 0, y: 0 });
        setPlayerMove(undefined);
    };
    const joystickLeftMove = (evt: Evt, data: Data) => {
        setPlayerMovePosition(data.instance.frontPosition);
    };
    const joystickLeftDir = (evt: Evt, data: Data) => {
        setPlayerMove(data.direction);
    };


    const joystickRightEnd = (evt: Evt, data: Data,) => {
        setPlayerRotationPosition({ x: 0, y: 0 });
        setPlayerRotation(undefined);
    };
    const joystickRightMove = (evt: Evt, data: Data) => {
        setPlayerRotationPosition(data.instance.frontPosition);
    };
    const joystickRightDir = (evt: Evt, data: Data) => {
        setPlayerRotation(data.direction);
    };


    const options = {
        mode: "static",
        color: "#484d50",
        position: { top: "50%", left: "10%" },
        size: 110,
        treshold: 0.1
    };

    return (
        <Container>
            <JoystickLeft >
                <ReactNipple
                    options={options}
                    onEnd={joystickLeftEnd}
                    onMove={joystickLeftMove}
                    onDir={joystickLeftDir}
                />
            </JoystickLeft>

            <JoystickRight>
                <ReactNipple
                    options={options}
                    onEnd={joystickRightEnd}
                    onMove={joystickRightMove}
                    onDir={joystickRightDir}
                />

            </JoystickRight >
        </Container>
    );
};

/**
 * <ReactNipple
 * onEnd={}
 * onMove={}
 * onDir={}
 * onStart={}
 * onPlain={}
 * onShown={}
 * onHidden={}
 * onPressure={}
 * />
*/