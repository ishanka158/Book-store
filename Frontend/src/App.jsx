import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import CreateBook from './Pages/CreateBook'
import ShowBook from './Pages/ShowBook'
import EditBook from './Pages/EditBook'
import DleleteBook from './Pages/DleleteBook'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/> 
      <Route path='/books/details/:id' element={<ShowBook/>}/>      
      <Route path='/books/edit/:id' element={<EditBook/>}/>     
           
      <Route path='/books/delete/:id' element={<DleleteBook/>}/>      
      
    </Routes>
  )
}

export default App