import './App.css';
import Configuration from './components/Configuration/Configuration';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className='container'>
      <div className='main-container'>
        <Timer />
        <Configuration />
      </div>
      <div>
        <button>Start</button>
        <button>Puse</button>
      </div>
    </div>
  );
}

export default App;
