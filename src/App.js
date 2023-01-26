import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TimerOne from "./TimerOne";
import TimerTwo from "./TimerTwo";
import TimerThree from "./TimerThree";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  console.log("app")
  useEffect(() => {
    
    const time = flag1
      ? setInterval(() => {
          setNum1((last) => last + 1);
        }, 1000)
      : flag2
      ?  setInterval(() => {
          setNum2((last) => last + 1);
        }, 1000)
      : flag3 &&
        setInterval(() => {
          setNum3((last) => last + 1);
        }, 1000);
    return () => clearInterval(time);
  }, [flag1, flag2, flag3]);

  // const chengTimer=(timer1,timer2,timer3)=>{
  //   setFlag1(timer1);
  //   setFlag2(timer2);
  //   setFlag3(timer3);
  // }
  const chengTimer= useCallback((timer1,timer2,timer3)=>{
    setFlag1(timer1);
    setFlag2(timer2);
    setFlag3(timer3);
 },[])
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <TimerOne
        flag1={flag1}
        chengTimer={chengTimer}
        num1={num1}
      />
      <TimerTwo
        flag2={flag2}
        chengTimer={chengTimer}
        num2={num2}
      />
      <TimerThree
        flag3={flag3}
        chengTimer={chengTimer}
        num3={num3}
      />
    </div>
  );
}

export default App;
