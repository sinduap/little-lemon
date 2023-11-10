import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonial.style.scss';

const TestimonialCard = ({ name, username, imgUrl, description, rating }) => (
  <section className="testimonial__card">
    <header className="testimonial__header">
      <img src={imgUrl} alt={name} className="testimonial__img" />
      <div>
        <h4 className="testimonial__name">{name}</h4>
        <p className="testimonial__username">{username}</p>
      </div>
    </header>
    <blockquote className="testimonial__description">
      <q>{description}</q>
    </blockquote>
    <div className="testimonial__rating">
      {Array.from({ length: rating }).map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  </section>
);

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <div className="bg-green">
      <div className="container">
        <section className="testimonial">
          <h2 className="testimonial__heading">Testimonials</h2>
          <section className="testimonial__cards">
            {testimonials.map(testimonial => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                username={testimonial.username}
                imgUrl={testimonial.img_url}
                description={testimonial.description}
                rating={testimonial.rating}
              />
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;
