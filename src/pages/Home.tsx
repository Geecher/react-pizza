import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock, { PizzaProps } from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import axios from 'axios';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://63b9cd7c56043ab3c78fa479.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : items.map((item: PizzaProps) => (
              <PizzaBlock key={item.id} {...item} />
            ))}
      </div>
    </>
  );
};

export default Home;
