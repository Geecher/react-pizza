import s from './NotFoundBlock.module.scss';
import { Link } from 'react-router-dom';

const NotFoundBlock = () => {
  return (
    <div className='container'>
      <div className={s.root}>
        <h1 className={s.title}>
          <span>😕</span>
          <br />
          Ничего не найдено
        </h1>
        <p className={s.desc}>К сожалению, данной страницы не существует</p>
        <Link to='/' className={s.btn + ' button'}>
          Главная
        </Link>
      </div>
    </div>
  );
};

export default NotFoundBlock;
