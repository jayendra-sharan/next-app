import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Jayendra</span>Sharan
      </h1>
      <p>Meet me on this website!</p>
    </div>
  )
}

export default Header;
