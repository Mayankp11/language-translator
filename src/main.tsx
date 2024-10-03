import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import theme from './theme.ts'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </StrictMode>
);
