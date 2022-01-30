import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Unidades from './Pages/Unidades'
import Cadastro from './Pages/Cadastro'
import Consumo from './Pages/Consumo'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/unidades" element={<Unidades />} />
      <Route path="/unidades/cadastro" element={<Cadastro />} />
      <Route path="/consumo" element={<Consumo />} />
    </Routes>
  )
}

export default App
