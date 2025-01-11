import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Slide 1",
      image:
        "https://graphicsfamily.com/wp-content/uploads/edd/2023/12/Fashion-Web-Banner-Design-scaled.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://www.shutterstock.com/image-photo/website-header-fashionable-couple-looking-260nw-1785066224.jpg",
    },
    {
      title: "Slide 3",
      image:
        "https://www.shutterstock.com/image-photo/collage-fashionable-couple-red-blazers-260nw-1785059336.jpg   ",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative container mx-auto mt-4 rounded-xl h-[25vh] lg:h-[50vh] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: "100%" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-fill h-[25vh] lg:h-[55vh] object-cove"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
