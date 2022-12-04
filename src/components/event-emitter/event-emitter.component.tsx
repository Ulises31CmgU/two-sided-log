import React, { useState } from "react";
import useCreateButton from "../../hooks/useCreateButton";

import {
  DynamicButtonsWrapper,
  EventEmitterContainer,
  SendMessageFormWrapper,
} from "./event-emitter.styles";

import { Button, Input } from "antd";

interface Props {
  createEvent: Function;
  currentTheme: string;
  setTheme: Function;
}

const EventEmitterComponent = ({
  createEvent,
  currentTheme,
  setTheme,
}: Props) => {
  const createButton = useCreateButton();

  const [message, setMessage] = useState("");
  const [dynamicButtonIdx, setDynamicButtonIdx] = useState<Array<number>>([]);

  const handleThemeToggle = () => {
    createEvent(
      `Theme was set to ${currentTheme === "light" ? "dark" : "light"}`
    );
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  const handleCreateNewButton = () => {
    createEvent(`Button ${dynamicButtonIdx.length + 1} was added`);
    setDynamicButtonIdx([...dynamicButtonIdx, dynamicButtonIdx.length + 1]);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value.trim());
  };

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (message) {
      createEvent(`Message Sent: ${message}`);
      setMessage("");
    }
  };

  return (
    <EventEmitterContainer>
      <Button size="large" type="primary" onClick={handleThemeToggle}>
        {`set theme to ${currentTheme === "light" ? "dark" : "light"}`}
      </Button>

      <SendMessageFormWrapper onSubmit={handleSubmit}>
        <Input name="message" onChange={handleChange} value={message} />
        <Button
          type="primary"
          disabled={message ? false : true}
          onClick={handleSubmit}
        >
          Send message
        </Button>
      </SendMessageFormWrapper>
      <Button size="large" type="primary" onClick={handleCreateNewButton}>
        {`Add Button ${dynamicButtonIdx.length + 1}`}
      </Button>
      <DynamicButtonsWrapper>
        {dynamicButtonIdx.map((number) => (
          <div key={number}>{createButton(number, createEvent)}</div>
        ))}
      </DynamicButtonsWrapper>
    </EventEmitterContainer>
  );
};

export default EventEmitterComponent;
