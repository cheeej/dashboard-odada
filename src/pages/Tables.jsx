import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import Development from "../components/tables/Development";
import CheckTable from "../components/tables/CheckTable";
import ColumnTable from "../components/tables/ColumnTable";
import ComplexTable from "../components/tables/ComplexTable";

const Tables = () => {
  return (
    <Layout title="Tables" pagename={"Tables"}>
      <Grid
        h={"calc(100vh - 50px * 2 - 97px)"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1}>
          <Development />
        </GridItem>
        <GridItem>
          <CheckTable />
        </GridItem>
        <GridItem>
          <ColumnTable />
        </GridItem>
        <GridItem>
          <ComplexTable />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Tables;
