import React,{useState} from 'react'
import Mealscards from './Mealscards'

const Mainpage = () => {
const [data,setData]=useState()

const [search,setSearch]=useState("")

const[msg,setMsg]=useState("")

const handleInput=(event)=>{
setSearch(event.target.value)
}
const myFun=async()=>{
    if(search==""){
        setMsg("Please Enter Something")
    }else{
    const get= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsonData= await get.json()
 
   setData(jsonData.meals)
   setMsg("")
    }
   
}

 return (
    <>
    <div className="imp">
<h1 className="head">FOOD RECIPE APP</h1>
<div className="container"></div>
<div className="searchBar">
    <input type="text" placeholder='Enter Dishes' onChange={handleInput}/>
    <button onClick={myFun}>search</button>
</div>
<h3 className="error">{msg}</h3>
<div>
<Mealscards detail={data}></Mealscards>
</div>

</div>
    </>
  );

}
export default Mainpage;
