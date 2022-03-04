import { ChakraProvider, Heading } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import { Home } from "./pages/Home";
import "@fontsource/roboto";
import theme from "../themes";

function App() {
  return <Heading>Test to Chakra + TS</Heading>;
}

const rootElement = document.getElementById("root");
render(
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>,
  rootElement
);
