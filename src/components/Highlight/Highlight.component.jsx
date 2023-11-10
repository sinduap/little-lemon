import { useState, useEffect } from 'react';
import Card from '../Card';
import Button from '../Button';
import './Highlight.style.scss';

const Highlight = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(' http://localhost:8000/menu')
      .then(res => res.json())
      .then(data => setMenu(data));
  }, []);

  return (
    <section className="highlight">
      <div className="container">
        <header className="highlight__header">
          <h2 className="highlight__heading">This week specials!</h2>
          <Button>Discover all menu</Button>
        </header>
        <div className="highlight__menu">
          {menu.map(dish => (
            <Card
              key={dish.id}
              name={dish.name}
              description={dish.description}
              imgUrl={dish.img_url}
              price={dish.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlight;
