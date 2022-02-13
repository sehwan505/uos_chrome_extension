import React from 'react';
import uos from './img/uos.png';
import dormitory from './img/dormitory.png';
import homepage from './img/homepage.png';
import everytime from './img/everytime.jpg';
import schedule from './img/schedule.png';
import notice from './img/noticeboard.png';
import homework from './img/homework.png';
import idea from './img/idea.png';
import './Popup.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Popup = () => {
    return (
        <div className="App">
            <div className='item'>
                <a
                    className="App-link"
                    href="https://www.uos.ac.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={homepage} width="50px" height="50px" /><br />
                </a>
                홈페이지
            </div>
            <div className='item'>
                <a
                    className="App-link"
                    href="https://portal.uos.ac.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={uos} width="50px" height="50px" /><br />
                </a>
                포털
            </div>
            <div className='item'>
                <a
                    className="App-link"
                    href="https://dormitory.uos.ac.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={dormitory} width="50px" height="50px" /><br />
                </a>
                기숙사
            </div>
            <div className='item'>
                <a
                    className="App-link"
                    href="https://everytime.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={everytime} width="50px" height="50px" /><br />
                </a>
                에브리타임
            </div>
            <div className='item'>
                <a
                    className="App-link"
                    href="https://wise.uos.ac.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={idea} width="50px" height="50px" /><br />
                </a>
                WISE
            </div>
            <div className='item'>
                <a
                    className="App-link"
                    href="https://www.uos.ac.kr/korCalendarYear/list.do?list_id=CA1&epTicket=LOG"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={schedule} width="50px" height="50px" /><br />
                </a>
                학사일정
            </div>
            <div className='item'>
                <a
                    className="App-link"
                    href="https://www.uos.ac.kr/korNotice/list.do?list_id=FA1&epTicket=LOG"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={notice} width="50px" height="50px" /><br />
                </a>
                일반 공지
            </div>
            <div className='item'>
                <a
                    className="App-link"
                    href="https://www.uos.ac.kr/korNotice/list.do?list_id=FA2&epTicket=LOG"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={homework} width="50px" height="50px" /><br />
                </a>
                학사 공지
            </div>
        </div>
    );
};

export default Popup;


{/*<div className={classes.root}>
<Grid container spacing={3}>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
            <a
                className="App-link"
                href="https://www.uos.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={uos} width="50px" height="50px" /><br />
                홈페이지
            </a>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
            <a
                className="App-link"
                href="https://portal.uos.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={uos} width="50px" height="50px" /><br />
                포털
            </a>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
            <a
                className="App-link"
                href="https://dormitory.uos.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={uos} width="50px" height="50px" /><br />
                기숙사
            </a>
            </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
            <a
                className="App-link"
                href="https://everytime.kr/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={uos} width="50px" height="50px" /><br />
                에브리타임
            </a>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
        <a
            className="App-link"
            href="https://uostime.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={uos} width="50px" height="50px" /><br />
            UOS Time
        </a>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
            <a
                className="App-link"
                href="https://www.uos.ac.kr/korCalendarYear/list.do?list_id=CA1&epTicket=LOG"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={uos} width="50px" height="50px" /><br />
                학사일정
            </a>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
            <a
                className="App-link"
                href="https://www.uos.ac.kr/korNotice/list.do?list_id=FA1&epTicket=LOG"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={uos} width="50px" height="50px" /><br />
                일반 공지
            </a>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
    <a
            className="App-link"
            href="https://www.uos.ac.kr/korNotice/list.do?list_id=FA2&epTicket=LOG"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={uos} width="50px" height="50px" /><br />
            학사 공지
        </a>
    </Paper>
  </Grid>
</Grid>
</div>*/}
