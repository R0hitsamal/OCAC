import React from 'react';
import Rating from '@mui/material/Rating';
const RecipeCard = ({ recipe, isSelected, onSelect }) => {
  return (
    <div 
      className={`recipe-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(recipe)}
    >
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <div className="recipe-info">
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="recipe-meta">
          <div className="rating">
            <Rating name="read-only" value={recipe.rating} readOnly />
            <span className="rating-number">{recipe.rating}</span>
          </div>
          <div className="time">{recipe.time}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;