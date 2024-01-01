import React from "react";
import { Box, Flex, Text, Image, Input, Button } from "@chakra-ui/react";
import subscribe from "../assets/Subscribe.png";
import Lorem from "../assets/Lorem.png";
import Mask from "../assets/Mask.png";
import polygon from "../assets/Polygon.png";

export default function Subscribe() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      width="85%"
      m="auto"
      mt="3rem"
    >
      <Box flex="1" mr={{ base: "0", md: "2rem" }}>
        <Image src={subscribe} />
        <Image mt="1.5rem" src={Lorem} />
        <Flex mt="1.5rem" align="center">
          <Input placeholder="Enter your Email Address" />
          <Button
            p="1.25rem"
            ml="1rem"
            bg="#1A365D"
            width="12rem"
            color="white"
          >
            Subscribe Now <Image ml="0.5rem" src={polygon} />
          </Button>
        </Flex>
      </Box>
      <Box flex="1">
        <Image src={Mask} />
      </Box>
    </Flex>
  );
}
