import { useLocation, useNavigate } from "react-router-dom";
import { useProductContext } from "../contextApi/useProductContext";

const Navbar = () => {
  const { state, dispatch } = useProductContext();
  const navigate = useNavigate();
  const location = useLocation();
  const showBtn = location.pathname.startsWith("/add-product");
  
 
  const toggleMobileMenu = () => {
    dispatch({ type: "SET_MOBILEOPEN", payload: !state.isMobileMenuOpen });
  };

  return (
    <nav className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo */}
          <div className="flex items-center gap-3">
            <img
              src="./shoplogo.jpg"
              alt="Logo"
              className="h-10 w-10 object-contain rounded-lg"
            />
            <h1 className="text-2xl font-semibold">MyPlatform</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <select
              value={state.category}
              onChange={(e) =>
                dispatch({ type: "SET_CATEGORY", payload: e.target.value })
              }
              className="px-3 py-2 rounded bg-slate-700 text-white focus:outline-none"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="audio">Audio</option>
              <option value="furniture">Furniture</option>
              <option value="accessories">Accessories</option>
            </select>

            <select
              value={state.sort}
              onChange={(e) =>
                dispatch({ type: "SET_SORT", payload: e.target.value })
              }
              className="px-3 py-2 rounded bg-slate-700 text-white focus:outline-none"
            >
              <option value="">Sort</option>
              <option value="price_asc">Price: Low → High</option>
              <option value="price_desc">Price: High → Low</option>
            </select>

            <input
              value={state.keyword}
              onChange={(e) =>
                dispatch({ type: "SET_KEYWORD", payload: e.target.value })
              }
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          { !showBtn ?  <button
              onClick={() => navigate("/add-product")}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors duration-200"
            >
              <span className="text-xl">+</span>
              <span className="hidden sm:inline">Add Product</span>
            </button> :
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors duration-200"
            >
             
              <span>Back to Home</span>
            </button> }
          
          </div>
              
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {state.isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {state.isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 pb-4 bg-slate-800 rounded-lg shadow-md">
            <select
              value={state.category}
              onChange={(e) =>
                dispatch({ type: "SET_CATEGORY", payload: e.target.value })
              }
              className="w-full px-3 py-2 rounded bg-slate-700 text-white focus:outline-none"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="audio">Audio</option>
              <option value="furniture">Furniture</option>
              <option value="accessories">Accessories</option>
            </select>

            <select
              value={state.sort}
              onChange={(e) =>
                dispatch({ type: "SET_SORT", payload: e.target.value })
              }
              className="w-full px-3 py-2 rounded bg-slate-700 text-white focus:outline-none"
            >
              <option value="">Sort</option>
              <option value="price_asc">Price: Low → High</option>
              <option value="price_desc">Price: High → Low</option>
            </select>

            <input
              value={state.keyword}
              onChange={(e) =>
                dispatch({ type: "SET_KEYWORD", payload: e.target.value })
              }
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

           { !showBtn ? <button
              onClick={() => navigate("/add-product")}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors duration-200"
            >
              <span className="text-xl">+</span>
              <span>Add Product</span>
            </button> :<button
              onClick={() => navigate("/")}
             className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors duration-200"
             >
             
              <span>Back to Home</span>
            </button> }

         
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
