import { useProductContext } from "../contextApi/useProductContext";
import Pagination from "../components/Pagination";
import ProductSkeleton from "../components/SkeletonLoading";

const ProductPage = () => {
    const { error, products, loading, fetchProducts } = useProductContext();

  if (loading) {
    // Show 8 skeleton cards
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <ProductSkeleton key={idx} />
        ))}
      </div>
    );
  }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto mt-10 p-6">
                <div className="bg-red-100 text-red-700 p-4 rounded-lg">{error}</div>
            </div>
        );
    }
    return (
        <>
            <div
                className="max-w-7xl mx-auto px-4 overflow-x-hidden
"
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">Products</h2>
                </div>
                {products.length === 0 ? (
                    <div className="text-center py-10">
                        <p className="text-gray-600 text-xl">No products found</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product._id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
                                {product.image ? (
                                    <img
                                        src={product.image.startsWith("http") ? product.image:`http://localhost:5000${product.image}`}
                                        className="w-full h-40 object-cover rounded-t-lg"
                                        alt={product.name}
                                    />
                                ) : (
                                    <div className="h-40 bg-gray-200 flex items-center justify-center text-3xl">📦</div>
                                )}

                                <div className="p-4">
                                    <h3 className="font-bold text-lg">{product.name}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>

                                    <div className="mt-2 flex justify-between items-center">
                                        <span className="font-bold text-blue-600">${product.price}</span>
                                        <span className="text-sm text-gray-500">
                                            {" "}
                                            ⭐ {product.rating ?? 0} · {product.numReviews ?? 0} reviews
                                        </span>
                                    </div>

                                    <div className="flex justify-between mt-4 text-sm">
                                        <span to={`/products/${product._id}`} className="text-green-600">
                                            View
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex justify-center my-5">
                    <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto">
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
