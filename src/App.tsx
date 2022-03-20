import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/home'

const App: FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
