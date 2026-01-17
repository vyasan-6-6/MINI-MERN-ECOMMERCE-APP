import axios from "axios";
import { createContext , useState } from "react"; 

 

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    
    const [message, setMessage] = useState("");  

    const addProduct = async (formData) => {
        setMessage("");
        try {
            const response = await axios.post("http://localhost:5000/api/products", formData ,{headers:{"Content-Type":"multipart/form-data"}});
            setMessage("✅ Product added successfully!");
            console.log("product created:", response.data); 
           
            
        } catch (error) {
            setMessage("❌ Error: " + (error.response?.data?.message || error.message));
        } finally {
            setSubmitting(false);
        }
    };


     
const value ={addProduct,message}
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
} 
