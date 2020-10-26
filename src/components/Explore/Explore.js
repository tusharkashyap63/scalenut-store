import React from 'react';
import Categories from '../Categories/Categories';
import './Explore.css';

export default function Explore(props) {
  return (
    <section className='explore'>
      <h2 className='explore__heading'>Explore</h2>
      <Categories {...props} />
    </section>
  );
}
