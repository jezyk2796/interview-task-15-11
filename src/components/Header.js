import headerStyles from './Header.module.css'

const Header = ({value, type, isActionHeader}) => {
  return (
    <div>
      {type === 'primary' ?
        <h1 className={headerStyles.primaryHeader}>{value}</h1> :
        <h3 className={`${headerStyles.secondaryHeader} ${isActionHeader ? headerStyles.actionHeader : null}`}>
          {value}
        </h3>
      }
    </div>
  );
}

export default Header;