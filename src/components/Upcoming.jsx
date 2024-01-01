
import React from 'react';
import { Box, Flex, Image,useBreakpointValue } from '@chakra-ui/react';
import Enquire from '../assets/Enquire.png';
import Group from '../assets/Group.png';
import Line156 from '../assets/Line156.png';
import November from '../assets/November.png';
import October from '../assets/October.png';
import Ongoing from '../assets/Ongoing.png';
import upcoming from '../assets/upcomingExaminations.png';

export default function Upcoming() {
let isMobile = useBreakpointValue({
  base:false,
  sm:false,
  md:true,
  lg:true
})
  return (
    <Box width="85%" m="auto" mt="2rem" >
      <Flex
        direction={{ base: 'column', md: 'row' }} 
        justify="space-between"
        align="flex-start"
      >
        <Box mb={{ base: '1rem', md: '0' }}> 
          <Image src={upcoming} alt="upcoming" height={{ base: '3rem', md: '4rem' }} />
          <Image src={Enquire} alt="Enquire" height="2rem" />
        </Box>
        <Box mb={{ base: '1rem', md: '0' }}> 
          {isMobile&&<Image src={Line156} alt="upcoming" height="6rem" />}
        </Box>
        <Flex direction="row" alignItems="flex-start" mb={{ base: '1rem', md: '0' }}> 
          <Image src={Group} alt="upcoming" height="3rem" />
          <Image src={October} alt="October" height="3rem" />
        </Flex>
        <Flex direction="row" alignItems="flex-start" mb={{ base: '1rem', md: '0' }}> 
          <Image src={Group} alt="upcoming" height="3rem" />
          <Image src={November} alt="November" height="5rem" />
        </Flex>
        <Flex direction="row" alignItems="flex-start" mb={{ base: '1rem', md: '0' }}> 
          <Image src={Group} alt="upcoming" height="3rem" />
          <Image src={Ongoing} alt="Ongoing" height="3rem" />
        </Flex>
      </Flex>
    </Box>
  );
}
