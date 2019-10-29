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

/**
 * Style
 * @param {*} theme 
 */
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

/**
 * Class
 */
class Home extends Component {
  /**
   * Constructor
   * @param {} props 
   */
  constructor(props) {
    super(props);

    this.state = {};

    //console.log('constructor');
  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  /**
   * Render
   */
  render() {
    const { classes } = this.props;
    const user = [
      {
        title: '정곤',
        date: '1',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
      {
        title: '민지',
        date: '2',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
      {
        title: '기웅',
        date: '3',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
      {
        title: '정아',
        date: '4',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
      {
        title: '재두',
        date: '5',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
      {
        title: '서해',
        date: '6',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
    ];

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
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Hello.
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    이미지 기반 관리 / 검색 서비스 <br></br><br></br>
                    - Client : 특정 이미지를 사용자 별로 입력/관리<br></br>
                    - Server : 이미지/사용자 정보 DB로 관리<br></br>
                    - API : Google Image 딥러닝 API 활용 및 분석
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={4}>
            {user.map(post => (
              <Grid item key={post.title} xs={12} md={4}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
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

// import React, { Component } from 'react';
// import './Home.css';

// export default class Home extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: 'Web Development Signature Home Page',
//     };
//   }

//   render() {
//     const { title } = this.state;

//     return (
//       <div className="wds-home-wrapper">
//         <div className="wds-home__title">{title}</div>
//         <div className="wds-home__header">This is head area.</div>
//         <div className="wds-home__body">This is body area.</div>
//       </div>
//     );
//   }
// }
