import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './components/About';
import Booking from './pages/Booking';
import BookingSuccess from './pages/BookingSuccess';
import ScrollToTop from './components/ScrollToTop';
import { SucceedBookingProvider } from './context/SucceedBookingContext';

const App = () => (
  <SucceedBookingProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </SucceedBookingProvider>
);

export default App;
