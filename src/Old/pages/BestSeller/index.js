import React from "react";
import Cards from "../../components/Cards";
import Products from "../../utils/products.json";

function BestSeller() {
  const bestSellerProducts = Products.filter(
    (product) => product.type["best-seller"]
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Best Seller</h2>
      <div>
        <Cards Products={bestSellerProducts} />
      </div>
    </div>
  );
}

export default BestSeller;
