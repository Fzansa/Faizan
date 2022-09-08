import React from 'react'

const RecipeItem = (props) => {
   const {name,image,ingredient} = props;
  return (
    <div className="cards py-3">
    <div className='card mainCard '>
      <img className='img-fluid cardsImg' src={image} alt="" />
      <div className="card-body cardsBody">
        <h5 className='cardsTitle'>{name}</h5>
      </div>
     
    </div>
  </div>
  )
}

export default RecipeItem