 
import { Route, Routes } from "react-router-dom" 
import AddProduct from "./pages/AddProduct"  
import Navbar from "./components/Navbar"
import ProductList from "./pages/ProductList"

 
function App() {
  
  return (
    < >
      <Navbar/>
      <Routes>
       <Route  path="/" element={<ProductList/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
      </Routes>
    </>
  )
}

export default App
