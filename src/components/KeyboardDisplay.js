const KeyboardDisplay = ({inputValue, onChange}) => {
  return (
    <input
      type="text"
      readOnly
      value={inputValue}
      onChange={onChange}
    />
  );
}

export default KeyboardDisplay;