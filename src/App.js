import { useEffect, useState } from "react";
import { BiPlus, BiRefresh } from "react-icons/bi";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState("0:00");
  const [running, setRunning] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.length === 4) {
      let arr = e.target.value.split(":");
      setMinutes(arr[0]);
      setSeconds(arr[1]);
      setTimer(e.target.value);
    } else {
      let arr = e.target.value.split(":");
      console.log(arr);
      setSeconds(arr[1]);
      setMinutes(0);
      setTimer(arr[1]);
    }
  };

  const changeTime = () => {
    // console.log('hit')
    console.log(minutes)
    console.log(seconds)
    if(minutes === 0 && seconds === 0) {
      console.log('end')
      if(navigator.vibrate) {
        navigator.vibrate(3)
      } else {
        alert('Timer up!')
      }
    } else if (seconds === 0 || seconds === "00") {
      // console.log("if")
      setSeconds(59);
      setMinutes(minutes - 1);
    } else {
      // console.log('else')
      setSeconds(seconds - 1);
    }
  };

  useEffect(() => {
    if (!running) return;
    setTimeout(changeTime, 1000);
    // const interval = setInterval(changeTime, 1000);
    
    // return () => clearInterval(interval)
  }, [running, seconds, minutes]);

  return (
    <div className="App">
      <header>
        <h2>Set Tracker</h2>
      </header>
      <section className="stack">
        {/* <h1>{timer}</h1> */}
        <div className="countdown-box">
          <div className="left"><h3>{minutes}</h3></div>
          <div className="right"><h3>{seconds.toString().length === 2 ? seconds : "0"+seconds}</h3></div>
        </div>
        <select name="" id="" onChange={handleChange}>
          <option value="">Select a rest time</option>
          <option value=":02">:30</option>
          <option value=":45">:45</option>
          <option value="1:00">1:00</option>
          <option value="1:15">1:15</option>
          <option value="1:30">1:30</option>
          <option value="1:45">1:45</option>
          <option value="2:00">2:00</option>
          <option value="2:15">2:15</option>
          <option value="2:30">2:30</option>
          <option value="2:45">2:45</option>
          <option value="3:00">3:00</option>
          <option value="3:15">3:15</option>
          <option value="3:30">3:30</option>
          <option value="3:45">3:45</option>
          <option value="4:00">4:00</option>
          <option value="4:15">4:15</option>
          <option value="4:30">4:30</option>
          <option value="4:45">4:45</option>
          <option value="5:00">5:00</option>
        </select>
        <button onClick={() => setRunning(!running)}>
          {running ? "Stop" : "Start"}
        </button>
      </section>
      <section>
        <h2>Sets Complete: {num}</h2>
        <div className="button-container">
          <BiRefresh
            className="icon-button circle-outline"
            onClick={() => setNum(0)}
          />
          <BiPlus
            className="icon-button circle-outline"
            onClick={() => setNum(num + 1)}
          />
        </div>
        {/* <button onClick={() => setNum(num + 1)}>Up</button> */}
        {/* <button onClick={() => setNum(num - 1)}>Down</button> */}
      </section>
    </div>
  );
}

export default App;
