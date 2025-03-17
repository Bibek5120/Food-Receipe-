import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Mealinfo = () => {

  const {Mealid}=useParams();

  const[info,setInfo]=useState()
  const getInfo= async()=>{
  const get =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`);
  const jsonData=await get.json();
  
  setInfo(jsonData.meals[0]);
  }
  
if(info !=""){
  getInfo()
}
  return (
    <>
  {! info ? (<p>Data not found</p> ):(
  <div className='msg'>
    <img src={info.strMealThumb}></img>
    <div className="info">
      <h1>Receipe Details</h1>
      <button>{info.strMeal}</button>
      <h3>Instruction's</h3>
      <p>{info.strInstructions}</p>
    </div>
 </div>
  
)}
</>
);
}

export default Mealinfo;
