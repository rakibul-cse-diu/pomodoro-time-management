import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css';

const Timer = () => {
    return (
        <div className='timer-container'>
            <div className='progress-bar'>
                <CircularProgressbar
                    className=''
                    value={40}
                    text={"60:00"}
                    styles={buildStyles({
                        textSize: '16px',
                        textColor: '#fff',
                        pathColor: "red",
                        // tailColor: "green",
                    })} />
            </div>
        </div>
    );
};

export default Timer;