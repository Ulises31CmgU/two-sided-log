import React from "react";
import { LogTextWrapper } from "./log-text.styles";

interface Props {
  text: string;
}

const LogTextComponent = ({ text }: Props) => {
  return (
    <LogTextWrapper>{text}</LogTextWrapper>
  );
};

export default LogTextComponent;
