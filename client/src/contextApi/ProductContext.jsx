import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const location = useLocation();
    const [message, setMessage] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [total, setTotal] = useState(1);
    const [error, setError] = useState("");
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");

    const url = "http://localhost:5000/api/products";

    const fetchProducts = async (pageNumber = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(url,{params:{keyword,category,sort,page:pageNumber,limit:6}});
            setProducts(response.data.products);
            setPage(response.data.page);
            setPages(response.data.pages);
            setTotal(response.data.total);
            setError("");
        } catch (error) {
            setError("Failed to fetch products:" + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(page);
    }, [location.pathname, page, category, sort, keyword]);
    useEffect(()=>{
        setPage(1)
    },[keyword,sort,category])

    const addProduct = async (formData) => {
        setMessage("");
        try {
            const response = await axios.post(url, formData, { headers: { "Content-Type": "multipart/form-data" } });
            setMessage("✅ Product added successfully!");
            return response;
        } catch (error) {
            setMessage("❌ Error: " + (error.response?.data?.message || error.message));
            throw error;
        }
    };

    const value = {
        addProduct,
        message,
        error,
        products,
        loading,
        fetchProducts,
        page,
        pages,
        total,
        setPage,
        setKeyword,
        keyword,
        sort,
        setSort,
        category,
        setCategory,
    };
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
