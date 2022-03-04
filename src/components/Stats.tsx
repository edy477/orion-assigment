import {
  Link,
  Box,
  Flex,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Text
} from "@chakra-ui/react";
import React from "react";

const StatsRow = ({ data }) => {
  console.log(data["BCHCLP"].lastPrice);
  return (
    <Flex
      id="boxs"
      justifyContent="center"
      mb="2rem"
      flexDirection={["column", "row"]}
      spacing="24px"
    >
      <Box
        borderRadius="10px"
        border="1px solid rgba(93, 92, 108, 0.1)"
        h={["66px", "64px"]}
        w={["318px", "254px"]}
        bg="linear-gradient(0deg, rgba(251, 181, 4, 0.05), rgba(251, 181, 4, 0.05)), #FFFFFF"
        pl="16px"
        pt="10px"
        pb="16px"
        color="#353347"
        mr={["none", "24px"]}
        alignSelf={["center", "normal"]}
        mb={["24px", "none"]}
      >
        <Flex>
          <Box>
            <img src="/BTC1.svg" alignSelf="start" />
          </Box>

          <Stat ml="10px">
            <StatLabel
              fontWeight="400"
              lineHeight="14.38px"
              fontSize="12px"
              color="#353347"
            >
              Bitcoin<Text color="#AEADB5"> BTC</Text>
            </StatLabel>

            <StatNumber fontSize="14px">
              {data["BCHCLP"].lastPrice.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </StatNumber>
          </Stat>
          <Stat alignSelf="center">
            <StatNumber
              fontSize="14px"
              alignSelf="flex-end"
              color="#02BCA0
"
            >
              {data["BCHCLP"].variation24h}
            </StatNumber>
          </Stat>
        </Flex>
      </Box>
      <Box
        borderRadius="10px"
        border="1px solid rgba(93, 92, 108, 0.1)"
        h={["66px", "64px"]}
        w={["318px", "254px"]}
        bg="linear-gradient(0deg, rgba(226, 45, 136, 0.05), rgba(226, 45, 136, 0.05)), #FFFFFF"
        pl="16px"
        pt="10px"
        pb="16px"
        color="#353347"
        mr={["none", "24px"]}
        mb={["24px", "none"]}
        alignSelf={["center", "normal"]}
      >
        <Flex>
          <Box>
            <img src="./icons/ETH 1.svg" alignSelf="start" />
          </Box>

          <Stat ml="10px">
            <StatLabel
              fontWeight="400"
              lineHeight="14.38px"
              fontSize="12px"
              color="#353347"
            >
              {data["ETHCLP"].name}
              <Text color="#AEADB5"> {data["ETHCLP"].name}</Text>
            </StatLabel>

            <StatNumber fontSize="14px">
              {data["ETHCLP"].lastPrice.toLocaleString(undefined, {
                maximumFractionDigits: 2
              })}
            </StatNumber>
          </Stat>
          <Stat alignSelf="center">
            <StatNumber
              fontSize="14px"
              alignSelf="flex-end"
              color="#02BCA0
"
            >
              +3.61%
            </StatNumber>
          </Stat>
        </Flex>
      </Box>

      <Box
        borderRadius="10px"
        border="1px solid rgba(93, 92, 108, 0.1)"
        h={["66px", "64px"]}
        w={["318px", "254px"]}
        bg=" linear-gradient(0deg, rgba(2, 188, 160, 0.05), rgba(2, 188, 160, 0.05)), #FFFFFF"
        pl="16px"
        pt="10px"
        pb="16px"
        color="#353347"
        mr={["none", "24px"]}
        mb={["24px", "none"]}
        alignSelf={["center", "normal"]}
      >
        <Flex>
          <Box>
            <img src="./icons/USDT 1.svg" alignSelf="start" />
          </Box>

          <Stat ml="10px">
            <StatLabel
              fontWeight="400"
              lineHeight="14.38px"
              fontSize="12px"
              color="#353347"
            >
              Bitcoin<Text color="#AEADB5"> BTC</Text>
            </StatLabel>

            <StatNumber fontSize="14px">$3,4162426</StatNumber>
          </Stat>
          <Stat alignSelf="center">
            <StatNumber
              fontSize="14px"
              alignSelf="flex-end"
              color="#02BCA0
"
            >
              +3.61%
            </StatNumber>
          </Stat>
        </Flex>
      </Box>

      <Box
        borderRadius="10px"
        border="1px solid rgba(93, 92, 108, 0.1)"
        h={["66px", "64px"]}
        w={["318px", "254px"]}
        bg="linear-gradient(0deg, rgba(251, 181, 4, 0.05), rgba(251, 181, 4, 0.05)), #FFFFFF"
        pl="16px"
        pt="10px"
        pb="16px"
        color="#353347"
        mr={["none", "24px"]}
        mb={["24px", "none"]}
        alignSelf={["center", "normal"]}
      >
        <Flex>
          <Box>
            <img src="./icons/DOT 1.svg" alignSelf="start" />
          </Box>

          <Stat ml="10px">
            <StatLabel
              fontWeight="400"
              lineHeight="14.38px"
              fontSize="12px"
              color="#353347"
            >
              Bitcoin<Text color="#AEADB5"> BTC</Text>
            </StatLabel>

            <StatNumber fontSize="14px">$3,4162426</StatNumber>
          </Stat>
          <Stat alignSelf="center">
            <StatNumber
              fontSize="14px"
              alignSelf="flex-end"
              color="#02BCA0
"
            >
              +3.61%
            </StatNumber>
          </Stat>
        </Flex>
      </Box>
    </Flex>
  );
};

import {
  ChevronDownIcon,
  ChevronRightIcon,
  Icon,
  createIcon
} from "@chakra-ui/icons";
import { useAxios } from "use-axios-client";
const Stats = () => {
  const { data, error, loading } = useAxios({
    url: "https://stats.orionx.com/ticker"
  });
  if (data) console.log(data);

  return (
    <Box mt="4rem">
      {data && <StatsRow data={data} />}

      <Link textAlign="center" righIcon>
        <Text>
          Ver mercado
          <ChevronRightIcon />
        </Text>
      </Link>
    </Box>
  );
};

export default Stats;
