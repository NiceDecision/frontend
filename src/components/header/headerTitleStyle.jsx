import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 96vw;
`;
export const Container = styled.div`
  padding: 12px;
  display: flex;
  position: relative;
  width: 320px;
  height: 4vh;
  justify-content: center;
`;
export const LightBox = styled.div`
  background-color: #dbd2bc;
  width: 200px;
  height: 40px;
  left: 12px;
  top: 2vh;
  position: absolute;
  display: flex;
`;
export const BrownBox = styled.div`
  background-color: #a99985;
  position: absolute;
  width: 200px;
  height: 40px;
  right: 12px;
  top: 1vh;
`;
export const Text = styled.div`
  font-size: 32px;
  z-index: 1;
  font-weight: 700;
`;
