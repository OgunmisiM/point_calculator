import Display from "./Display";
import Button from "./Button";
import Redbutton from "./Redbutton";
import GreenButton from "./GreenButton";
import { useState } from "react";

function ConstOne() {
  const [count, setCount] = useState(0);
  const increment = (incrementValue) => {
    setCount(count + incrementValue);
  };
  const green = { backgroundColor: "green" };
  const red = { backgroundColor: "red" };
  const orange = { backgroundColor: "orange" };
  return (
    <>
      <div className="borderButton">
        <h3>Contestant One</h3>
        <div className="button">
          <GreenButton
            increment={increment}
            answer="correct"
            initialValue={5}
            green={green}
          />
          <Button
            increment={increment}
            answer="bonus"
            initialValue={1}
            orange={orange}
          />
          <Redbutton
            increment={increment}
            answer="wrong"
            initialValue={0}
            red={red}
          />
        </div>
        <Display count={count} />
      </div>
    </>
  );
}
export default ConstOne;
