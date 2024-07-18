import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Commercial1 from './pages/Commercial1'
import Commercial2 from './pages/Commercial2'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/commercial1" element={<Commercial1 />} />
        <Route path="/commercial2" element={<Commercial2 />} />
      </Routes>
    </Router>
  )
}

export default App