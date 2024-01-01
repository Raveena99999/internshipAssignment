import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import AccordianComponent from "./AccordianComponent";
const Faq = () => {
  return (
    <Box width="85%" m="auto" mt="3rem" >
      <Heading textAlign="center" color="#2A4365" mt="1rem">
        FAQ
      </Heading>
      <Box mt="1rem" w="100%" h="auto">
        <AccordianComponent />
      </Box>
    </Box>
  );
};
export default Faq;
