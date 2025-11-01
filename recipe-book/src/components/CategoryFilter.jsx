import React from 'react';

const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <button className="category-btn">All</button>
      <button className="category-btn">Breakfast</button>
      <button className="category-btn">Lunch</button>
      <button className="category-btn">Dinner</button>
      <button className="category-btn">Dessert</button>
    </div>
  );
};

export default CategoryFilter;