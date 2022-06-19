import React from 'react';
import ReactSlider from 'react-slider';
import './Configuration.css';

const Configuration = () => {
    return (
        <div className='config-container'>
            <h2>Configure Time</h2>
            <div>
                <h4>WORK - <span className='work-time'>{25}:00 min</span></h4>
                <ReactSlider
                    className='slider'
                    thumbClassName='thumb'
                    trackClassName='track'
                    value={25}
                    min={1}
                    max={120}
                />
                <h4>BREAK - <span className='break-time'>{5}:00 min</span></h4>
                <ReactSlider
                    className='slider green'
                    thumbClassName='thumb'
                    trackClassName='track'
                    value={5}
                    min={1}
                    max={120}
                />
            </div>
        </div>
    );
};

export default Configuration;