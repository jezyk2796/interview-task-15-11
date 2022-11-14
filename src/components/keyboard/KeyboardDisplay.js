import keyboardDisplayStyles from "./KeyboardDisplay.module.css";

const KeyboardDisplay = ({inputValue, onChange}) => {
  return (
    <input
      type="text"
      readOnly
      tabIndex="-1"
      className={keyboardDisplayStyles.keyboardDisplay}
      value={inputValue}
      onChange={onChange}
    />
  );
}

export default KeyboardDisplay;