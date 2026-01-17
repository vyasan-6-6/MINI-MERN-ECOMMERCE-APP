 
import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import AddProduct from "./pages/AddProduct"  
import Navbar from "./components/Navbar"

 
function App() {
  
  return (
    < >
      <Navbar/>
      <Routes>
       <Route  path="/" element={<Products/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
      </Routes>
    </>
  )
}

export default App
