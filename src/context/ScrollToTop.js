import { useLayoutEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopContext = createContext();

export function ScrollToTop(props) {
  const { pathname } = useLocation();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useLayoutEffect(() => {
    scrollToTop();
  }, [pathname]);

  return <ScrollToTopContext.Provider value={{ scrollToTop }} {...props} />;
}

export function useScrollToTop() {
  const context = useContext(ScrollToTopContext);
  if (!context)
    throw new Error('useScrollToTop must be used within <ScrollToTop>');
  return context;
}
