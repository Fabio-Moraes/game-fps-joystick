import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;   
  align-items: center; 

  pointer-events: none;
  position: absolute;
`;


export const JoystickLeft = styled.div`
 margin-left: 125px;
 bottom: 150px;
 
 pointer-events: visible;
 position: absolute;
`;

export const JoystickRight = styled.div`
  left: 100% ;
  margin-left: -133px;
  bottom: 150px;
  
  pointer-events: visible;
  position: absolute;
`;