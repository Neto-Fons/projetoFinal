import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"
import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/DefaultThemes";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}