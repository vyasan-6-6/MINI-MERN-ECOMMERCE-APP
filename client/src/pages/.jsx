import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-3">
        Something went wrong
      </h2>

      <p className="text-gray-700 mb-4">
        {error.message}
      </p>

      <button
        onClick={resetErrorBoundary}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
