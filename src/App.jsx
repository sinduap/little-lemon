import { useRef } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Testimonial from './components/Testimonial';
import About from './components/About';

function App() {
  const heroRef = useRef(null);

  return (
    <>
      <Header heroRef={heroRef}>
        <Nav />
      </Header>
      <Main>
        <Hero ref={heroRef} />
        <Highlight />
        <Testimonial />
        <About />
      </Main>
      <Footer />
    </>
  );
}

export default App;
