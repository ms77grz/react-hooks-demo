import './App.css';
import IntervalClassCounter from './components/counter/IntervalClassCounter';
import IntervalHookCounter from './components/counter/IntervalHookCounter';

function App() {
  return (
    <div className='App'>
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
