import { useState } from 'react';
import './App.css';
import Configuration from './components/Configuration/Configuration';
import ConfigContext from './components/Context/ConfigContext';
import Timer from './components/Timer/Timer';


function App() {
  const [isStart, setIsStart] = useState(false);
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  return (
    <ConfigContext.Provider value={
      {
        isStart,
        setIsStart,
        workTime,
        setWorkTime,
        breakTime,
        setBreakTime,
      }
    }>
      <div className='container'>
        <div className='main-container'>
          <Timer />
          <Configuration />
        </div>
        <div className='button-container'>
          {
            isStart ? <button className='stop-btn' onClick={() => setIsStart(!isStart)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
              </svg>
              Stop</button> :
              <button className='start-btn' onClick={() => setIsStart(!isStart)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Start
              </button>
          }
        </div>

      </div>
    </ConfigContext.Provider>
  );
}

export default App;
