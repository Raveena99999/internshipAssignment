import React, { useRef } from "react";
import { ChevronDownIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import {
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
} from "@chakra-ui/react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  let isMobile = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    "2xl": true,
  });
  return (
    <>
      {isMobile ? (
        <div className="main">
          <div className="main1">
            <p>LOGO</p>
          </div>
          <div className="main2">
            <p>
              Qualifications <ChevronDownIcon />{" "}
            </p>
            <p>
              Organizations <ChevronDownIcon />
            </p>
            <p>
              Research & Analysis <ChevronDownIcon />
            </p>
            <p>
              Lorem ipsum <ChevronDownIcon />
            </p>
            <p>
              Lorem ipsum <ChevronDownIcon />
            </p>
            <SearchIcon />
            <Button className="searchbtn">Enrolment</Button>
          </div>
        </div>
      ) : (
        <>
          <div className="main">
            <div className="main1">
              <p>LOGO</p>
            </div>
            <Button ref={btnRef} border="2px" onClick={onOpen}>
              <HamburgerIcon />
            </Button>
          </div>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader
                textAlign="center"
                color="#1a365d"
                fontSize="1.5rem"
              >
                LOGO
              </DrawerHeader>

              <DrawerBody>
                <VStack spacing={14}>
                  <Button mt="10" w="80%" color="#1a365d" fontSize="1.25rem">
                    Qualification
                  </Button>
                  <Button w="80%" color="#1a365d" fontSize="1.25rem">
                    Organizations
                  </Button>
                  <Button w="80%" color="#1a365d" fontSize="1.25rem">
                    Research & Analysis
                  </Button>
                  <Button w="80%" color="#1a365d" fontSize="1.25rem">
                    Lorem ipsum
                  </Button>
                  <Button w="80%" color="#1a365d" fontSize="1.25rem">
                    Lorem ipsum
                  </Button>
                  <Button w="80%" color="#1a365d" fontSize="1.25rem">
                    Search
                  </Button>
                  <Button w="80%" color="#1a365d" fontSize="1.25rem">
                    Enrollment
                  </Button>
                </VStack>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
}
