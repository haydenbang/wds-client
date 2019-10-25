import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      //justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
      color: 'inherit',
      textDecoration : 'none'
    },
  }));

const sections = ['Home', 'Image', 'About'];

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button size="small" style={{textTransform: 'none'}}>Web Development Signature</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Welcome
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small" style={{textTransform: 'none'}}>
            Sign up
          </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              //color="inherit"
              //noWrap
              //variant="body2"
              //href="#"
              key={section}
              className={classes.toolbarLink}
              to={'/' + section}
            >
              {section}
            </Link>
          ))}
        </Toolbar>
        <main>
          
        </main>
      </Container>
    </React.Fragment>
  );
}

/*
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="wds-header">
        <div className="wds-header-container">
          <Link className="wds-header-link-btn" to="/">
            Home
          </Link>
          <Link className="wds-header-link-btn" to="/image">
            Image
          </Link>
          <Link className="wds-header-link-btn" to="/about">
            About
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
*/