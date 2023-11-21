import { useSucceedBooking } from '../../context/SucceedBookingContext';
import { FaRegCheckCircle } from 'react-icons/fa';
import Button from '../../components/Button';
import './BookingSuccess.style.scss';

const BookingSuccess = () => {
  const [succeedBooking] = useSucceedBooking();

  return (
    <div className="container">
      <section className="booking-success">
        <FaRegCheckCircle className="booking-success__icon" />
        <h2 className="booking-success__heading">
          Your reservation booked successfully!
        </h2>
        <section className="booking-success__body">
          <div>
            <h4 className="booking-success__field">Occasion</h4>
            <p>{succeedBooking.occasion}</p>
          </div>
          <div>
            <h4 className="booking-success__field">Date & Time</h4>
            <p>
              {succeedBooking.date} | {succeedBooking.time}
            </p>
          </div>
          <div>
            <h4 className="booking-success__field">Guests</h4>
            <p>{succeedBooking.guest}</p>
          </div>
          <div>
            <h4 className="booking-success__field">Customer</h4>
            <p>
              Mr/Mrs {succeedBooking.firstName} {succeedBooking.lastName}
            </p>
          </div>
        </section>
        <Button to="/">Back to Home</Button>
      </section>
    </div>
  );
};

export default BookingSuccess;
