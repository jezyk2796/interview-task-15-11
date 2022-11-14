import actionButtonStyles from './ActionButton.module.css';

const ActionButton = ({actionName, onClick}) => {
  return (
    <button onClick={onClick} className={actionButtonStyles.actionButton}>
      { actionName }
    </button>
  );
}

export default ActionButton;