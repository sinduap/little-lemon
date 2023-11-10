import logo from '../../assets/images/logo.png';
import './Header.style.scss';

const Header = ({ children }) => (
  <div className="container">
    <header className="header">
      <a href="/">
        <img className="header__logo" src={logo} alt="Little Lemon Logo" />
      </a>
      {children}
    </header>
  </div>
);

export default Header;
