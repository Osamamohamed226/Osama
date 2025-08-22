import React from 'react'
import HomePage from './Page/HomePage'
import { Routes,Route } from 'react-router-dom'
import AuthPage from './Page/AuthPage/AuthPage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
    </Routes>
  )
}

export default App