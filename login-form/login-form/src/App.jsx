import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FirstPage from './Components/FirstPage'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />}/>
          <Route path="login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
