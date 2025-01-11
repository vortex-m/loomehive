import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16 mb-6 min-h-scree">
      <div className="text-2xl text-start mb-4">
        <Title text1="YOUR" text2="ORDERS" />
      </div>

      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="flex border-b flex-col sm:flex-row items-center bg-white p-4 gap-6"
          >
            {/* Product Image */}
            <div className="w-full sm:w-1/4">
              <img
                src={item.image[0]}
                className="w-16 sm:w-20 object-cover rounded-md"
                alt={item.name}
              />
            </div>

            {/* Product Details */}
            <div className="w-full sm:w-3/4 flex flex-col gap-3">
              <h2 className="text-lg font-bold text-gray-700">{item.name}</h2>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <p>
                  <span className="font-semibold text-gray-600">Price: </span>
                  {currency}
                  {item.price}
                </p>
                <p>
                  <span className="font-semibold text-gray-600">
                    Quantity:{" "}
                  </span>
                  1
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Size: </span>M
                </p>
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-600">Date: </span>
                25, Jul 2025
              </p>
            </div>
            <div className="md:w-1/2 gap-4 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready To Ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
