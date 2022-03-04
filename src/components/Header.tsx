import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverCloseButton,
  PopoverFooter,
  Portal,
  SimpleGrid
} from "@chakra-ui/react";
import React from "react";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  Icon,
  createIcon
} from "@chakra-ui/icons";

const MenuIcon = () => (
  <svg
    width="24"
    height="18"
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1C0 0.447715 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1C24 1.55228 23.5523 2 23 2H1C0.447716 2 0 1.55228 0 1ZM4 9C4 8.44771 4.44772 8 5 8H23C23.5523 8 24 8.44771 24 9C24 9.55229 23.5523 10 23 10H5C4.44772 10 4 9.55229 4 9ZM9 16C8.44771 16 8 16.4477 8 17C8 17.5523 8.44771 18 9 18H23C23.5523 18 24 17.5523 24 17C24 16.4477 23.5523 16 23 16H9Z"
      fill="#353347"
    />
  </svg>
);

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      fontWeight="400"
      fontStyle="Regular"
      fontSize="1rem"
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const Header = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      pt="2rem"
      pl={{ base: "1.25rem", md: "5rem" }}
      pr={{ base: "1rem", md: "5.12rem" }}
    >
      <Box>
        <img alt="logo" src="./Full.png" width="126" height="32" />
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>
      <Box display={{ base: show ? "block" : "none", md: "block" }}>
        <Flex align="center">
          <MenuItem to="/not">
            <Popover>
              <PopoverTrigger>
                <Button
                  rightIcon={<ChevronDownIcon />}
                  variant="link"
                  borderStyle="none"
                  borderWidth="0"
                >
                  Products
                </Button>
              </PopoverTrigger>

              <Portal>
                <PopoverContent
                  borderWidth="0"
                  borderStyle="none"
                  borderColor="white"
                  boxShadow="0px 4px 16px rgba(93, 92, 108, 0.2)"
                  borderRadius="10px"
                  bg="#FFFFFF"
                  width="696px"
                  height="178.34px"
                  pl="30px"
                  pt="20px"
                  pb="34px"
                >
                  <PopoverCloseButton />
                  <PopoverBody>
                    <SimpleGrid
                      columns={2}
                      templateRows="repeat(2, 1fr)"
                      spacing={5}
                    >
                      <Box display="flex">
                        <Box w="40px" h="40px">
                          <img src="./wallet.svg" />
                        </Box>

                        <Box ml="10px">
                          <Text as="h5" fontSize="12px" fontWeight="bold">
                            Wallet
                          </Text>
                          <p>Tu billettera personal de criptos online</p>
                        </Box>
                      </Box>
                      <Box display="flex">
                        <Box w="40px" h="40px">
                          <img src="./instant.svg" />
                        </Box>
                        <Box ml="10px">
                          <Text as="h5" fontSize="12px" fontWeight="bold">
                            Instant
                          </Text>
                          <p>Tu billettera personal de criptos online</p>
                        </Box>
                      </Box>
                      <Box display="flex">
                        <Box w="40px" h="40px">
                          <img src="./exchange.svg" />
                        </Box>
                        <Box ml="10px">
                          <Text as="h5" fontSize="12px" fontWeight="bold">
                            Instant
                          </Text>
                          <p>Tu billettera personal de criptos online</p>
                        </Box>
                      </Box>
                      <Box display="flex">
                        <Box w="40px" h="40px">
                          <img src="./ship.svg" />
                        </Box>
                        <Box ml="10px">
                          <Text as="h5" fontSize="12px" fontWeight="bold">
                            Instant
                          </Text>
                          <p>Tu billettera personal de criptos online</p>
                        </Box>
                      </Box>
                      <Box></Box>
                    </SimpleGrid>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </MenuItem>
          <MenuItem to="/not">Mercado</MenuItem>
          <MenuItem to="/not">Soporte</MenuItem>
          <MenuItem to="/not">Blog</MenuItem>
          <MenuItem to="/not" isLast>
            <Button bg="#E6EEFF" color="#0456FB">
              Ingresar
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
