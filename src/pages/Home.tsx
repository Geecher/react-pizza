import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock, { PizzaProps } from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/Skeleton';
import Sort, { SortObject } from '../components/Sort';
import axios from 'axios';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [categoryId, setCategoryId] = useState(0);
  const [sort, setSort] = useState({
    name: 'популярности (↑)',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    axios
      .get(
        `https://63b9cd7c56043ab3c78fa479.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          value={categoryId}
          onClickCategory={(i: number) => setCategoryId(i)}
        />
        <Sort
          value={sort}
          onClickSort={(object: SortObject) => setSort(object)}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
          : items.map((item: PizzaProps) => (
              <PizzaBlock key={item.id} {...item} />
            ))}
      </div>
    </div>
  );
};

export default Home;
