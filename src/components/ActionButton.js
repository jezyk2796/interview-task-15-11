const ActionButton = ({ actionName, onClick }) => {
  return (
    <button onClick={onClick}>
      { actionName }
    </button>
  );
}

export default ActionButton;