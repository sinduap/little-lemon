import './Nav.style.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li>
        <a className="nav__item" href="#">
          Home
        </a>
      </li>
      <li>
        <a className="nav__item" href="#">
          About
        </a>
      </li>
      <li>
        <a className="nav__item" href="#">
          Menu
        </a>
      </li>
      <li>
        <a className="nav__item" href="#">
          Reservations
        </a>
      </li>
      <li>
        <a className="nav__item" href="#">
          Order Online
        </a>
      </li>
      <li>
        <a className="nav__item" href="#">
          Login
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
