import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./title";
import ProductItems from "./productItem";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  //   console.log(products);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our latest collections featuring trendsetting styles, timeless
          classics, and curated designs to elevate your wardrobe for every
          occasion.
        </p>
      </div>
      {/* Rendring Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            review={item.review}
            rating={item.rating}
            offerPrice={item.salePrice}
            actualPrice={item.actualPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
