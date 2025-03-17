
//import './App.css'

import Mainpage from "./Components/mainpage"
import {Routes,Route} from 'react-router-dom';
import Mealinfo from "./Components/MealInfo";
function App() {
  
  return (
    
 
  <Routes>
    <Route path='/' element={<Mainpage />}></Route>
    <Route path='/:Mealid' element={<Mealinfo/>}></Route>
  </Routes>
    
);
}

export default App;
