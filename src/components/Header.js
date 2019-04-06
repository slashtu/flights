import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <Link className={classes.navigation} to="/">
            HOME
          </Link>
          <Link className={classes.navigation} to="/flight">
            FLIGHT
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
