import { unstable_renderSubtreeIntoContainer } from "react-dom";
import s from "./Counter.module.css";
import { useCallback, useState } from "react";

export const Counter = () => {
  //   const handleClick = (e) => {
  //     // alert('Hello')
  //     console.log(e);
  //     e.target.innerHTML = "minus";
  //   };

  //   const handleGreet = (name) => {
  //     console.log("Hello ", name);
  //   };

  // return (
  //   <div className={s.flexContainer}>
  // 	<div className={s.wrapper}>
  // 	  <h1>{0}</h1>
  // 	  <div className={s.flex}>
  // 		<button className="btn" onClick={handleClick}>
  // 		  minus
  // 		</button>
  // 		<button className="btn" onClick={() => handleGreet("Petya")}>
  // 		  reset
  // 		</button>
  // 		<button className="btn" onClick={() => console.log("Hello")}>
  // 		  cool
  // 		</button>

  // 		<button className="btn" onClick={() => console.log("Plus clicked!")}>
  // 		  plus
  // 		</button>
  // 	  </div>
  // 	</div>
  //   </div>
  // );
  // хук
  const [counter, setcounter] = useState(0);

  // крок
  const [step, setStep] = useState(1);
  // console.log('Render');

  let count = 0;
  const handleIncrement = () => {
    // count++;
    console.log(`conter is ${count}`);
    console.log(counter);
    // setcounter(counter + 1);
    // setcounter(counter + 1);
    // setcounter(counter + 1);

    setcounter((prev) => prev + step);
    // setcounter((prev) => prev + 3);
    // setcounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    //   setcounter(counter - 1);
    setcounter((prev) => prev - step);
  };

  const handleReset = () => {
    setcounter(0);
    setStep(1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={(e) => setStep(+e.target.value)} />
        <div className={s.flex}>
          <button className="btn" onClick={handleDecrement}>
            minus
          </button>
          <button className="btn" onClick={handleReset}>
            reset
          </button>
          {/* <button className="btn" onClick={() => console.log("Hello")}>
				cool
			</button> */}

          <button className="btn" onClick={handleIncrement}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
