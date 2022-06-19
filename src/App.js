import { useEffect, useRef, useState } from 'react';
import './App.css';
import Configuration from './components/Configuration/Configuration';
import ConfigContext from './components/Context/ConfigContext';
import Timer from './components/Timer/Timer';


function App() {
  const [isStart, setIsStart] = useState(false);
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [mode, setMode] = useState('work');
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isStartRef = useRef(isStart);
  const modeRef = useRef(mode);

  function passingTime() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {

    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? workTime : breakTime) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = workTime * 60;
    setSecondsLeft(secondsLeftRef.current);
    console.log(isStartRef.current);

    const interval = setInterval(() => {
      if (isStartRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      passingTime();
    }, 100);

    return () => clearInterval(interval);
  }, [workTime, breakTime]);

  const totalSeconds = mode === 'work'
    ? workTime * 60
    : breakTime * 60;
  const progressTime = Math.round(100 - (secondsLeft / totalSeconds * 100));

  const time = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  const setChanges = () => {
    setIsStart(!isStart);
    isStartRef.current = isStart;
  }


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
          <Timer progressTime={progressTime} time={time} seconds={seconds} />
          <Configuration />
        </div>
        <div className='button-container' onClick={setChanges}>
          {
            isStart ? <button className='stop-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
              </svg>
              Pause</button> :
              <button className='start-btn'>
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
