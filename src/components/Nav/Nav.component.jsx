import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import './Nav.style.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(prev => !prev);

  const { pathname } = useLocation();

  useEffect(() => {
    if (!isOpen) return;
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={isOpen ? 'mobile-nav' : 'nav'}>
        <ul className={isOpen ? 'mobile-nav__list' : 'nav__list'}>
          <li>
            <Link className={isOpen ? 'mobile-nav__item' : 'nav__item'} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <a className={isOpen ? 'mobile-nav__item' : 'nav__item'} href="#">
              Menu
            </a>
          </li>
          <li>
            <a className={isOpen ? 'mobile-nav__item' : 'nav__item'} href="#">
              Reservations
            </a>
          </li>
          <li>
            <a className={isOpen ? 'mobile-nav__item' : 'nav__item'} href="#">
              Order Online
            </a>
          </li>
          <li>
            <a className={isOpen ? 'mobile-nav__item' : 'nav__item'} href="#">
              Login
            </a>
          </li>
        </ul>
      </nav>
      {isOpen ? (
        <button className="nav__close" onClick={handleOpen}>
          <RxCross1 />
        </button>
      ) : (
        <button className="nav__mobile" onClick={handleOpen}>
          <RxHamburgerMenu />
        </button>
      )}
    </>
  );
};

export default Nav;
