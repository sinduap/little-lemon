import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import './Nav.style.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(prev => !prev);

  useEffect(() => {
    if (!isOpen) return;
    setIsOpen(false);
  }, [isOpen]);

  const handleScrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      <nav className={isOpen ? 'mobile-nav' : 'nav'}>
        <ul className={isOpen ? 'mobile-nav__list' : 'nav__list'}>
          <li>
            <Link
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              to="/"
              onClick={handleScrollToTop}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              to="/about"
              onClick={handleScrollToTop}
            >
              About
            </Link>
          </li>
          <li>
            <a
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              href="/#"
              onClick={handleScrollToTop}
            >
              Menu
            </a>
          </li>
          <li>
            <Link
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              to="/reservations"
            >
              Reservations
            </Link>
          </li>
          <li>
            <a
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              href="/#"
              onClick={handleScrollToTop}
            >
              Order Online
            </a>
          </li>
          <li>
            <a
              className={isOpen ? 'mobile-nav__item' : 'nav__item'}
              href="/#"
              onClick={handleScrollToTop}
            >
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
