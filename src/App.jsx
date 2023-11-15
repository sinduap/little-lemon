import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Page from './pages/Page';
import Home from './pages/Home';
import About from './components/About';
import Book from './pages/Book';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Page />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
