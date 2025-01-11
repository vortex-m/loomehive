import React from "react";
import Cards from "../../components/Cards";
import Products from "../../utils/products.json";

function NewArrival() {
  const newArrivalProducts = Products.filter(
    (product) => product.type["new-arrival"]
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
      <div>
        <Cards Products={newArrivalProducts} />
      </div>
    </div>
  );
}

export default NewArrival;
