import { useState } from "react";

import KeyboardButton from "./KeyboardButton";
import KeyboardDisplay from "./KeyboardDisplay";

import keyboardStyles from "./Keyboard.module.css"

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
      alert('First you need to enter the amount you want to deposit');
    } else if (parseInt(inputValue) === 0) {
      alert('Please enter the value higher than 0 or click the "Return" button to return to the main menu. ')
      setInputValue('');
    } else {
      setMoneyAmount(prevAmount => prevAmount + parseInt(inputValue));
      setInputValue('');
    }
  }

  const onAcceptWithdraw = () => {
    if (inputValue === '') {
      alert('First you need to enter the amount you want to withdraw');
    } else if (parseInt(inputValue) === 0) {
      alert('Please enter the value higher than 0 or click the "Return" button to return to the main menu. ')
      setInputValue('');
    } else if (moneyAmount - inputValue < 0) {
      alert('You do not have enough funds in your account to withdraw the specified amount of money. Please enter a smaller amount or click the "Return" button to return to the main menu.')
      setInputValue('');
    } else {
      setMoneyAmount(prevAmount => prevAmount - parseInt(inputValue));
      setInputValue('');
    }
  }

  return (
    <div className={keyboardStyles.keyboardContainer}>
      <KeyboardDisplay
        inputValue={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <div className={keyboardStyles.row}>
        <KeyboardButton value="1" onClick={() => onNumberClick(1)} />
        <KeyboardButton value="2" onClick={() => onNumberClick(2)} />
        <KeyboardButton value="3" onClick={() => onNumberClick(3)} />
      </div>
      <div className={keyboardStyles.row}>
        <KeyboardButton value="4" onClick={() => onNumberClick(4)} />
        <KeyboardButton value="5" onClick={() => onNumberClick(5)} />
        <KeyboardButton value="6" onClick={() => onNumberClick(6)} />
      </div>
      <div className={keyboardStyles.row}>
        <KeyboardButton value="7" onClick={() => onNumberClick(7)} />
        <KeyboardButton value="8" onClick={() => onNumberClick(8)} />
        <KeyboardButton value="9" onClick={() => onNumberClick(9)} />
      </div>
      <div className={keyboardStyles.row}>
        <KeyboardButton value="Clear input" onClick={onClearClick} />
        <KeyboardButton value="0" onClick={() => onNumberClick(0)} />
        <KeyboardButton value="Backspace" onClick={onBackspaceClick} />
      </div>
      <div className={`${keyboardStyles.row} ${keyboardStyles.lastRow}`}>
        <KeyboardButton
          value="Return"
          isReturnButton={true}
          onClick={() => setView('welcome')}
        />
        {currentView === 'deposit' ?
          <KeyboardButton
            value="Accept"
            onClick={onAcceptDeposit}
            isAcceptButton={true}
          /> : null
        }
        {currentView === 'withdraw' ?
          <KeyboardButton
            value="Accept"
            onClick={onAcceptWithdraw}
            isAcceptButton={true}
          /> : null
        }
      </div>
    </div>
  )
}

export default Keyboard;