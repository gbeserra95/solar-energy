// Pages
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Unidades from './Pages/Unidades'
import Cadastro from './Pages/Cadastro'
import Consumo from './Pages/Consumo'
import { Routes, Route } from 'react-router-dom'

// Toast is sugested to be imported in the app.js as we want to use in every page
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/consumo" element={<Consumo />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
