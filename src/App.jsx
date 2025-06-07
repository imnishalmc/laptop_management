import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddLaptop from './pages/AddLaptop'
import EditLaptop from './pages/EditLaptop'
import SinglePage from './pages/SingleLaptop'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/homepage' element={<HomePage/>}/>
    <Route path='/addpage' element={<AddLaptop/>}/>
    <Route path='/singlepage/:id' element={<SinglePage/>}/>
    <Route path='/editpage/:id' element={<EditLaptop/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
