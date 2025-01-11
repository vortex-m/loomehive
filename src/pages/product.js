import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";
import RelatedProducts from "../components/relatedProducts";

const Products = () => {
  const { productId } = useParams();
  const { products, addToCart, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [size, setSize] = useState("");

  useEffect(() => {
    const fetchProductData = () => {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setSelectedImage(product.image[0]);
      }
    };
    fetchProductData();
  }, [productId, products]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setSize(size);
  };

  // const increaseQuantity = () => {
  //   setQuantity((prev) => prev + 1);
  // };

  // const decreaseQuantity = () => {
  //   setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  // };

  if (!productData) {
    return <p>Loading...</p>;
  }

  // Get rating and review count from productData
  const { rating, review } = productData;

  return (
    <div className="container mx-auto border-t-2 pt-10">
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Image Section */}
        <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto scrollHide sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[20%] w-full">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={productData.name}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border ${
                  selectedImage === img ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={selectedImage}
              className="w-full h-auto"
              alt={productData.name}
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mb-4">{productData.name}</h1>

          {/* Rating Section */}
          <div className="flex items-center mt-2 space-x-1 text-yellow-500">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={index < rating ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
            <p className="text-xs text-gray-500 ml-2">{review} reviews</p>
          </div>

          {/* Price Section */}
          <div className="flex items-center gap-4 mt-4 mb-2">
            <span className="text-xl font-semibold text-red-500">
              {currency} {productData.price}
            </span>
            <span className="text-sm line-through text-gray-400">
              {currency} {productData.actualPrice}
            </span>
          </div>

          {/* Discriptions */}
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Description</h3>
            <p className="text-gray-500">{productData.description}</p>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Select Size</h3>
            <div className="flex gap-2">
              {productData.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => handleSizeSelection(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          {/* <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 border rounded bg-gray-200"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 border rounded bg-gray-200"
              >
                +
              </button>
            </div>
          </div> */}

          {/* Add to Cart Button */}
          <div className="flex w-1/2 gap-4">
            <button
              onClick={() => addToCart(productData._id, size)}
              className="px-6 w-full py-3 bg-gray-700 text-white rounded hover:bg-gray-500"
            >
              Add to Cart
            </button>
          </div>
          <div className="mt-6 p-4 border-t text-gray-700">
            <ul className="list-disc pl-5 space-y-2">
              <li>100% Original product.</li>
              <li>Cash on delivery is available on this product.</li>
              <li>Easy return and exchange policy within 7 days.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="mt-20">
        <div className="flex">
          {/* <div className=""> */}
          <button
            onClick={() => setActiveTab("description")}
            className={`px-4 border-2 py-2 ${
              activeTab === "description"
                ? "border-b-2 font-semibold text-black"
                : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-4 border-2 py-2 ${
              activeTab === "reviews"
                ? "border-b-2 font-semibold text-black"
                : "text-gray-500"
            }`}
          >
            Reviews ({review})
          </button>
          {/* </div> */}
        </div>
        <div className="border p-4">
          {activeTab === "description" && (
            <p className="text-gray-700">
              {productData.description || "No description available."}
            </p>
          )}
          {activeTab === "reviews" && (
            <ul className="space-y-4">
              {productData.reviews?.map((review, index) => (
                <li key={index} className="border-b pb-4">
                  <p className="font-medium">{review.user || "Anonymous"}</p>
                  <p className="text-gray-600 text-sm">
                    {review.comment || "No comment."}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Products;
