<<<<<<< HEAD
import React from "react";
import Header from "./header/Header";
import styled from "styled-components";
import Title from "../common/Tilte";
import History from "../common/History";
import { Box } from "@chakra-ui/react";
import Util from "../common/Util";

const Layout = ({ title, pagename, children }) => {
  // const { pagename, children } = props;
  return (
    <Wrap>
      <Header />
      <main id="main">
        <Box p="0 0 35px 10px" display="flex" justifyContent="space-between">
          <div>
            <History pagename={pagename} />
            <Title title={title} />
          </div>
          <Util />
        </Box>
        {children}
      </main>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 290px;
  background: var(--secondary-grey-300, #f4f7fe);
  #main {
    min-height: 100vh;
    padding: 50px 20px;
  }
`;

=======
import React from 'react';
import Header from './header/Header';
import styled from 'styled-components';
import Title from '../common/Tilte';
import History from '../common/History';
import { Box, Flex, Text } from '@chakra-ui/react';

const Layout = (props) => {
    const { pagename, children, title } = props;
    return (
        <Box display="flex" flexDirection="column" pl={'290px'} background="globalBg">
            <Header />
            <Box as="main" id="main" minH={'100vh'} p={'140px 30px 20px'}>
                <Flex
                    pos={'fixed'}
                    top={'20px'}
                    left={'310px'}
                    right={'20px'}
                    zIndex={1}
                    h={'90px'}
                    px={'30px'}
                    alignItems={'center'}
                    bg={'rgba(255, 255, 255, 0.8)'}
                    borderRadius={'90px'}
                    backdropFilter={'saturate(180%) blur(8px)'}
                >
                    <Box>
                        <History pagename={pagename} />
                        <Title title={title} />
                    </Box>
                    <Box ml={'auto'}>
                        <Text variant={'txt145'}></Text>
                    </Box>
                </Flex>
                {children}
            </Box>
        </Box>
    );
};

>>>>>>> 0036c0c078ba2445154adfb1bed43731653ebee5
export default Layout;
