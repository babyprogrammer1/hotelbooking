import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {

  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App