import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  //position: relative;
  margin: 0 auto;
  background: var(--primary);
`;

export const Wrapper = styled.div`
  min-height: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);
  margin-bottom: 85px;
  @media (min-width: 550px) {
    border-left: 1px solid var(--gray);
    border-right: 1px solid var(--gray);
    border-bottom: 1px solid var(--outline);
  }
`;