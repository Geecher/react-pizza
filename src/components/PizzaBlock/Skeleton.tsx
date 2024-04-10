import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={530}
    viewBox='0 0 280 530'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='140' cy='140' r='140' />
    <rect x='0' y='302' rx='0' ry='0' width='280' height='35' />
    <rect x='0' y='350' rx='0' ry='0' width='280' height='88' />
    <rect x='0' y='455' rx='0' ry='0' width='110' height='27' />
    <rect x='125' y='445' rx='30' ry='30' width='153' height='45' />
  </ContentLoader>
);

export default PizzaSkeleton;
