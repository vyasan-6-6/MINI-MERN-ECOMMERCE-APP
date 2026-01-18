import axios from "axios";
import { createContext , useEffect, useState } from "react"; 
import { useLocation } from "react-router-dom";

 

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    
    const [message, setMessage] = useState("");  
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const url  = "http://localhost:5000/api/products";
    const location = useLocation()
    
    const fetchProducts = async () => {
        setLoading(true)
        try {
            const response = await axios.get(url);
            setProducts(response.data);
            setError("");
        } catch (error) {
            setError("Failed to fetch products:" + error.message);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => { 
            fetchProducts(); 
 }, [location.pathname]);

    const addProduct = async (formData) => {
        setMessage("");
        try {
            const response = await axios.post(url, formData ,{headers:{"Content-Type":"multipart/form-data"}});
            setMessage("✅ Product added successfully!");
            return response; 
           
            
        } catch (error) {
            setMessage("❌ Error: " + (error.response?.data?.message || error.message));
                 throw error;
        }
    };
     
      
     
const value ={addProduct,message,error,products,loading,fetchProducts}
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
} 
