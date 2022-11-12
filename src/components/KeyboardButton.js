const KeyboardButton = ({ value, onClick }) => {
  return (
    <button onClick={onClick}>
      { value }
    </button>
  );
}

export default KeyboardButton;