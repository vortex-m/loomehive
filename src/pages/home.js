import React from "react";
import LatestCollections from "../components/latestCollections";
import BestSeller from "../components/bestSeller";
import OurPolicy from "../components/ourPolicy";
import NewsLetterBox from "../components/newsLetter";
import Slider from "../components/swiper";

const Home = () => {
  return (
    <div className="lg:pb-8">
      <Slider />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
