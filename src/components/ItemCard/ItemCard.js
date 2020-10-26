import React from 'react';
import './ItemCard.css';

export default function ItemCard({ item }) {
  return (
    <div className='itemCard'>
      <p className='itemCard__productName'>{item.ProductName} </p>
      <div className='itemCard__img'>
        <img src={item.imgSrc} alt={item.ProductName} />
      </div>
      <p className='itemCard__categoryName'>{item.CategoryName}</p>
      <p className='itemCard__subCategoryName'>{item.SubCategoryName}</p>
      <p className='itemCard__price'>Price: ₹{item.Price}</p>
    </div>
  );
}
