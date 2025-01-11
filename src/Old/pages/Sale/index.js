import React from "react";
import Cards from "../../components/Cards";
import Products from "../../../utils/products.json";

function Sale() {
  const saleProducts = Products.filter((product) => product.type["sale"]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Sale</h2>
      <div>
        <Cards Products={saleProducts} />
      </div>
    </div>
  );
}

export default Sale;
