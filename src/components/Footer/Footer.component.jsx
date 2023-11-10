import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/images/logo-alt.png';
import './Footer.style.scss';

const Footer = () => (
  <div className="bg-dark">
    <div className="container">
      <footer className="footer">
        <a href="/">
          <img className="footer__logo" src={logo} alt="Little Lemon Logo" />
        </a>

        <nav className="footer__nav">
          <h3 className="footer__heading">Navigation</h3>
          <ul className="footer__list">
            <li>
              <a className="footer__item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="footer__item" href="#">
                About
              </a>
            </li>
            <li>
              <a className="footer__item" href="#">
                Menu
              </a>
            </li>
            <li>
              <a className="footer__item" href="#">
                Reservations
              </a>
            </li>
            <li>
              <a className="footer__item" href="#">
                Order Online
              </a>
            </li>
            <li>
              <a className="footer__item" href="#">
                Login
              </a>
            </li>
          </ul>
        </nav>

        <nav className="footer__nav">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__list">
            <li>
              <address>Address</address>
            </li>
            <li>
              <a className="footer__item" href="mailto:admin@littlelemon.com">
                admin@little.lemon
              </a>
            </li>
            <li>
              <a className="footer__item" href="tel:123-444-5678">
                123-444-5678
              </a>
            </li>
          </ul>
        </nav>

        <nav className="footer__nav">
          <h3 className="footer__heading">Social Media Links</h3>
          <ul className="footer__list footer__list--socials">
            <li>
              <a className="footer__item" href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a className="footer__item" href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a className="footer__item" href="#">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  </div>
);

export default Footer;
