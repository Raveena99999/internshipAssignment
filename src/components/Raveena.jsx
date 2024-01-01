import React from "react";
import { Flex, Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import manLogo from "../assets/running.png";
import polygon from "../assets/Polygon.png";

const Raveena = () => {
  return (
    <Flex
    direction={{base:"column-reverse",md:"row"}}
      backgroundImage="linear(to right, #EDF2F7 , #FFFFFF)"
      w="100%"
      justify="space-between"
      h="auto"
      pb="1rem"
      align="center"
    >
      <Box
       h="100%" pt="3rem" ml="4rem"
       w={{base:"80%",md:"30%",lg:"30%"}}
       >
        <Heading pb="1rem" color="#1A365D">Lorem Ipsum</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, porro
          natus architecto ullam eaque laudantium reprehenderit laboriosam neque
          laborum amet, quae non voluptates! Voluptatem dignissimos mollitia
          esse pariatur sed cum.
        </Text>
        <Button bg="#1A365D" color="#FFFFFF" mt="1rem" borderRadius="1rem" >
          Know More <Image ml="0.5rem" src={polygon}/>
        </Button>
      </Box>
      <Box h="100%">
        <Image src={manLogo} h="100%" />
      </Box>
    </Flex>
  );
};
export default Raveena;
