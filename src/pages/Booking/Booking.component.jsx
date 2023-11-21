import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Overlay from '../../components/Overlay';
import Modal from '../../components/Modal';
import BookingForm from '../../components/BookingForm';
import { useSucceedBooking } from '../../context/SucceedBookingContext';
import './Booking.style.scss';

const BookSchema = Yup.object().shape({
  firstName: Yup.string().min(3, 'Too short').required('Required'),
  lastName: Yup.string().min(3, 'Too short').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  date: Yup.date().required('Required'),
  time: Yup.string().required('Required'),
  guest: Yup.number(),
  message: Yup.string().min(5, 'Too short'),
});

const Book = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const firstNameRef = useRef(null);
  const [_, setSucceedBooking] = useSucceedBooking();

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const book = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      date: new Date().toISOString().substring(0, 10),
      time: '',
      guest: 1,
      occasion: 'dinner',
      message: '',
    },
    onSubmit(values) {
      fetch('http://localhost:8000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then(res => res.json())
        .then(data => {
          setSucceedBooking(data);
          navigate('/booking-success');
        })
        .catch(err => {});
    },
    validationSchema: BookSchema,
  });

  const handleDecreaseGuest = () => {
    if (book.values.guest === 1) return;
    book.setValues(values => ({
      ...values,
      guest: Number(values.guest) - 1,
    }));
  };

  const handleIncreaseGuest = () => {
    if (book.values.guest === 10) return;
    book.setValues(values => ({
      ...values,
      guest: Number(values.guest) + 1,
    }));
  };

  return (
    <div className="container">
      {openModal && (
        <Overlay onClose={() => setOpenModal(false)}>
          <Modal
            heading="Form submission"
            text="Are you sure to submit this information?"
            onSubmit={() => {
              setOpenModal(false);
              book.handleSubmit();
            }}
            onCancel={() => setOpenModal(false)}
          />
        </Overlay>
      )}
      <BookingForm
        ref={firstNameRef}
        book={book}
        handleOpenModal={setOpenModal}
        handleDecreaseGuest={handleDecreaseGuest}
        handleIncreaseGuest={handleIncreaseGuest}
      />
    </div>
  );
};

export default Book;
