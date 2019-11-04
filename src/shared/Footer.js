import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';

/**
 * Internal Component
 */
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
            Copyright ©
      <Link color="inherit" href="/home">
                Web Development Sigature
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/**
 * Style
 * @param {*} theme
 */
const styles = (theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
});

/**
 * Class
 */
class Footer extends Component {
  /**
     * Constructor
     * @param {} props
     */
  constructor(props) {
    super(props);

    this.state = {};
  }

  /**
     * Render
     */
  render() {
    const { classes } = this.props;

    return (
      <>
        <CssBaseline />
        <footer className={classes.footer}>
          <Container maxWidth="lg">
            <Copyright />
          </Container>
        </footer>
      </>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default withStyles(styles)(Footer);
