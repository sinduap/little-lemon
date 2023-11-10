import { MdOutlineDeliveryDining } from 'react-icons/md';
import './Card.style.scss';

const Card = ({ name, description, price, imgUrl }) => (
  <section className="card">
    <div>
      <img className="card__img" src={imgUrl} alt={name} />
    </div>
    <div className="card__body">
      <header className="card__header">
        <h3 className="card__name">{name}</h3>
        <p className="card__price">$ {price}</p>
      </header>
      <p className="card__description">{description}</p>
      <footer className="card__footer">
        <a href="#" className="card__order">
          Order a delivery <MdOutlineDeliveryDining />
        </a>
      </footer>
    </div>
  </section>
);

export default Card;
