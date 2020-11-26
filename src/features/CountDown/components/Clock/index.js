import React, { useEffect, useState } from 'react';
import './Clock.css';

Clock.propTypes = {

};


function formatDateTime() {
    const date = new Date();

    let countDownDate = new Date(date.getUTCFullYear() + 1 + "").getTime();

    // Time zone
    let offset = date.getTimezoneOffset() * 60 * 1000;
    let now = date.getTime();

    var distance = countDownDate + offset - now;

    // Time calculations for days, hours, minutes and seconds
    var days = `0${Math.floor(distance / (1000 * 60 * 60 * 24))}`.slice(-2);
    var hours = `0${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);
    var minutes = `0${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
    var seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`.slice(-2);
    return {
        days,
        hours,
        minutes,
        seconds
    }

}

function Clock() {

    const [time, setTime] = useState({});

    useEffect(() => {
        const timeInterval = setInterval(() => {
            const distance = formatDateTime();
            setTime(distance);
        }, 1000);
        return () => {
            clearInterval(timeInterval);
        }
    }, []);

    return (
        <div className="container">
            <div className="clock-wrapper">
                <div className="clock-title">New Year Countdown</div>
                <div className="clock">
                    <div className="days block-time">
                        <p className="time">{time.days}</p>
                        <span className="text">DAYS</span>
                    </div>
                    <div className="hours block-time">
                        <p className="time">{time.hours}</p>
                        <span className="text">HOURS</span>
                    </div>
                    <div className="minutes block-time">
                        <p className="time">{time.minutes}</p>
                        <span className="text">MINUTES</span>
                    </div>
                    <div className="seconds block-time">
                        <p className="time mark">{time.seconds}</p>
                        <span className="text">SECONDS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clock;