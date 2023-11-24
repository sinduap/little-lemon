import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import './Nav.style.scss';
import { useScrollToTop } from '../../context/ScrollToTop';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { scrollToTop } = useScrollToTop();

  function handleClickMenu() {
    scrollToTop();
    isOpen && setIsOpen(false);
  }

  return (
    <>
      <nav className={isOpen ? 'mobile-nav' : 'nav'}>
        <ul className={isOpen ? 'mobile-nav__list' : 'nav__list'}>
          <li>
            <Link
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              to="/"
              onClick={handleClickMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              to="/about"
              onClick={handleClickMenu}
            >
              About
            </Link>
          </li>
          <li>
            <a
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              href="/#"
              onClick={handleClickMenu}
            >
              Menu
            </a>
          </li>
          <li>
            <Link
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              to="/reservations"
              onClick={handleClickMenu}
            >
              Reservations
            </Link>
          </li>
          <li>
            <a
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              href="/#"
              onClick={handleClickMenu}
            >
              Order Online
            </a>
          </li>
          <li>
            <a
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              href="/#"
              onClick={handleClickMenu}
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
      {isOpen ? (
        <button className="nav__close" onClick={handleClose}>
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
