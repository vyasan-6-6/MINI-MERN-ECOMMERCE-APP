import axios from "axios";
import { useReducer } from "react";
import { createContext, useEffect } from "react";
import { initialState,productReducer } from "./ProuductReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
   

    const [state, dispatch] = useReducer(productReducer, initialState);

    const url =`${import.meta.env.VITE_API_URL}/api/products`;

    const fetchProducts = async (pageNumber = 1) => {
        dispatch({ type: "FETCH_START" });
        try {
            const { data } = await axios.get(url, {
                params: {
                    keyword: state.debouncedKeyword,
                    category: state.category,
                    sort: state.sort,
                    page: pageNumber,
                    limit: 8,
                },
            });

            dispatch({ type: "FETCH_SUCCESS", payload: data });
        } catch (error) {
            dispatch({
                type: "FETCH_ERROR",
                payload: error.message,
            });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({ type: "SET_DEBOUNCED_KEYWORD", payload: state.keyword });
        }, 500);
        return () => clearTimeout(timer);
    }, [state.keyword]);

    useEffect(() => {
        dispatch({ type: "SET_PAGE", payload: 1 });
    }, [state.sort, state.category, state.debouncedKeyword]);

    useEffect(() => {
        fetchProducts(state.page);
    }, [state.page, state.category, state.sort, state.debouncedKeyword]);

    const addProduct = async (formData) => {
        dispatch({ type: "SET_MESSAGE", payload: "" });
        
        try {
            await axios.post(url, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            

            dispatch({
                type: "SET_MESSAGE",
                payload: "✅ Product added successfully!",
            });
            setTimeout(() => {
                dispatch({ type: "SET_MESSAGE", payload: "" });
            }, 1500);
        } catch (error) {
            dispatch({
                type: "SET_MESSAGE",
                payload: "❌ Error: " + (error.response?.data?.message || error.message),
            });
            return null; // ✅ don't throw
        }
    };

    const value = {
        state,
        dispatch,
        addProduct,
        fetchProducts,
    };
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
