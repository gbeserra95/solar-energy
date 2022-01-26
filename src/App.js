import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Unidades from './Pages/Unidades'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/unidades" element={<Unidades />} />
    </Routes>
  )
}

export default App
