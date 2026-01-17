import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

 

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    
    const [message, setMessage] = useState("");
const navigate = useNavigate()

     const addProduct = async (values, { setSubmitting, resetForm }) => {
        setMessage("");
        try {
            const response = await axios.post("http://localhost:5000/api/products", values);
            setMessage("✅ Product added successfully!");
            console.log("product created:", response.data);
            resetForm();
            navigate('/')
        } catch (error) {
            setMessage("❌ Error: " + (error.response?.data?.message || error.message));
        } finally {
            setSubmitting(false);
        }
    };

     
const value ={addProduct,message}
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
} 

export const useProductContext =  ()=>{
    const context = useContext(ProductContext);
    if(!context){
        throw new Error("useProductContext must be used within ProductProvider")
    }
    return context;
}