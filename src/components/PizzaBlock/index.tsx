import { useState } from 'react';

export type PizzaProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

function PizzaBlock(props: PizzaProps) {
  const doughNames = ['тонкое', 'традиционное'];

  const [dough, setDough] = useState(0);
  const [size, setSize] = useState(0);

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={props.imageUrl} alt='Pizza' />
      <h4 className='pizza-block__title'>{props.name}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {props.types.map((index) => (
            <li
              key={index}
              onClick={() => setDough(index)}
              className={
                index === dough || props.types.length === 1 ? 'active' : ''
              }
            >
              {doughNames[index]}
            </li>
          ))}
        </ul>
        <ul>
          {props.sizes.map((value, i) => (
            <li
              key={i}
              onClick={() => setSize(i)}
              className={size === i ? 'active' : ''}
            >
              {value} см.
            </li>
          ))}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {props.price} ₽</div>
        <button className='button button--outline button--add'>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          <i>0</i>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
