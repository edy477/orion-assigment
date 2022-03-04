import { Box, layout } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="100vh"
      height="100vh"
      width="100vw"
      b
    >
      <Header />

      {props.children}

      <Footer />
    </Box>
  );
}
