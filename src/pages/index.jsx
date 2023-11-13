import React from "react";
import Layout from "../components/layout/Layout";
import { SimpleGrid, Box } from "@chakra-ui/react";
import MiniStatistics from "../theme/components/home/MiniStatistics";

const Home = () => {
  return (
    <Layout title="DashBoard" pagename="DashBoard">
      <SimpleGrid columns={[1, 2, 3, null, 6]} spacing={10}>
        <MiniStatistics />
        <MiniStatistics />
        <MiniStatistics />
        <MiniStatistics />
        <MiniStatistics />
        <MiniStatistics />
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
