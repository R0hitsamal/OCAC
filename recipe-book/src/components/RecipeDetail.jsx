import React from "react";
import Rating from '@mui/material/Rating';
const RecipeDetail = ({ recipe }) => {
  return (
    <div className="recipe-detail">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-detail-image"
      />

      <div className="recipe-detail-content">
        <h2 className="recipe-detail-title">{recipe.name}</h2>

        <div className="recipe-detail-meta">
          <div className="rating">
            <Rating name="read-only" value={recipe.rating} readOnly />
            <span className="rating-number">{recipe.rating}</span>
          </div>
          <div className="time">{recipe.time}</div>
        </div>

        <div className="recipe-section">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-section">
          <h3>Instructions</h3>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
