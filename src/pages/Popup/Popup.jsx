import React, { useEffect, useState } from 'react';
import uos from './img/uos.png';
import dormitory from './img/dormitory.png';
import homepage from './img/homepage.png';
import everytime from './img/everytime.jpg';
import schedule from './img/schedule.png';
import notice from './img/noticeboard.png';
import homework from './img/homework.png';
import idea from './img/idea.png';
import classroom from './img/classroom.png';
import './Popup.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
const Popup = () => {
    const [dropDown, setDropDown] = useState(false);
    const [time, setTime] = useState(new Date());

    const getServerTime = () => {
        let xmlHttpRequest;
        if (window.XMLHttpRequest) {// code for Firefox, Mozilla, IE7, etc.
            xmlHttpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) {// code for IE5, IE6
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            return;
        }

        xmlHttpRequest.open('HEAD', "https://wise.uos.ac.kr/", false);
        xmlHttpRequest.setRequestHeader("ContentType", "text/html");
        xmlHttpRequest.send('');

        let serverDate = xmlHttpRequest.getResponseHeader("Date");
        let date = new Date(serverDate);
        setTime(date);
    }

    React.useEffect(() => {
        let interval;
        if (dropDown) {
            interval = setInterval(() => {
                getServerTime();
            }, 20);
        }
        else {
            clearInterval(interval);
        }
    }, [dropDown]);

    return (
        <>
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
                        href="https://uclass.uos.ac.kr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={classroom} width="50px" height="50px" /><br />
                    </a>
                    강의실
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
                {dropDown ?
                    <div className='item' style={{ "cursor": "pointer" }} onClick={() => { setDropDown(false); }}>
                        <KeyboardArrowUpIcon />
                        <div className="item">
                            <h1>WISE 서버시간</h1>
                            <h1>
                                {time.toLocaleString()}
                            </h1>
                        </div>
                    </div>
                    :
                    <div className='item' style={{ "cursor": "pointer" }} onClick={() => { setDropDown(true); }}>
                        <KeyboardArrowDownIcon />
                    </div>
                }
            </div>
        </>
    );
};

export default Popup;