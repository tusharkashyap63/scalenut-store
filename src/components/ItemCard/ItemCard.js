import React from 'react';
import './ItemCard.css';

export default function ItemCard({ item }) {
  return (
    <div className='itemCard'>
      <p className='itemCard__productName'>{item.ProductName} </p>
      <div className='itemCard__img'>
        <img src={item.imgSrc} alt={item.ProductName} />
      </div>
      <div className='itemCard__content'>
        <div className='itemCard__contentLeft'>
          <p className='itemCard__categoryName'>{item.CategoryName}</p>
          <p className='itemCard__subCategoryName'>{item.SubCategoryName}</p>
        </div>
        <p className='itemCard__contentRight itemCard__price'>₹{item.Price}</p>
      </div>
      <button className='itemCard__button'>Add to cart</button>
    </div>
  );
}
