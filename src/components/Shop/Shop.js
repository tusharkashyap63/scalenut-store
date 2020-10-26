import React from 'react';
import Items from '../Items/Items';
import './Shop.css';

export default function Shop({ filteredData, data }) {
  return (
    <main className='shop'>
      <h2 className='shop__heading'>Shop</h2>
      <Items data={data} filteredData={filteredData} />
    </main>
  );
}
