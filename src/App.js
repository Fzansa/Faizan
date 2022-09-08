import React, { useState, useEffect } from "react";
import "../src/App.css"
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

function App() {


  const [search, setSearch] = useState("pizza");

  const [recipes, setRecipes] = useState([]);

  const APP_ID = "bdcd02de";
  const APP_KEY = "4a5b96bc54dcbbe809b9468308084eae";

  useEffect(()=>{
    getRecipes();
  },[])
  
  const getRecipes = () =>{
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`).then((result)=>{
      result.json().then((res)=>{
        setRecipes(res.hits);
        
      })
    })
  }

  
  


  const onInputChange = e => {
    setSearch(e.target.value);
  }

  const onSearch = () => {
       getRecipes();
  }

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearch={onSearch} />
      <div className="container-fluid">
      <Recipes recipes={recipes} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
