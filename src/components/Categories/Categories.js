import React, { useEffect, useState } from 'react';
import './Categories.css';

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function Categories({ data, filteredData, setFilteredData }) {
  const uniqueCategories = getUnique(data, 'CategoryName');

  const [filtersApplied, setFiltersApplied] = useState([]);

  // Updates the list of filters when a checkbox is checked/unchecked
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFiltersApplied([...new Set([...filtersApplied, name])]);
    } else {
      setFiltersApplied(filtersApplied.filter((category) => category !== name));
    }
  };

  // Updates the filtered data whenever the list of filters changes
  useEffect(() => {
    const filteredItems = data.filter((item) => {
      for (let filter of filtersApplied) {
        if (item.CategoryName === filter) {
          return true;
        }
      }
      return false;
    });

    setFilteredData(filteredItems);
  }, [filtersApplied, data, setFilteredData]);

  return (
    <div className='categories'>
      {uniqueCategories.map((category, i) => (
        <label key={i}>
          <input
            type='checkbox'
            id={'category' + i}
            name={category}
            value={category}
            onChange={handleChange}
          />
          {category}
        </label>
      ))}
    </div>
  );
}
