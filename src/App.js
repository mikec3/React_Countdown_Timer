//https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks

import logo from './logo.svg';
import './App.css';
import CountdownTimer from './CountdownTimer.js'

function App() {

  const timeInSeconds = 117*1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfter117Seconds = NOW_IN_MS + timeInSeconds;

  return (
    <div className="App">
    <h1> Countdown Timer </h1>
      <CountdownTimer targetDate={dateTimeAfter117Seconds}/>

    </div>
  );
}

export default App;
