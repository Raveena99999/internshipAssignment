
import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import backgroundImageUrl from '../assets/footer_banner.png';
import footerline from '../assets/Footerline.png';
import location from '../assets/location.png';
import timer from '../assets/timer.png';
import trolley from '../assets/trolley.png';
import facebook from '../assets/facebook.png';
import linkedln from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import quora from '../assets/quora.png';

export default function Footer() {
  return (
    <Box

      bgImage={`url(${backgroundImageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-evenly"
        align={{ base: 'center', md: 'initial' }}
        py={{ base: '2rem', md: '4rem' }}
      >
        <Box width={{ base: '90%', md: '30%' }} ml={{ base: '0', md: '3rem' }}>
          <Text color="white" fontWeight="bold" fontSize="1.2rem" >
            Contact us
          </Text>
          <Text color="white" fontSize="0.800rem" mt="1rem">
            Address: amet, consetetur sadipscing elitr, sed diam
          </Text>
          <Text color="white" fontSize="0.800rem" mt="0.5rem">
            Email id: eirmod tempor invidunt ut labore at dolore
          </Text>
          <Text color="white" fontSize="0.800rem" mt="0.5rem">
            Phone no: 123456789
          </Text>
        </Box>

        <Box width={{ base: '90%', md: '30%' }}>
          <Text color="white" fontWeight="bold" fontSize="1.2rem" textAlign="center">
            Follow us
          </Text>
          <Flex h="2rem" justify="space-around" mt="1.5rem">
            <Image src={facebook} />
            <Image src={linkedln} />
            <Image src={instagram} />
            <Image src={twitter} />
            <Image src={youtube} />
            <Image src={quora} />
          </Flex>
        </Box>

        <Box width={{ base: '90%', md: '30%' }}>
          <Text color="white" fontWeight="bold" fontSize="1.2rem" >
            Head office
          </Text>
          <Flex mt="1rem">
            <Image mt="0.3rem" height="0.800rem" src={location} />
            <Text color="white" fontSize="0.800rem" ml="0.5rem">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </Text>
          </Flex>
          <Flex>
            <Image mt="0.3rem" height="0.800rem" src={timer} />
            <Text color="white" width="30rem" fontSize="0.800rem" ml="0.5rem" mt="0.5rem">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </Text>
          </Flex>
          <Flex>
            <Image mt="0.3rem" height="0.800rem" src={timer} />
            <Text color="white" width="30rem" fontSize="0.800rem" ml="0.5rem" mt="0.5rem">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </Text>
          </Flex>
          <Flex>
            <Image mt="0.3rem" height="0.800rem" src={trolley} />
            <Text color="white" width="30rem" fontSize="0.800rem" ml="0.5rem" mt="0.5rem">
              Lorem ipsum asd asdaweeq Lorem Ipsum
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Box bg="#1A365D" border="2px" color="#2A4365" height="3rem">
        <Image margin="auto" mt="0.600rem" src={footerline} />
      </Box>
    </Box>
  );
}
