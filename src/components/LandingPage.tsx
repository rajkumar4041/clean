import React, { useState } from 'react';
import { Box, Flex, ScrollArea } from '@mantine/core';
import CustomCarousel from './carousel/CustomCarousel';
import { NavbarSimpleColored } from './NavbarSimpleColored';

import '@mantine/carousel/styles.css';

const LandingPage: React.FC = () => {
  const [active, setActive] = useState('Billing');

  // { link: '', label: 'Home', icon: IconHome },
  // { link: '', label: 'Billing', icon: IconReceipt2 },
  // { link: '', label: 'Services', icon: IconDatabaseImport },
  // { link: '', label: 'Contact Us', icon: IconSettings },
  // { link: '', label: 'About Us', icon: IconAddressBook },
  return (
    <Flex
      h={'100vh'}
      // bg={'yellow.4'}
    >
      <Box>
        <NavbarSimpleColored active={active} setActive={setActive} />
      </Box>
      <ScrollArea.Autosize style={{ width: '100%' }}>
        <Box h={'100vh'} bg={'black'} id={'Home'}>
          <CustomCarousel />
        </Box>
        <Box h={'100vh'} bg={'yellow.3'} id="Billing"></Box>
        <Box h={'100vh'} bg={'blue.2'} id="Services"></Box>
        <Box h={'100vh'} bg={'green.2'} id="Contact Us"></Box>
      </ScrollArea.Autosize>
    </Flex>
  );
};

export default LandingPage;
