import { createContext, useContext, useState } from 'react';

const SucceedBookingContext = createContext();

const SucceedBookingProvider = props => {
  const [succeedBooking, setSucceedBooking] = useState(null);

  return (
    <SucceedBookingContext.Provider
      value={[succeedBooking, setSucceedBooking]}
      {...props}
    />
  );
};

const useSucceedBooking = () => {
  const context = useContext(SucceedBookingContext);
  return context;
};

export { useSucceedBooking, SucceedBookingProvider };
