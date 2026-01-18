 
import { Route, Routes } from "react-router-dom" 
import AddProduct from "./pages/AddProduct"  
import Navbar from "./components/Navbar"
import ProductPage from "./pages/ProductPage"

 
function App() {
  
  return (
    < >
      <Navbar/>
      <Routes>
       <Route  path="/" element={<ProductPage/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
      </Routes>
    </>
  )
}

export default App
