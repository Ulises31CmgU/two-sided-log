import React from "react";
import { LogTextComponent } from "../components";

export default function useCreateLogText() {
  return function (text: string) {
    return React.createElement(LogTextComponent, { text: text});
  };
}
