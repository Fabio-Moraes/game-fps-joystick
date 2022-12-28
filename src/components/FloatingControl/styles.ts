import styled, { css } from 'styled-components';

import { CirclePlay, CircleStop, CircleDot, CircleXmark } from '../../styles/icons'

export const Container = styled.div`
    width: 100%;   
    display: flex;
    flex-direction: column;   
    align-items: flex-end; 
    padding-right: 10px;
`;

export const Wrapper = styled.div`
  bottom: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  position: absolute;

  box-shadow: 0 15px 0 0 rgba(246, 105, 105, .8);
  padding-right: 10px;
  padding-top: 30px;
  //background: rgba(255, 255, 255, .1);
  //border-radius: 30px;
  border-radius: 60px 30px 100px 30px;
`

const iconCSS = css`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  margin: 5px;
  //color: #000;
  //box-shadow: 0px 0px 0px 2px white;
  padding: 2px;

  background-size: 30px;

  border-width: 30px;
  border-color: #0000ff;
  
  background-color: rgba(93, 211, 158, .7);
  border-radius: 100%;
`;

export const ButtonXmark = styled(CircleXmark)`
  ${iconCSS};

  `;

export const ButtonSquare = styled(CircleStop)`
    ${iconCSS}
    ;
    
  margin-bottom: 40px;
  margin-right: -40px;
  margin-left: -5px;
  `;

export const ButtonTriangle = styled(CirclePlay)`
  ${iconCSS};

  transform: rotate(-90deg);
  margin-bottom: 100px;
  margin-right: -5px;
`;

export const ButtonCircle = styled(CircleDot)`
    ${iconCSS};
  `;

