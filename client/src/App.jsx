 
import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import AddProducts from "./pages/Products"  
import Navbar from "./components/Navbar"

 
function App() {
  
  return (
    < >
      <Navbar/>
      <Routes>
       <Route  path="/" element={<Products/>}/>
        <Route path="/add-products" element={<AddProducts/>}/>
      </Routes>
    </>
  )
}

export default App
