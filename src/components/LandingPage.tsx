// import  { useState } from 'react';
import { Box, Button, Flex, ScrollArea, Title } from '@mantine/core';
import CustomCarousel from './carousel/CustomCarousel';

import '@mantine/carousel/styles.css';

import { HeaderMenu } from './HeaderMenu';
import { ArticlesCardsGrid } from './page/ArticlesCardsGrid';
import { HeroImageRight } from './page/demoScrollPages/HeroImageRight';

const LandingPage: React.FC = () => {
  // const [active, setActive] = useState('Billing');

  // { link: '', label: 'Home', icon: IconHome },
  // { link: '', label: 'Billing', icon: IconReceipt2 },
  // { link: '', label: 'Services', icon: IconDatabaseImport },
  // { link: '', label: 'Contact Us', icon: IconSettings },
  // { link: '', label: 'About Us', icon: IconAddressBook },
  return (
    <Flex
      h={'100vh'}
      direction={'column'}
      // bg={'yellow.4'}
    >
      <HeaderMenu />
      <ScrollArea.Autosize style={{ width: '100%' }}>
        <Box h={'100vh'} bg={'blue.2'} id="Services">
          <HeroImageRight />
        </Box>
        <Box h={'100vh'} bg={'black'} id={'Home'}>
          <CustomCarousel />
        </Box>
        <Box h={'100vh'} bg={'yellow.3'} id="Billing">
          <ArticlesCardsGrid />
        </Box>
        <Box h={'100vh'} bg={'green.2'} id="Contact Us"></Box>
      </ScrollArea.Autosize>
    </Flex>
  );
};

export default LandingPage;
