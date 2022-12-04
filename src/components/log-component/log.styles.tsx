import styled from "styled-components";

export const LoggerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vh 3vw;

  background-color: ${props => props.theme.rightBackground};
`;

export const OutputArea = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;

  > :first-child > * {
    ::before {
      content: ">>";
      padding-right: 0.3em;
    }
  }
`;
