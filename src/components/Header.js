import Nav from './Nav';
import logo from '../assets/images/logo.png';

const Header = () => (
  <header>
    <img src={logo} alt="Little Lemon Logo" height={40} />
    <Nav />
  </header>
);

export default Header;
