import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hook/useFetch';
import Overlay from '../../components/Overlay';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import './Book.style.scss';
import { useState } from 'react';

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

  const book = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      date: new Date().toISOString().substring(0, 10),
      time: '',
      guest: 1,
      message: '',
    },
    onSubmit(values) {
      navigate('/');
    },
    validationSchema: BookSchema,
  });

  const handleDecreaseGuest = () => {
    if (book.values.guest === 1) return;
    book.setValues(values => ({
      ...values,
      guest: values.guest - 1,
    }));
  };

  const handleIncreaseGuest = () => {
    book.setValues(values => ({
      ...values,
      guest: values.guest + 1,
    }));
  };

  const availableTime = useFetch('http://localhost:8000/available_time');

  return (
    <div className="container">
      {openModal && (
        <Overlay onClose={() => setOpenModal(false)}>
          <Modal
            text="Are you sure?"
            onSubmit={() => {
              setOpenModal(false);
              book.handleSubmit();
            }}
            onCancel={() => setOpenModal(false)}
          />
        </Overlay>
      )}
      <section className="book">
        <h2 className="book__heading">Reserve a Table</h2>
        <form className="book__form" onSubmit={book.handleSubmit}>
          <div className="book__section">
            <label className="book__label" htmlFor="firstName">
              First Name
              {book.touched.firstName && book.errors.firstName ? (
                <div className="book__error">{book.errors.firstName}</div>
              ) : null}
            </label>
            <input
              className="book__input"
              type="text"
              name="firstName"
              id="firstName"
              onChange={book.handleChange}
              value={book.values.firstName}
            />
          </div>
          <div className="book__section">
            <label className="book__label" htmlFor="lastName">
              Last Name
              {book.touched.lastName && book.errors.lastName ? (
                <div className="book__error">{book.errors.lastName}</div>
              ) : null}
            </label>
            <input
              className="book__input"
              type="text"
              name="lastName"
              id="lastName"
              onChange={book.handleChange}
              value={book.values.lastName}
            />
          </div>
          <div className="book__section">
            <label className="book__label" htmlFor="lastName">
              Email
              {book.touched.email && book.errors.email ? (
                <div className="book__error">{book.errors.email}</div>
              ) : null}
            </label>
            <input
              className="book__input"
              type="email"
              name="email"
              id="email"
              onChange={book.handleChange}
              value={book.values.email}
            />
          </div>
          <div className="book__section">
            <label className="book__label" htmlFor="date">
              Select Date and Time
              {book.touched.time && book.errors.time ? (
                <span className="book__error">{book.errors.time}</span>
              ) : null}
            </label>
            <input
              className="book__input"
              type="date"
              name="date"
              id="date"
              onChange={book.handleChange}
              value={book.values.date}
            />
          </div>
          <div className="book__section">
            <div className="book__time">
              {availableTime
                ? availableTime.map(time => (
                    <label
                      className={`book__label-time ${
                        book.values.time === time
                          ? 'book__label-time--active'
                          : ''
                      }`}
                      key={time}
                    >
                      {`${time}pm`}
                      <input
                        className="book__input-time"
                        name="time"
                        type="radio"
                        value={time}
                        onChange={book.handleChange}
                        checked={book.values.time === time}
                      />
                    </label>
                  ))
                : null}
            </div>
          </div>

          <div className="book__section ">
            <label className="book__label" htmlFor="people">
              Guests
            </label>
            <div className="book__people">
              <data
                className="book__people-data"
                value={book.values.guest}
              >{`${book.values.guest} Guest`}</data>
              <button
                className="book__minus"
                type="button"
                onClick={handleDecreaseGuest}
              >
                <FaMinus />
              </button>
              <button
                className="book__plus"
                type="button"
                onClick={handleIncreaseGuest}
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="book__section">
            <label className="book__label" htmlFor="message">
              Message
              {book.touched.message && book.errors.message ? (
                <span className="book__error">{book.errors.message}</span>
              ) : null}
            </label>
            <textarea
              className="book__input book__input--message"
              name="message"
              id="message"
              onChange={book.handleChange}
              value={book.values.message}
            ></textarea>
          </div>
          <Button
            className="mt-2"
            onClick={() => {
              book.validateForm().then(data => {
                if (Object.entries(data).length !== 0) {
                  book.handleSubmit();
                  return;
                }
                setOpenModal(true);
              });
            }}
          >
            Submit <FaArrowRight size="12px" />
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Book;
