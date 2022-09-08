import React from 'react'
import RecipeItem from './RecipeItem';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import Item from './Item';

const Recipes = (props) => {
  const { recipes } = props;
  return (
    <div className='cardsContainer py-2'>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              recipes.map(recipe => <Link to={"item/" + recipe.recipe.label}><RecipeItem name={recipe.recipe.label} image={recipe.recipe.image} ingredient={recipe.recipe.ingredientLines} /></Link>)
            }
          />

          <Route path={"item/:label"} element={<Item recipes={recipes}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default Recipes