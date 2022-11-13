const Header = ({value, type}) => {
  return (
    <div>
      {type === 'primary' ? <h1>{value}</h1> : <h3>{value}</h3>}
    </div>
  );
}

export default Header;