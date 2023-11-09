import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { FaRegBell, FaMoon, FaCircleInfo } from "react-icons/fa6";
import { ButtonGroup } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Util = () => {
  return (
    <Box
      bg="white"
      w="422px"
      h="61px"
      borderRadius={50}
      color="white"
      display="flex"
      alignItems="center"
    >
      <InputGroup
        display="flex"
        alignItems="center"
        justifyContent="Center"
        gap="3"
      >
        <Box pos={"relative"}>
          <InputLeftElement
            pos={"absolute"}
            top={"50%"}
            left="10px"
            transform={"translateY(-50%)"}
            pointerEvents="none"
          >
            <Search2Icon left="35px" color="gray.700" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="text"
            w="214px"
            h="41px"
            pl={"50px"}
            bg="gray.300"
            borderRadius="40px"
          />
        </Box>
        <ButtonGroup gap="2" color="gray.400" colorScheme="none">
          <FaRegBell fontSize="19px" />
          <FaMoon fontSize="19px" />
          <FaCircleInfo fontSize="19px" />
        </ButtonGroup>
        <Image
          // margin="0, 1, 0, 1"
          w="41px"
          h="41px"
          borderRadius="50px"
          objectFit="cover"
          boxSize="40px"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dan Abramov"
        />
      </InputGroup>
    </Box>
  );
};

export default Util;
