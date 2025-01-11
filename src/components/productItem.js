import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";

const ProductItems = ({
  id,
  image,
  name,
  review,
  rating, 
  offerPrice,
  actualPrice,
}) => {
  const { currency } = useContext(ShopContext);

//   console.log(id);

  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-700 cursor-pointer border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-lg bg-gray-100">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-52 object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold truncate">{name}</h3>

        <div className="mt-2">
          <p className="text-red-600 font-bold">
            {currency}
            {offerPrice}
          </p>
          <p className="text-sm text-gray-500 line-through">
            {currency}
            {actualPrice}
          </p>
        </div>

        <div className="flex items-center mt-2 space-x-1 text-yellow-500">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={index < rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <p className="text-xs text-gray-500 ml-2">({review})</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItems;
