import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, InfoIcon } from "@chakra-ui/icons";

const tableData = [
  {
    checked: true,
    label: "millimetres (mm)",
    multiplier: 25.4,
    icon: <CloseIcon />,
  },
  {
    checked: false,
    label: "centimetres (cm)",
    multiplier: 30.48,
    icon: <InfoIcon />,
  },
  {
    checked: false,
    label: "metres (m)",
    multiplier: 0.91444,
    icon: <CheckIcon />,
  },
  {
    checked: true,
    label: "millimetres (mm)",
    multiplier: 25.4,
    icon: <CloseIcon />,
  },
  {
    checked: false,
    label: "centimetres (cm)",
    multiplier: 30.48,
    icon: <InfoIcon />,
  },
  {
    checked: false,
    label: "metres (m)",
    multiplier: 0.91444,
    icon: <CheckIcon />,
  },
  {
    checked: true,
    label: "millimetres (mm)",
    multiplier: 25.4,
    icon: <CloseIcon />,
  },
  {
    checked: false,
    label: "centimetres (cm)",
    multiplier: 30.48,
    icon: <InfoIcon />,
  },
  {
    checked: false,
    label: "metres (m)",
    multiplier: 0.91444,
    icon: <CheckIcon />,
  },
];

const CheckTable = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Check Table</Heading>
      </CardHeader>
      <CardBody py={2} px={5}>
        <TableContainer>
          {/* <TableContainer overflowX={"hidden"} overflowY={"auto"} maxH="296px"> */}
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th isNumeric>Title</Th>
                <Th>Title</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((row, index) => (
                <Tr key={index}>
                  <Td>
                    <Checkbox defaultChecked={row.checked}>Checkbox</Checkbox>
                  </Td>
                  <Td>
                    {row.icon} {row.label}
                  </Td>
                  <Td isNumeric>{row.multiplier}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default CheckTable;
