import React from "react";
import {
  Card,
  CardBody,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import { FiBarChart2 } from "react-icons/fi";

const MiniStatistics = () => {
  return (
    <Card>
      <CardBody>
        <Flex>
          <Flex direction="column">
            <Flex
              w={"56px"}
              h={"56px"}
              bg={"gray.100"}
              mr={"18px"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"50"}
            />
            <FiBarChart2 />
            <Stat>
              <StatLabel>Collected Fees</StatLabel>
              <StatNumber>$0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniStatistics;
