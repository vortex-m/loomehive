import React, { useState } from "react";
import Products from "../../../../utils/products.json";
import SizeChart from "../../../assets/Background/sizeChart.webp";

const MoreDetails = ({ productId }) => {
  const [activeTab, setActiveTab] = useState("description");
  const product = Products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) return <div>Product not found</div>;

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional-info", label: "Additional Info" },
    { id: "reviews", label: "Reviews (1)" },
  ];

  return (
    <div className="p-6 bg-purple-50 rounded-lg">
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full font-medium text-sm ${
              activeTab === tab.id
                ? "bg-purple-600 text-white"
                : "bg-purple-100 text-purple-600"
            } transition-all`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 bg-purple-100 rounded-lg">
        {activeTab === "description" && (
          <p className="text-sm text-gray-700">{product.description}</p>
        )}

        {activeTab === "additional-info" && (
          <div>
            <table className="min-w-full table-auto text-sm text-gray-700">
              <thead>
                <tr className="bg-purple-200">
                  <th className="py-2 px-4 text-left">Attribute</th>
                  <th className="py-2 px-4 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product["additional_info"]).map(
                  ([key, value]) => (
                    <tr key={key}>
                      <td className="py-2 px-4 border-b">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </td>
                      <td className="py-2 px-4 border-b">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <div>
              <h2>Size</h2>
              <img src={SizeChart} className="w-[30vw] " alt="" />
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <p className="text-sm text-gray-700">{product.reviews}</p>
        )}
      </div>
    </div>
  );
};

export default MoreDetails;
