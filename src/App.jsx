import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Commercial1 from './pages/Commercial1'
import Commercial2 from './pages/Commercial2'
import Agricultural4 from './pages/Agricultural4'
import Agricultural7 from './pages/Agricultural7'
import Commercial6 from './pages/Commercial6'
import Commercial9 from './pages/Commercial9'
import Commercial10_1_files from './pages/Commercial10_1_files'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/commercial1" element={<Commercial1 />} />
        <Route path="/commercial2" element={<Commercial2 />} />
        <Route path="/agricultural4" element={<Agricultural4 />} />
        <Route path="/agricultural7" element={<Agricultural7 />} />
        <Route path="/commercial6" element={<Commercial6 />} />
        <Route path="/commercial9" element={<Commercial9 />} />
        <Route path="/commercial10_1_files" element={<Commercial10_1_files />} />
      </Routes>
    </Router>
  )
}

export default App