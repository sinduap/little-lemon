import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SucceedBooking } from '../context/SucceedBooking';

const Test = ({ children }) => (
  <SucceedBooking>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={children} />
      </Routes>
    </BrowserRouter>
  </SucceedBooking>
);

export default Test;
