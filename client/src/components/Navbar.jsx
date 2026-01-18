import { useNavigate } from "react-router-dom";
import { useProductContext } from "../contextApi/useProductContext";

const Navbar = () => {
    const { setKeyword, keyword, sort, setSort, category, setCategory, setPage } = useProductContext();
    const navigate = useNavigate();
    const handleAddProduct = () => {
        navigate("/add-product");
    };

    const handleSearch = () => {
        setPage(1);
    };
    return (
        <nav className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Side - Logo and Platform Name */}
                    <div className="flex items-center gap-3">
                        <img src="./shoplogo.jpg" alt="Logo" className="h-10 w-10 object-contain rounded-lg" />
                        <h1 className="text-2xl font-semibold">MyPlatform</h1>
                    </div>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-3 py-2 rounded bg-slate-700 text-white focus:outline-none"
                    >
                        <option value="">All Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="audio">Audio</option>
                        <option value="furniture">Furniture</option>
                        <option value="accessories">Accessories</option>
                    </select>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="px-3 py-2 rounded bg-slate-700 text-white focus:outline-none"
                    >
                        <option value="">Sort</option>
                        <option value="price-asc">Price: Low → High</option>
                        <option value="price-desc">Price: High → Low</option>
                    </select>

                    {/* Right Side - Search Box */}
                    <div className="flex items-center">
                        <div className="relative">
                            <input
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                type="text"
                                placeholder="Search..."
                                className="w-64 md:w-80 px-4 py-2 pr-12 rounded-full text-white-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleSearch}
                                className="absolute right-0 top-0 h-full px-4 bg-blue-500 hover:bg-blue-600 rounded-r-full"
                            >
                                🔍
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleAddProduct}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors duration-200"
                    >
                        <span className="text-xl">+</span>
                        <span className="hidden sm:inline">Add Product</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
