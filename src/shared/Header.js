import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

/**
 * Style
 * @param {*} theme
 */
const styles = (theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    // justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: 'inherit',
    textDecoration: 'none',
  },
});

class Header extends Component {
  /**
     * Constructor
     * @param {} props
     */
  constructor(props) {
    super(props);

    this.state = {
      title: 'Web Development Signature',
    };
  }

  /**
     * Render
     */
  render() {
    const { classes } = this.props;
    const { title } = this.state;
    const sections = ['Main', 'Home', 'Image', 'About', 'User'];

    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Link className={classes.toolbarLink} to="/Home">
              <Button size="small" style={{ textTransform: 'none' }}>
                {title}
              </Button>
            </Link>
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
            <Link className={classes.toolbarLink} to="/Search">
              <IconButton to="/search">
                <SearchIcon />
              </IconButton>
            </Link>
            <Button variant="outlined" size="small" style={{ textTransform: 'none' }}>
                            Sign up
            </Button>
          </Toolbar>
          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {sections.map((section) => (
              <Link key={section} className={classes.toolbarLink} to={`/${section}`}>
                {section}
              </Link>
            ))}
          </Toolbar>
        </Container>
      </>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withStyles(styles)(Header);
