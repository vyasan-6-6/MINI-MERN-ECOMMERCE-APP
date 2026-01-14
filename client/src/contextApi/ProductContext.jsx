import { createContext, useContext } from "react";

 

const ProductContext = createContext();

export const ProductProvider = ({Children}) => {

     
const value ={}
    return <ProductContext.Provider value={value}>{Children}</ProductContext.Provider>
} 

export const useProductContext =  ()=>{
    const context = useContext(ProductContext);
    if(!context){
        throw new Error("useProductContext must be used within ProductProvider")
    }
    return context;
}