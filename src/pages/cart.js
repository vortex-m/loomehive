import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/cartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div className="border-t pt-10 px-4 sm:px-10 min-h-screen">
      <div className="text-3xl font-bold mb-6 text-gray-800">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {cartData.length === 0 ? (
        <div className="text-center justify-center items-center flex flex-col text-gray-500 mt-10">
          <p>Your cart is empty!</p>
          <p className="mt-2 text-sm">
            Browse our products and add your favorites to the cart.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            if (!productData) return null;

            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center bg-white p-4 shadow-md rounded-lg gap-6"
              >
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img
                    src={productData.image[0]}
                    className="w-24 h-24 object-cover rounded-md border"
                    alt={productData.name}
                  />
                </div>

                {/* Product Details */}
                <div className="flex-grow">
                  <p className="text-lg font-medium text-gray-800">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-6 mt-2 text-gray-600">
                    <p className="text-sm">
                      Price:{" "}
                      <span className="font-semibold">
                        {currency}
                        {productData.price}
                      </span>
                    </p>
                    <p className="text-sm">
                      Size: <span className="font-semibold">{item.size}</span>
                    </p>
                  </div>
                </div>

                {/* Quantity and Actions */}
                <div className="flex items-center gap-4">
                  <input
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(item._id, item.size, e.target.value)
                    }
                    type="number"
                    value={item.quantity}
                    className="w-16 p-2 border border-gray-300 rounded-md text-center"
                    min="1"
                  />
                  <button
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-150"
                  >
                    <img
                      src={assets.bin_icon}
                      className="w-5 h-5"
                      alt="Remove Item"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Cart Total */}
      {cartData.length > 0 ? (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end mt-2">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white text-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
