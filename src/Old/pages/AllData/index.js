import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "../../utils/products.json"; // Importing the product list

const AllData = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Initially sort products by price (low to high)
    const sortedProducts = [...Product].sort((a, b) => {
      // Ensure we handle missing price.sale values
      const priceA = a.price?.sale || 0; // Use 0 if sale price is not available
      const priceB = b.price?.sale || 0; // Use 0 if sale price is not available
      return priceA - priceB;
    });
    setFilteredProducts(sortedProducts);
  }, []);

  const filterByPrice = (criteria) => {
    const sortedProducts = [...filteredProducts];

    // Check the criteria and sort accordingly
    if (criteria === "lowToHigh") {
      sortedProducts.sort((a, b) => {
        const priceA = a.price?.sale || 0;
        const priceB = b.price?.sale || 0;
        return priceA - priceB;
      });
    } else if (criteria === "highToLow") {
      sortedProducts.sort((a, b) => {
        const priceA = a.price?.sale || 0;
        const priceB = b.price?.sale || 0;
        return priceB - priceA;
      });
    }

    // Debug: log sorted products
    console.log("Sorted Products by price:", sortedProducts);

    // Update state with sorted products
    setFilteredProducts(sortedProducts);
  };

  const resetFilters = () => {
    setFilteredProducts([...Product]); // Reset to original product list
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Products</h2>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => filterByPrice("lowToHigh")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Price: Low to High
        </button>
        <button
          onClick={() => filterByPrice("highToLow")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Price: High to Low
        </button>
        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
        >
          Reset Filters
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 items-center gap-6">
        {filteredProducts.map((product) => (
          <div
            className="flex justify-center items-center flex-wrap gap-6"
            key={product.id}
          >
            <Link to={`/details/product/${product.id}`}>
              <div className="w-[20vw] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[40vh] object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 truncate">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`${
                          index < product.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        } text-sm`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-2 items-center">
                      {product.price?.regular && (
                        <p className="text-sm text-gray-500 line-through">
                          ₹{product.price.regular}
                        </p>
                      )}
                      {product.price?.sale && (
                        <p className="text-lg font-semibold text-gray-800">
                          ₹{product.price.sale}
                        </p>
                      )}
                      {product.discountPercentage && (
                        <p className="text-sm text-green-500">
                          {product.discountPercentage}% Off
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${
                      product.in_stock
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.in_stock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllData;
