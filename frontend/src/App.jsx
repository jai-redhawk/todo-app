import { useEffect, useState } from 'react'
import { Createtodo } from './components/Createtodo';
import { Showtodo} from './components/Showtodo'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios';

function App() {
  const[todos, settodos]= [];

  useEffect(()=>{
  const fetchdata= async()=>{
    try{
    const response= await axios.get('http://localhost:3000/todos');
    settodos(...response.data);}
    catch(error){
      console.log('error fetching data');
    }
  }
    fetchdata();
}, []);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/create' element= {<Createtodo/>}/>
          <Route path='/show' element={<Showtodo todos={todos}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
