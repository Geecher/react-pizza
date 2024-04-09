import { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const clickCategory = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='categories'>
      <ul>
        {categories.map((val, i) => (
          <li
            key={i}
            onClick={() => clickCategory(i)}
            className={activeIndex === i ? 'active' : ''}
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
