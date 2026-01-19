 

const ProductSkeleton = () => {
  return (
    <div className="p-4 border rounded-lg shadow animate-pulse bg-gray-100">
      {/* Image placeholder */}
      <div className="h-40 bg-gray-300 mb-4 rounded"></div>
      {/* Title placeholder */}
      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
      {/* Price placeholder */}
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default ProductSkeleton;
