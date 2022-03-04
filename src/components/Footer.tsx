import {
  HStack,
  Text,
  Box,
  Link,
  Stack,
  SimpleGrid,
  GridItem,
  Select,
  VStack,
  Button,
  Heading,
  Image
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box
        height={["968px", "56vh"]}
        bg="#022264"
        color="white"
        pl={["18px", "12.84%"]}
        pt={["130px", "6.45%"]}
      >
        <HStack>
          <SimpleGrid
            w="806px"
            h="188px"
            columns={[2, 5]}
            templateRows={["repeat(5, 1fr)", "1"]}
            overflow="hidden"
          >
            <GridItem
              colStart={[1, 1]}
              colEnd={[1, 1]}
              rowStart={[1, 1]}
              rowEnd={[1, 1]}
            >
              <Heading as="h4" fontSize="24px">
                Servicios
              </Heading>
              <Stack align={"flex-start"}>
                <Link>Exchange</Link>
                <Link>Instant</Link>
                <Link>Wallet</Link>
                <Link>Mercado</Link>
              </Stack>
            </GridItem>
            <GridItem
              colStart={[2, 2]}
              colEnd={[2, 2]}
              rowStart={[1, 1]}
              rowEnd={[1, 1]}
            >
              <Stack align={"flex-start"}>
                <Link>Cuenta</Link>
                <Link>Seguridad</Link>
                <Link>Referidos</Link>
              </Stack>
            </GridItem>

            <GridItem
              colStart={[1, 3]}
              colEnd={[1, 3]}
              rowStart={[2, 1]}
              rowEnd={[2, 1]}
            >
              <Heading as="h4" fontSize="24px">
                Nosotros
              </Heading>
              <Stack align={"flex-start"}>
                <Link>Empresa</Link>
              </Stack>
            </GridItem>

            <GridItem
              colStart={[1, 4]}
              colEnd={[1, 4]}
              rowStart={[3, 1]}
              rowEnd={[3, 1]}
            >
              <Heading as="h4" fontSize="24px">
                Recursos
              </Heading>
              <Stack align={"flex-start"}>
                <Link>Blog</Link>
                <Link>Desarrolladores</Link>
                <Link>Soporte</Link>
                <Link>Politica de Privacidad</Link>
              </Stack>
            </GridItem>
          </SimpleGrid>

          <SimpleGrid columns={2} spacingX="16px" spacingY="16px">
            <Button bgColor="rgba(215, 214, 218, .1)" w="92px" h="48px">
              <Image src="./icons8-facebook_logo 1.png" position="relative" />
            </Button>
            <Button bgColor="rgba(215, 214, 218, .1)" w="92px" h="48px">
              <Image src="./icons8-discord_new 1.png" />
            </Button>
            <Button bgColor="rgba(215, 214, 218, .1)" w="92px" h="48px">
              <Image src="./icons8-twitter 1.png" />
            </Button>
            <Button bgColor="rgba(215, 214, 218, .1)" w="92px" h="48px">
              <Image src="./icons8-youtube_play_button 1.png" />
            </Button>

            <Button bgColor="rgba(215, 214, 218, .1)" w="92px" h="48px">
              <Image src="./icons8-youtube_play_button 1.png" />
            </Button>
            <Button bgColor="rgba(215, 214, 218, .1)" w="92px" h="48px">
              <Image src="./Subtract.png" />
            </Button>
          </SimpleGrid>
        </HStack>
        <Box display="flex" justifyContent="center">
          <VStack>
            <Select
              placeholder="Select option"
              mt="89px"
              display="block"
              w="200px"
              h="44px"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Text fontSize="sm" color="white" mt="3rem">
              orion 2017 - 2021{" "}
            </Text>
          </VStack>
        </Box>
      </Box>
    </footer>
  );
};
export default Footer;
