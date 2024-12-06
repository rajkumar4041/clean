import { Dispatch, SetStateAction, useState } from 'react';
import {
  IconAddressBook,
  IconDatabaseImport,
  IconHome,
  IconReceipt2,
  IconSettings,
} from '@tabler/icons-react';
import { Avatar, Badge, Group } from '@mantine/core';
import profileImg from '../assets/profile.jpg';
import classes from '../style/navbar/NavbarSimpleColored.module.css';

interface NavbarSimpleColoredProps {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export function NavbarSimpleColored({ active, setActive }: NavbarSimpleColoredProps) {
  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
          <Avatar src={profileImg} alt="it's me" />
          <Badge size="xl" variant="gradient" gradient={{ from: 'blue', to: 'indigo', deg: 33 }}>
            Cleaning Service
          </Badge>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        {/* <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a> */}
        <a href="#" className={classes.link}>
          All Rights Reserved &copy;
        </a>
      </div>
    </nav>
  );
}

const data = [
  { link: '', label: 'Home', icon: IconHome },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Services', icon: IconDatabaseImport },
  { link: '', label: 'Contact Us', icon: IconSettings },
  { link: '', label: 'About Us', icon: IconAddressBook },
  // { link: '', label: 'Authentication', icon: Icon2fa },
  // { link: '', label: 'Security', icon: IconFingerprint },
  // { link: '', label: 'SSH Keys', icon: IconKey },
];
