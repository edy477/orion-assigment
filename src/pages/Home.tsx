import React from "react";
import useFetch from "use-http";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Stats from "../components/Stats";
import Form from "../components/Form";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Icon,
  createIcon
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FormControl,
  Input,
  FormLabel,
  HStack,
  Stack,
  Text,
  Button,
  Container,
  Link,
  Heading,
  SimpleGrid,
  GridItem,
  Menuutton,
  MenuList,
  MenuItem,
  MenuButton,
  VStack,
  Image,
  Menu,
  Stat,
  StatLabel,
  StatHelpText,
  StatNumber
} from "@chakra-ui/react";

export const Home = () => {
  const options = {}; // these options accept all native `fetch` options
  // the last argument below [] means it will fire onMount (GET by default)
  //const { loading, error, data = [] } = useFetch(
  //   "https://stats.orionx.com/ticker",
  //  options,
  //  []
  // );
  // {if(data)}
  //data.map(item => {console.log(item.name)})
  // console.log(data['BTCCLP']['name']);

  //  Object.keys(data).map((item) => console.log(data[item].name));

  return (
    <Layout>
      <Main />
      <Stats />
      <Form />
    </Layout>
  );
};
