import { Button } from "antd";
import React from "react";

export default function useCreateButton() {
  return function (idx: number, onClick: Function) {
    return React.createElement(
      Button,
      { type: "primary", onClick: () => onClick(`Button ${idx} clicked`) },
      `Button ${idx}`
    );
  };
}
