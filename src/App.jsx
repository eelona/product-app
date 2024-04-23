import './App.css'
import { About } from './components/About'
import LoginForm from './components/Login'
import { Product } from './components/Product'
import { Products } from './components/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path='/product/:id' element={<Product />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/login' element={<LoginForm />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
