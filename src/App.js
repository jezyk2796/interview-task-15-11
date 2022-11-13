import { useState } from 'react'

import Header from './components/Header.js'
import ActionButton from './components/ActionButton.js'
import Keyboard from './components/keyboard/Keyboard.js'

function App() {
  const [currentView, setView] = useState('welcome');
  const [moneyAmount, setMoneyAmount] = useState(0);


  const onWithdraw = () => setView('withdraw');

  const onDeposit = () => setView('deposit');

  return (
    <div>
      <Header value="ATM machine" type="primary" />
      <Header value={`Your money: ${moneyAmount}`} />
      {
        currentView === 'deposit' ?
        <Header value="Deposit money"/>
        : (currentView === 'withdraw') ?
        <Header value="Withdraw money" />: null
      }
      {
        currentView === 'welcome' ?
        <div>
          <ActionButton
            actionName='Withdraw cash'
            onClick={onWithdraw}
          />
          <ActionButton
            actionName='Deposit money'
            onClick={onDeposit}
          />
        </div> :
        <Keyboard
          moneyAmount={moneyAmount}
          setMoneyAmount={setMoneyAmount}
          currentView={currentView}
          setView={setView}
        />
      }
    </div>
  );
}

export default App;
