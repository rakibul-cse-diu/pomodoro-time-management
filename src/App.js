import './App.css';
import Configuration from './components/Configuration/Configuration';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className='main-container'>
      <Timer />
      <Configuration />
    </div>
  );
}

export default App;
