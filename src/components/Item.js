import React from 'react'
import { useParams } from "react-router-dom"
import SingleItem from './SingleItem'


const Item = (props) => {
    let { label } = useParams()
    const { recipes } = props;
    



    return (
        <div>
           
            {
                recipes.map(recipe => recipe.recipe.label === label ?<SingleItem img={recipe.recipe.image} title={recipe.recipe.label} ingredient={recipe.recipe.ingredientLines} shareAs={recipe.recipe.shareAs} />: "")
            }
        </div>
    )
}

export default Item