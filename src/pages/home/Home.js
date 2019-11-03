import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const styles = theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  }
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
                                                           
  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/sample.json')
    .then(response => {
      this.setState({
        users: response.data.rows
      });
    })
    .catch(error => {
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <main>
        <Paper className={classes.mainFeaturedPost}>
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container className="main_area">
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Hello.
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    <span className="main_title">이미지 기반 관리 / 검색 서비스</span>
                    <ul>
                      <li>Client : 특정 이미지를 사용자 별로 입력/관리</li>
                      <li>Server : 이미지/사용자 정보 DB로 관리</li>
                      <li>API : Google Image 딥러닝 API 활용 및 분석</li>
                    </ul>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={4} className="user_area">
            {this.state.users.map(row => (
              <Grid item key={row.title} xs={12} md={4}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {row.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {row.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {row.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
      </main>
      </Container>
    </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
