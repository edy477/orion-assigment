import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Button,
  HStack,
  Image,
  Container,
  Portal
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Icon,
  createIcon
} from "@chakra-ui/icons";

import { Center, Square, Circle } from "@chakra-ui/react";
import React from "react";
import { useAxios } from "use-axios-client";
//height="40vh"
//211 * 377
const Main = () => {
  const { data, error, loading } = useAxios({
    url: "https://stats.orionx.com/ticker"
  });
  if (data) console.log(data);

  const ref = React.useRef();
  return (
    <Box display="flex" justifyContent="center">
      <Flex
        height="auto"
        width={["322px", "66.30vw"]}
        flexDirection={{ base: "column-reverse", md: "row" }}
        pt={{ base: "70px", xl: "6.25rem" }}
        align-items="center"
      >
        <VStack
          flexBasis="50%"
          justifyContent="flex-start"
          align="stretch"
          alignSelf="end"
          mr="6.25%"
        >
          <Heading
            as="h2"
            size="xl"
            color="#022264"
            textAlign={["center", "start"]}
          >
            Sé parte de la revolución digital y comienza a invertir en los
            activos del futuro.
          </Heading>

          <Text fontSize="xl" color="#5D5C6C" textAlign={["center", "start"]}>
            Compra y vende criptomonedas en minutos en la plataforma más segura
            y con mayor variedad de Chile.
          </Text>

          <Button
            bg="#0456FB"
            color="#0456FB"
            w={["100%", "172px"]}
            h={["49px", "44px"]}
            borderRadius="10px"
          >
            <Text color="white">Crear una cuenta</Text>
          </Button>
          <HStack pt="2rem" justifyContent={["center", "normal"]}>
            {" "}
            <Square
              width="1rem"
              height="8px"
              bg="#0456FB"
              color="white"
              borderRadius="17px"
            ></Square>
            <Circle size="8px" bg="#E1E0E6" color="white"></Circle>
          </HStack>
        </VStack>
        <Portal containerRef={ref}>
          <Box pos="absolute" top="18%" left="48%">
            <Box pos="relative" top="0%" left="90%">
              <img src="./icons/ADA 2.svg" />
            </Box>
          </Box>
          <Box pos="absolute" top="48%" left="51%">
            <Box pos="relative" top="0%" left="90%">
              <img src="./icons/USDT 2.svg" />
            </Box>
          </Box>
          <Box pos="absolute" top="68%" left="46%">
            <Box pos="relative" top="0%" left="90%">
              <img src="./icons/ETH 2.svg" />
            </Box>
          </Box>
          <Box pos="absolute" top="18%" left="70%">
            <Box pos="relative" top="0%" left="90%">
              <img src="./icons/BTC 2.svg" />
            </Box>
          </Box>
          <Box pos="absolute" top="48%" left="80%">
            <Box pos="relative" top="0%" left="90%">
              <img src="./icons/DOT 2.svg" />
            </Box>
          </Box>
          <Box pos="absolute" top="65%" left="70%">
            <Box pos="relative" top="0%" left="90%">
              <img src="./icons/SOL 2.svg" />
            </Box>
          </Box>
        </Portal>
        <Box
          ref={ref}
          width={{ base: "211px", md: "335.64px" }}
          alignSelf="center"
        >
          <img src="./iphone.png" />
        </Box>
      </Flex>
    </Box>
  );
};
export default Main;
