import './App.css'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Singup from './pages/Singup'

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index path='/' element={<Home />}></Route>
    <Route path='/Products' element={<Products />}></Route>
    <Route path='/Products/:id' element={<ProductDetails />}></Route>
    <Route path='/cart' element={<Cart />}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/singup' element={<Singup/>}></Route>
    <Route path="*" element={ <Error/> }></Route>
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
