import styled from "styled-components";

export const EventEmitterContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 2em;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  > * {
    width: fit-content;
  }

  background-color: ${props => props.theme.leftBackground};;
`;

export const SendMessageFormWrapper = styled.form`
  display: flex;
`;

export const DynamicButtonsWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 2%;

  overflow-x: hidden;
`;
