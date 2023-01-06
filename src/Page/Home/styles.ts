import styled, { css } from 'styled-components';
import { PlusCircle } from '../../styles/icons'

export const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`

export const Container = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;

  align-items: center;
  
  display: flex;
  flex-direction: column;
  background: var(--primary);
`;

export const WrapperCanvas = styled(Container)`
  position: absolute;
`;

export const Aim = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(93, 211, 158, .9);
`

const iconCSS = css`
  flex-shrink: 0;
  width: 40px;
  height: 40px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0.8;
`;

export const Duty = styled.img`
  width: 290px;
  height: 50%;
  bottom: 0;
  margin-left: 45px;

  position: absolute;
`

export const AimIcon = styled(PlusCircle)`
  ${iconCSS};
 `;