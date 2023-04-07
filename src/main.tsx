import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

/**
 * const config={
 *    initialColorMode:"light",
 *    useSystemColorMode:false,
 *  }
 *
 * const theme=extendTheme({
 *    config,
 * })
 *
 * // Now Pass theme={theme} as a prop to 'ChakraProvider and
 * // pass initialColorMode={theme.config.initialColorMode} to 'ColorModeScript'
 */

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="system" />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
