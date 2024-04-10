import s from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={s.desc}>К сожалению, данной страницы не существует</p>
      <button className={s.btn + ' button'}>Главная</button>
    </div>
  );
};

export default NotFoundBlock;
