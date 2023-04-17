import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { Home } from "@/containers";
import { GlobalStyles, theme } from "@/css";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
