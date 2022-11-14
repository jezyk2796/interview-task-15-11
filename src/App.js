import { useState } from 'react'

import Header from './components/Header.js'
import ActionButton from './components/ActionButton.js'
import Keyboard from './components/keyboard/Keyboard.js'

import appStyles from './App.module.css';

function App() {
  const [currentView, setView] = useState('welcome');
  const [moneyAmount, setMoneyAmount] = useState(0);


  const onWithdraw = () => setView('withdraw');

  const onDeposit = () => setView('deposit');

  return (
    <div className={appStyles.container}>
      <Header value="ATM machine" type="primary" />
      <Header value={`Your money: ${moneyAmount}`} />
      {currentView !== 'welcome' ?
        <Header
          value={currentView === 'deposit' ? 'Deposit money' : 'Withdraw money'}
          isActionHeader={true} /> : null
      }
      {currentView === 'welcome' ?
        <div className={appStyles.actionButtonsContainer}>
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
