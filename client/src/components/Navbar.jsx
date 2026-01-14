 
const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Side - Logo and Platform Name */}
          <div className="flex items-center gap-3">
            <img  
              src="./shoplogo.jpg" 
              alt="Logo"  
            
              className="h-10 w-10 object-contain rounded-lg"
            />
            <h1 className="text-2xl font-semibold">MyPlatform</h1>
          </div>

          {/* Right Side - Search Box */}
          <div className="flex items-center">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..."  
                className="w-64 md:w-80 px-4 py-2 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
 
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-blue-500 hover:bg-blue-600 rounded-r-full">
                🔍
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;