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
  border-radius: 60px 30px 100px 30px;
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin: 10px;
  color: rgba( 255, 255, 255, .8 );
  padding: 2px;
  background-size: 30px;
  background-color:  rgba( 72, 77,80,.7);
  border-radius: 100%;
  box-shadow: 0px 0px 1px 6px rgba( 72, 77,80, .5);
`;

const activeIconCSS = css`
  color: rgba(93, 211, 158, 1);
  box-shadow: 0px 0px 1px 6px rgba(3,187,133, .8);
`;

export const ButtonXmark = styled(CircleXmark)`
  ${iconCSS};
  ${({ activeCSS }: { activeCSS: boolean }) => activeCSS && activeIconCSS};
  `;

export const ButtonSquare = styled(CircleStop)`
  ${iconCSS};
  margin-bottom: 43px;
  margin-right: -30px;
  margin-left: 1px;
  `;

export const ButtonTriangle = styled(CirclePlay)`
  ${iconCSS};
  transform: rotate(-90deg);
  margin-bottom: 100px;
  margin-right: 1px;
  `;

export const ButtonCircle = styled(CircleDot)`
  ${iconCSS};
  ${({ activeCSS }: { activeCSS: boolean }) => activeCSS && activeIconCSS};
  `;