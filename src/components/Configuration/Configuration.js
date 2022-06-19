import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import ConfigContext from '../Context/ConfigContext';
import './Configuration.css';

const Configuration = () => {
    const configData = useContext(ConfigContext);
    return (
        <div className='config-container'>
            <h2>Configure Time</h2>
            <div>
                <h4>WORK - <span className='work-time'>{configData.workTime}:00 min</span></h4>
                <ReactSlider
                    className='slider'
                    thumbClassName='thumb'
                    trackClassName='track'
                    value={configData.workTime}
                    min={1}
                    max={120}
                    onChange={newValue => configData.setWorkTime(newValue)}
                />
                <h4>BREAK - <span className='break-time'>{configData.breakTime}:00 min</span></h4>
                <ReactSlider
                    className='slider green'
                    thumbClassName='thumb'
                    trackClassName='track'
                    value={configData.breakTime}
                    min={1}
                    max={120}
                    onChange={newValue => configData.setBreakTime(newValue)}
                />
            </div>
        </div>
    );
};

export default Configuration;