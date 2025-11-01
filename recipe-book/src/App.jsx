import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { recipes } from './data/recipes';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredRecipes = recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar />
      
      <div className="app-content">
        <div className="left-panel">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
          
          <CategoryFilter />
          
          <RecipeList 
            recipes={filteredRecipes}
            selectedRecipe={selectedRecipe}
            onRecipeSelect={setSelectedRecipe}
          />
        </div>

        <div className="right-panel">
          <RecipeDetail recipe={selectedRecipe} />
        </div>
      </div>
    </div>
  );
};

export default App;