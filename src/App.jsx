import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Commercial1 from './pages/Commercial1'
import Commercial2 from './pages/Commercial2'
import Agricultural4 from './pages/Agricultural4'
import Agricultural7 from './pages/Agricultural7'
import Commercial6 from './pages/Commercial6'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/commercial1" element={<Commercial1 />} />
        <Route path="/commercial2" element={<Commercial2 />} />
        <Route path="/agricultural4" element={<Agricultural4 />} />
        <Route path="/agricultural7" element={<Agricultural7 />} />
        <Route path="/commercial6" element={<Commercial6 />} />
      </Routes>
    </Router>
  )
}

export default App