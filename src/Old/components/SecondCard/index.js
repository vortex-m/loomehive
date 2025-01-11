import React from "react";
import { Link } from "react-router-dom";

const SecondCards = ({ Products }) => {
  return (
    <div className="flex max-w-[87.4%]   p-4 py-7 scrollHide mx-auto overflow-x-scroll items-center gap-6">
      {Products.map((product) => (
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
                    {product.price && product.price.regular && (
                      <p className="text-sm text-gray-500 line-through">
                        ₹{product.price.regular}
                      </p>
                    )}
                    {product.price && product.price.sale && (
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
  );
};

export default SecondCards;
