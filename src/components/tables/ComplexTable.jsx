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

const ComplexTable = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Complex Table</Heading>
      </CardHeader>
      <CardBody py={2} px={5}>
        <TableContainer>
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
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Marketplace</Checkbox>
                </Td>
                <Td>Approved</Td>
                <Td>24.Jan.2021</Td>
                <Td isNumeric>24.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox>Marketplace</Checkbox>
                </Td>
                <Td>17.5%</Td>
                <Td>2.458</Td>
                <Td isNumeric>24.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Marketplace</Checkbox>
                </Td>
                <Td>17.5%</Td>
                <Td>2.458</Td>
                <Td isNumeric>24.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox>Marketplace</Checkbox>
                </Td>
                <Td>17.5%</Td>
                <Td>2.458</Td>
                <Td isNumeric>24.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox>Marketplace</Checkbox>
                </Td>
                <Td>17.5%</Td>
                <Td>2.458</Td>
                <Td isNumeric>24.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Marketplace</Checkbox>
                </Td>
                <Td>17.5%</Td>
                <Td>2.458</Td>
                <Td isNumeric>24.Jan.2021</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default ComplexTable;
