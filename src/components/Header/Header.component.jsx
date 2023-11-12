import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.style.scss';

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__box">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Little Lemon Logo" />
          </Link>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
