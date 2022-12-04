import React from "react";
import useCreateLogText from "../../hooks/useCreateLogText";

import { LoggerContainer, OutputArea } from "./log.styles";

interface Props {
  logs: Array<any>;
}

const LogComponent = ({ logs }: Props): JSX.Element => {
  const createLog = useCreateLogText();

  return (
    <LoggerContainer>
      <OutputArea>
        {logs.map((element, idx) => (
          <div style={{height: 'fit-content'}} key={idx}>{createLog(element)}</div>
        ))}
      </OutputArea>
    </LoggerContainer>
  );
};

export default LogComponent;
