import logo from '../assets/images/logo-alt.png';

const Footer = () => (
  <footer>
    <img src={logo} height={80} alt="Little Lemon Logo" />

    <nav>
      <h3>Navigation</h3>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>

    <nav>
      <h3>Contact</h3>
      <ul>
        <li>
          <address>Address</address>
        </li>
        <li>
          <a href="mailto:admin@littlelemon.com">admin@little.lemon</a>
        </li>
        <li>
          <a href="tel:123-444-5678">123-444-5678</a>
        </li>
      </ul>
    </nav>

    <nav>
      <h3>Social Media Links</h3>
      <ul>
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
