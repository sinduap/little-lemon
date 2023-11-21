import Button from '../Button';
import './Hero.style.scss';
import hero from '../../assets/images/hero.jpg';

const Hero = () => (
  <div className="bg-green hero-background">
    <div className="container">
      <section className="hero">
        <div className="hero__box">
          <h1 className="hero__title">
            Little Lemon <span>Chicago</span>
          </h1>
          <p className="hero__text">
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12-15 items that they rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day.
          </p>
          <Button to={'/booking'}>Reserve a table</Button>
        </div>
        <div className="hero__box hero__box--img">
          <img className="hero__img" src={hero} alt="Bruschetta" />
        </div>
      </section>
    </div>
  </div>
);

export default Hero;
