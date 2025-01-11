import { useParams } from "react-router-dom";
import { useState } from "react";
import Products from "../../../utils/products.json";
import { FaShoppingCart } from "react-icons/fa";
import MoreDetails from "./Pages/MoreDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const product = Products.find((product) => product.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    "https://via.placeholder.com/150?text=Small+1"
  );

  const smallImages = [
    "https://via.placeholder.com/150?text=Small+1",
    "https://via.placeholder.com/150?text=Small+2",
    "https://via.placeholder.com/150?text=Small+3",
  ];

  const handleMouseOver = (imageUrl) => setMainImage(imageUrl);

  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => alert("Added to cart");

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side - Product Image */}
        <div className="sticky top-20">
          <div className="overflow-hidden">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-[90%] rounded-lg h-[65vh] object-cover"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {smallImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 border rounded cursor-pointer ${
                  mainImage === image ? "border-blue-500" : "border-gray-300"
                }`}
                onMouseOver={() => handleMouseOver(image)}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="overflow-y-auto scrollHide max-h-[120vh]">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center mt-2">
            <p className="text-sm text-gray-600">
              Brand: <span className="font-medium">{product.brand}</span>
            </p>
            <div className="ml-4 flex items-center">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-lg ${
                    index < product.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center">
            {product.price.regular && (
              <p className="text-sm line-through text-gray-500">
                ₹{product.price.regular}
              </p>
            )}
            <p className="text-xl font-bold text-gray-800 ml-2">
              ₹{product.price.sale}
            </p>
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

          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-4 gap-3 flex items-center">
            <h3 className="text-sm font-semibold text-gray-600">
              Select Size:
            </h3>
            <div className="flex gap-3">
              {product.sizes.map((sizeObj, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded ${
                    sizeObj.availability === "in stock"
                      ? "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200"
                      : "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                  }`}
                  disabled={sizeObj.availability !== "in stock"}
                >
                  {sizeObj.size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-[5vh] gap-4 flex items-center">
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handleDecrease}
                className="px-6 py-3 bg-gray-200 rounded-full border border-gray-300 text-gray-800 text-2xl font-bold hover:bg-gray-300 disabled:bg-gray-100"
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="px-6 py-3 text-2xl font-bold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-6 py-3 bg-gray-200 rounded-full border border-gray-300 text-gray-800 text-2xl font-bold hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <div className="flex-1">
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white font-bold rounded-full text-lg hover:bg-blue-700"
              >
                <FaShoppingCart className="text-xl" />
                Add to Cart
              </button>
            </div>
          </div>

          <div className="h-[120vh]">hey</div>
        </div>
      </div>
      {/* <div className="mt-10"><MoreDetails productId={id} /></div> */}
    </div>
  );
};

export default ProductDetails;
