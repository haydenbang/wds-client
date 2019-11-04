import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

/**
 * Style
 * @param {*} theme
 */
const styles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
    paddingTop: '75%', // 16:9
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
});

class Search extends Component {
  /**
   * Constructor
   * @param {} props
   */
  constructor(props) {
    super(props);

    this.state = {};
  }

  /**
   * render
   */
  render() {
    const { classes } = this.props;
    const cards = [1, 2, 3, 4, 5, 6];

    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <div style={{ textAlign: 'center' }}>
                  <TextField
                    id="search"
                    className={classes.textField}
                    label="Please enter search word."
                    margin="normal"
                  />
                  <IconButton to="/search" style={{ marginTop: '25px' }}>
                    <SearchIcon />
                  </IconButton>
                </div>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(Search);
