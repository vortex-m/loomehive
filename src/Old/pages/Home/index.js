import React from "react";
import Products from "../../utils/products.json";
import Cards from "../../components/Cards";
import SecondCards from "../../components/SecondCard";
import Slider from "./Parts/Slider";

const SliderData = [
  {
    image:
      "https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.jpg?s=612x612&w=0&k=20&c=UzOoNF1-F6pR5uSu6mTqnPAYR4eg6paDy4FKfhYVInU=",
    title: "First Slide",
  },
  {
    image:
      "https://media.istockphoto.com/id/1324844508/photo/gorgeous-woman-wearing-beautiful-maxi-dress-posing-against-wall-with-a-wild-grape.jpg?s=612x612&w=0&k=20&c=BJrcuLt0m5Hm6zOhgO-E0TGqIxzWKdecgw1xcOu1aN4=",
    title: "Second Slide",
  },
  {
    image:
      "https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s=",
    title: "Third Slide",
  },
  {
    image:
      "https://media.istockphoto.com/id/854321536/photo/look-at-this-gorgeous-dress.jpg?s=612x612&w=0&k=20&c=UyxEiEddYEFQPAoopwYs-_8xJ5vp0vKE0Sl3GnrQpK8= ",
    title: "Third Slide",
  },
];

const Home = () => {
  const bestSeller = Products.filter((product) => product.type["new-arrival"]);
  return (
    <div>
      <Slider items={SliderData} />
      <div className="mt-8 mb-8 w-full">
        <h1 className="text-3xl mb-3 font-bold text-center">
          Best Offer in Sale
        </h1>
        <div>
          <SecondCards Products={bestSeller} />
        </div>
      </div>
      <div className="mt-8 mb-8 w-full flex flex-col items-center">
        <h1 className="text-3xl mb-10 font-bold text-center">All Category</h1>
        <Cards Products={Products} />
      </div>
    </div>
  );
};

export default Home;
