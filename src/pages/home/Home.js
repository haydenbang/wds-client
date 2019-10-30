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

  /***** 1. 컴포넌트 생성 ******/

  /**
   * Constructor
   * @param {} props 
   */
  constructor(props) {
    super(props);

    this.state = {
      test: 'life cycle test',
      render: false,
      users: []
    };

    console.log('load 1 - constructor');                          // 컴포넌트 생성시
  }

  //  componentWillMount() {
  //    console.log('load 2 - componentWillMount');                   // 컴포넌트 마운트 전 (Render 전 실행) - v.17 삭제
  //                                                                  // 여기에서 데이터를 가지고 오지 않는 이유 -> 적어도 빈값으로 렌더링이 한번 이루어짐
  //   axios.get() test
  //   axios.get('http://localhost:3000/api/v1/sample.json')
  //   .then(response => {
  //     console.log(response);

  //     setTimeout(function() { //Start the timer
  //       this.setState({
  //         users: response.data.rows
  //       });
  //   }.bind(this), 5000);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  //  }                                                               

  componentDidMount() {
     console.log('load 3 - componentDidMount');                    // 컴포넌트 마운트 후 (Render 후 실행) -> state값이 변경되면 re-render

    // axios.get() test
    axios.get('http://localhost:3000/api/v1/sample.json')
    .then(response => {
      console.log(response);

      this.setState({
        users: response.data.rows
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  /***** 2. 컴포넌트 변경(props, state) ******/

  // componentWillReceiveProps(nextProps) {
  //   console.log('click 1 - componentWillReceiveProps');           // 새로운 Props 받은 후 - v.17 삭제
  //   if (this.props.name !== nextProps.name) {
  //     this.setState({ value: nextProps.name });
  //   }
  // }

  // componentWillReceiveProps의 대체 메소드
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('click 2 - getDerivedStateFromProps');                // props와 state 값을 동기화할 때 사용하는 함수
    if(nextProps.value !== prevState.value){                          // 
      return { value: nextProps.value }
    }
    
    return null; // null인 경우, 컴포넌트를 render 하지 않음
  }

  shouldComponentUpdate(nextProps, nextState) {    
    console.log('click 2 - shouldComponentUpdate');                 // True : Render YES, False : Render NO (아래 실행 X)
    return true;
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('click 3 - componentWillUpdate');                // v.17 삭제
  // }

  // componentWillUpdate의 대체 메소드
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('click 3 - getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('click 4 - componentDidUpdate');
    console.log(this.state);
  }

  componentDidCatch(error, info) {
    this.setState({ isError: true });
    console.log('catch - componentDidCatch');                       // 자신의 에러 Catch X, 자식의 Component 에러 Catch O
    console.log('error : ' + error);
    console.log('info : ' + info);
  }

  onClickButton() {
    console.log('click event');
  }

  /***** 3. 컴포넌트 제거 ******/

  componentWillUnmount() {
    console.log('leave component - componentWillUnmount');          // event, function, 외부 라이브러리 인스턴스 제거 등 할때 사용
  }

  /**
   * Render
   */
  render() {
    console.log('render');

    const { classes } = this.props;
    // const users = [
    //   {
    //     title: '정곤',
    //     date: '1',
    //     description:
    //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //   },
    //   {
    //     title: '민지',
    //     date: '2',
    //     description:
    //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //   },
    //   {
    //     title: '기웅',
    //     date: '3',
    //     description:
    //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //   },
    //   {
    //     title: '영은',
    //     date: '4',
    //     description:
    //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //   },
    //   {
    //     title: '재두',
    //     date: '5',
    //     description:
    //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //   },
    //   {
    //     title: '서해',
    //     date: '6',
    //     description:
    //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //   },
    // ];        

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
            {this.state.users.map(row => (
              <Grid item key={row.title} xs={12} md={4}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card} onClick={this.onClickButton.bind(this)}>
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
