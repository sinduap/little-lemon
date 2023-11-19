import useFetch from '../../hook/useFetch';
import Card from '../Card';
import Button from '../Button';
import './Highlight.style.scss';

const Highlight = () => {
  const { status, data: menu } = useFetch('http://localhost:8000/menu');

  return (
    <section className="highlight">
      <div className="container">
        <header className="highlight__header">
          <h2 className="highlight__heading">This week specials!</h2>
          <Button>Discover all menu</Button>
        </header>
        <div className="highlight__menu">
          {status === 'loading' && <div>Loading...</div>}
          {status === 'resolved' &&
            menu.map(dish => (
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
