

import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const Springpart = ({ number }) => {
  return (
    <Box
      w={{ base: "30%", md: "22%", lg: "22%" }}
      h="100%"
      pb={{ base: "1rem", md: "2rem" }}
    >
      <Text mb="0.5rem" color="#2A4365" mt="1rem">
        Lorem ipsum
      </Text>
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Heading color="#2A4365" fontSize="3rem" fontWeight="500">
          {number}
        </Heading>
        <Heading color="#2A4365" fontSize="3rem" fontWeight="500">
          +
        </Heading>
      </Flex>
      <Text fontWeight="700" color="#2A4365" mt="0.5">
        Lorem ipsum
      </Text>
      <Text color="#1A365D" fontWeight={300} mt="0.5rem">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
        consequatur blanditiis necessitatibus repellat dolorum.
      </Text>
    </Box>
  );
};

export default Springpart;
