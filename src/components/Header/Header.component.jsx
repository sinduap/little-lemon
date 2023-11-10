import { useRef, useEffect, forwardRef } from 'react';
import logo from '../../assets/images/logo.png';
import './Header.style.scss';

const Header = ({ children, heroRef }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting) {
        headerRef.current.style.position = 'relative';
      } else {
        headerRef.current.style.position = 'fixed';
      }
    });
    observer.observe(heroRef.current);

    return () => observer.unobserve(heroRef.current);
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="container">
        <div className="header__box">
          <a href="/">
            <img className="header__logo" src={logo} alt="Little Lemon Logo" />
          </a>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
