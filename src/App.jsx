import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './components/About';
import Booking from './pages/Booking';
import BookingSuccess from './pages/BookingSuccess';
import { ScrollToTop } from './context/ScrollToTop';
import { SucceedBooking } from './context/SucceedBooking';

const App = () => (
  <SucceedBooking>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </SucceedBooking>
);

export default App;
