import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import styles from './Header.css';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link className={styles.navigation} to="/">
          HOME
        </Link>
        <Link className={styles.navigation} to="/flight">
          FLIGHT
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
