import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Items.css';

export default function Items({ data, filteredData }) {
  return (
    <div className='items'>
      {filteredData && filteredData.length > 0
        ? filteredData.map((item) => (
            <ItemCard key={item.ProductID} item={item} />
          ))
        : data.map((item) => <ItemCard key={item.ProductID} item={item} />)}
    </div>
  );
}
