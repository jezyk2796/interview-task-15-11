import keyboardButtonStyles from './KeyboardButton.module.css';

const KeyboardButton = ({value, onClick, isReturnButton, isAcceptButton}) => {
  return (
    <button
      className={`
        ${keyboardButtonStyles.keyboardButton}
        ${isReturnButton || isAcceptButton ? keyboardButtonStyles.decisionButton : null}
        ${isReturnButton ? keyboardButtonStyles.returnButton : null}
        ${isAcceptButton ? keyboardButtonStyles.acceptButton : null}
      `}
      onClick={onClick}>
      { value }
    </button>
  );
}

export default KeyboardButton;