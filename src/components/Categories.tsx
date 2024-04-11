interface CategoriesProps {
  value: number;
  onClickCategory: (id: number) => void;
}

const Categories = (props: CategoriesProps) => {
  console.log(props);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => props.onClickCategory(i)}
            className={props.value === i ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
