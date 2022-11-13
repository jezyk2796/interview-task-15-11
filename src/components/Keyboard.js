import { useState } from "react";
import KeyboardButton from "./KeyboardButton";

const Keyboard = ({moneyAmount, setMoneyAmount, currentView, setView}) => {
  const [inputValue, setInputValue] = useState('');


  const onNumberClick = keyValue => setInputValue(prevValue => prevValue += keyValue);

  const onBackspaceClick = () => {
    const newValue = inputValue.slice(0, inputValue.length - 1);
    setInputValue(newValue);
  }

  const onClearClick = () => setInputValue('');

  const onAcceptDeposit = () => {
    if (inputValue === '') {
      // TODO alert
      return null;
    } else {
      setMoneyAmount(prevAmount => prevAmount + parseInt(inputValue));
      setInputValue('');
    }
  }

  const onAcceptWithdraw = () => {
    if (inputValue === '') {
      // TODO alert
      return null;
    } else {
      if (moneyAmount - inputValue < 0) {
        // TODO alert
      } else {
        setMoneyAmount(prevAmount => prevAmount - parseInt(inputValue));
      }
      setInputValue('');
    }
  }

  return (
    <div>
          <input
            type="text"
            readOnly
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <div>
            <KeyboardButton value="1" onClick={() => onNumberClick(1)} />
            <KeyboardButton value="2" onClick={() => onNumberClick(2)} />
            <KeyboardButton value="3" onClick={() => onNumberClick(3)} />
          </div>
          <div>
            <KeyboardButton value="4" onClick={() => onNumberClick(4)} />
            <KeyboardButton value="5" onClick={() => onNumberClick(5)} />
            <KeyboardButton value="6" onClick={() => onNumberClick(6)} />
          </div>
          <div>
            <KeyboardButton value="7" onClick={() => onNumberClick(7)} />
            <KeyboardButton value="8" onClick={() => onNumberClick(8)} />
            <KeyboardButton value="9" onClick={() => onNumberClick(9)} />
          </div>
          <div>
            <KeyboardButton value="0" onClick={() => onNumberClick(0)} />
            <KeyboardButton value="Backspace" onClick={onBackspaceClick} />
            <KeyboardButton value="Clear input" onClick={onClearClick} />
          </div>
          <div>
            <button onClick={() => setView('welcome')}>Return</button>
            {currentView === 'deposit' ? <button onClick={onAcceptDeposit}>Accept</button> : null}
            {currentView === 'withdraw' ? <button onClick={onAcceptWithdraw}>Accept</button> : null}
          </div>
        </div>
  )
}

export default Keyboard;