import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/title";
import ProductItems from "../components/productItem";

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilteredProducts(productCopy);
  };

  const sortProducts = (e) => {
    let fbCopy = filteredProducts.slice();

    switch (sortType) {
      case "relavent":
        setFilteredProducts(fbCopy);
        break;
      case "low-high":
        setFilteredProducts(fbCopy.sort((a, b) => a.price.sale - b.price.sale));
        break;
      case "high-low":
        setFilteredProducts(fbCopy.sort((a, b) => b.price.sale - a.price.sale));
        break;
      default:
        setFilteredProducts(fbCopy);
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  return (
    <div className="flex lg:pb-8 flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* {Filter Optiong} */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATAGORYS</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3"
                value={"Men"}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3"
                value={"Women"}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3"
                value={"Kids"}
              />
              Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="w-3"
                value={"Topwear"}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="w-3"
                value={"Bottomwear"}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="w-3"
                value={"Winter"}
              />{" "}
              Winter
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
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
    </div>
  );
};

export default Collections;
