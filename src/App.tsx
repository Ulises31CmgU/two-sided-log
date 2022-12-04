import React, { useState } from "react";
import { dateFormater } from "./utils/dateFormater";

import "./App.css";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import { THEMES } from "./utils/themes";

import { EventEmitterComponent, LogComponent } from "./components";

type ThemesKey = keyof typeof THEMES;

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [events, setEvents] = useState<Array<string>>([]);
  const [date, setDate] = useState(new Date());

  const createEvent = (message: string) => {
    setDate(new Date());
    setEvents([`${dateFormater(date)} ${message}`, ...events]);
  };

  return (
    <ConfigProvider theme={THEMES[currentTheme as ThemesKey]}>
      <ThemeProvider theme={THEMES[currentTheme as ThemesKey]}>
        <div className="App">
          <EventEmitterComponent
            createEvent={createEvent}
            currentTheme={currentTheme}
            setTheme={setCurrentTheme}
          />
          <LogComponent logs={events} />
        </div>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
