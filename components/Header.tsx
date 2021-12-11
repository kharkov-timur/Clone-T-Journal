import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import {
  Search as SearchIcon,
  Create as CreateIcon,
  SmsOutlined as MessageIcon,
  NotificationsOutlined as NotificationIcon,
  Menu as MenuIcon,
  ExpandMoreRounded as ArrowBottomIcon,
} from '@material-ui/icons';

import logo from '../public/logo.png';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <label className={styles.searchBlock}>
          <SearchIcon />
          <input className={styles.searchInput} placeholder="Поиск" />
        </label>
        <Button variant="contained" className={styles.btnCreate}>
          {windowSize < 960 ? <CreateIcon /> : 'Новая запись'}
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton className="mr-5">
          <MessageIcon className={styles.icon} />
        </IconButton>
        <IconButton className="mr-5">
          <NotificationIcon className={styles.icon} />
        </IconButton>
        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="https://leonardo.osnova.io/a6c895ee-9dee-5412-a145-77e5eb080741/-/scale_crop/108x108/-/format/webp/"
        />
        <ArrowBottomIcon />
      </div>
    </Paper>
  );
};
