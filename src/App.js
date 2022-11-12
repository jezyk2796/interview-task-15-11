import Header from './components/Header.js'
import ActionButton from './components/ActionButton.js'
import KeyboardButton from './components/KeyboardButton.js'

function App() {
  const onWithdraw = () => {
    console.log('withdraw')
  }

  const onDeposit = () => {
    console.log('deposit')
  }

  const onNumberClick = (keyValue, e) => {
    document.querySelector('input').value += keyValue;
  }

  const onBackspaceClick = () => {
    console.log('backspace')
  }

  const onClearClick = () => {
    console.log('clear')
  }

  return (
    <div>
      <Header />
      <div>
        <h3>Your money: {'test value'}</h3>
      </div>
      <div>
        <ActionButton
          actionName='Withdraw cash'
          onClick={onWithdraw}
        />
        <ActionButton
          actionName='Deposit money'
          onClick={onDeposit}
        />
      </div>
      <div>
        <input type="text" readOnly />
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
          <button>Cancel</button>
          <button>Accept</button>
        </div>
      </div>
    </div>
  );
}

export default App;
