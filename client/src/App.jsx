 
import { Route, Routes, useLocation } from "react-router-dom" 
import AddProduct from "./pages/AddProduct"  
import Navbar from "./components/Navbar"
import ProductPage from "./pages/ProductPage"
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { useProductContext } from "./contextApi/useProductContext";

 
function App() {
 const location = useLocation()
  return (
    < >
    <ErrorBoundary FallbackComponent={ErrorFallback}
     resetKeys={[location.pathname]}>

      <Navbar/>
      <Routes>
       <Route  path="/" element={<ProductPage/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
      </Routes>
    </ErrorBoundary>
    </>
  )
}

export default App
