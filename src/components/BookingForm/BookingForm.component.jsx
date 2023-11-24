import { forwardRef, useLayoutEffect } from 'react';
import useFetch from '../../hook/useFetch';
import { FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa';
import Button from '../Button';
import './BookingForm.style.scss';

const BookForm = forwardRef((props, ref) => {
  const { book, handleOpenModal, handleDecreaseGuest, handleIncreaseGuest } =
    props;

  const { data: availableTime } = useFetch(
    'http://localhost:8000/available_time'
  );

  const handleChangeGuest = e => {
    const guest = e.target.value;
    if (guest < 0 || guest > 10) return;
    book.setFieldValue('guest', guest);
  };

  const handleSubmitForm = () => {
    if (Object.keys(book.errors).length) {
      book.handleSubmit();
      return;
    }
    handleOpenModal(true);
  };

  useLayoutEffect(() => {
    const errorKeys = Object.keys(book.errors);

    if (errorKeys.length > 0) {
      const firstElement = document.querySelector(`#${errorKeys[0]}`);
      if (firstElement !== document.activeElement) {
        firstElement?.focus();
      }
    }
  }, [book.errors]);

  return (
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
            onBlur={book.handleBlur}
            onChange={book.handleChange}
            value={book.values.firstName}
            ref={ref}
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
            onBlur={book.handleBlur}
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
            onBlur={book.handleBlur}
            onChange={book.handleChange}
            value={book.values.email}
          />
        </div>
        <div className="book__section">
          <label className="book__label" htmlFor="date">
            Select Date and Time
            {book.errors.time ? (
              <span className="book__error">{book.errors.time}</span>
            ) : null}
          </label>
          <input
            className="book__input"
            type="date"
            name="date"
            id="date"
            onBlur={book.handleBlur}
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
                    } ${book.errors.time ? 'book__label-time--error' : ''}`}
                    key={time}
                    htmlFor={time}
                  >
                    {`${time}pm`}
                    <input
                      className="book__input-time"
                      name="time"
                      id={time}
                      type="radio"
                      value={time}
                      onBlur={book.handleBlur}
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
            <input
              className="book__input"
              type="number"
              onBlur={book.handleBlur}
              onChange={handleChangeGuest}
              value={book.values.guest}
              name="people"
              id="people"
              min={1}
              max={10}
            />
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
            Occasion
            {book.touched.occasion && book.errors.occasion ? (
              <span className="book__error">{book.errors.occasion}</span>
            ) : null}
          </label>
          <select
            name="occasion"
            id="occasion"
            className="book__input book__input--occasion"
            value={book.values.occasion}
            onBlur={book.handleBlur}
            onChange={book.handleChange}
          >
            <option value="Dinner">Dinner</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
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
            onBlur={book.handleBlur}
            onChange={book.handleChange}
            value={book.values.message}
          ></textarea>
        </div>
        <Button
          className="mt-2"
          onClick={handleSubmitForm}
          disabled={Object.keys(book.errors).length > 0}
        >
          Submit <FaArrowRight size="12px" />
        </Button>
      </form>
      <div className="book__illustration"></div>
    </section>
  );
});

export default BookForm;
