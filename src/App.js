import React from "react";
import Routes from "./routes";

import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
import light from "./themes/light";


function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
