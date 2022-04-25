import { useState } from "react";
import "./index.css";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [diceNumber2, setDiceNumber2] = useState(1);

  const refreshDice = () => {
    const rannum = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(rannum);
    const rannum1 = Math.floor(Math.random() * 6) + 1;
    setDiceNumber2(rannum1);
  };
  return (
    <div>
      <center>
        <img
          height={300}
          width={300}
          src={require(`./assets/${diceNumber}.png`)}
        ></img>
        <img
          height={300}
          width={300}
          src={require(`./assets/${diceNumber2}.png`)}
        ></img>
        <br />
        <button onClick={() => refreshDice()} className="button">
          roll here
        </button>
        <button onClick={() => setDiceNumber(1)} className="button1">
          reset
        </button>
        <button onClick={() => setDiceNumber2(1)} className="button1">
          reset
        </button>
      </center>
    </div>
  );
};

export default App;
