import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css';

const Timer = ({ progressTime, time, seconds, mode }) => {
    console.log(mode)

    return (
        <div className='timer-container'>
            <div className='progress-bar'>
                <CircularProgressbar
                    className=''
                    value={progressTime}
                    text={time + " : " + seconds + " min"}
                    styles={buildStyles({
                        textSize: '16px',
                        textColor: '#fff',
                        pathColor: mode === 'work' ? '#f54e4e' : '#4aec8c',
                        // tailColor: "green",
                    })} />
            </div>
        </div>
    );
};

export default Timer;