import React from 'react'
import { NavLink } from 'react-router-dom';

const Mealscards = ({detail}) => {
    console.log(detail);
    
  return (
    <div className="meals">
      {!detail ? "": detail.map((currentItem)=>{
        return(
        <div classname="mealImg">
          <img src={currentItem.strMealThumb}></img>
          <p>{currentItem.strMeal}</p>
          <NavLink to={`/${currentItem.idMeal}`}> <button className='recipe-button'>Receipe</button></NavLink>
         
      </div>
        
        )
      })
    }

  </div>
  );
}

export default Mealscards;
