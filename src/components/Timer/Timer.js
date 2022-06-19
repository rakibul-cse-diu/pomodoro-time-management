import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css';

const Timer = ({ progressTime, time, seconds }) => {

    return (
        <div className='timer-container'>
            <div className='progress-bar'>
                <CircularProgressbar
                    className=''
                    value={progressTime}
                    text={time + " : " + seconds}
                    styles={buildStyles({
                        textSize: '16px',
                        textColor: '#fff',
                        pathColor: " #f54e4e",
                        // tailColor: "green",
                    })} />
            </div>
        </div>
    );
};

export default Timer;