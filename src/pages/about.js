// AboutUs.jsx
import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-center text-gray-500 mb-8">
        Welcome to <span className="text-yellow-300">Loome</span>
      </h1>

      {/* Tagline Section */}
      <p className="text-2xl text-center text-white mb-10">
        Where Trend Meets Affordability!
      </p>

      {/* About Us Section */}
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Who We Are
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We are a passionate and vibrant clothing brand dedicated to empowering
          women of all ages. At
          <span className="font-semibold"> Loome</span>, we believe every girl
          deserves to look stylish and feel confident without breaking the bank.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="text-blue-500">Our mission is simple: </span> To
          provide high-quality, trendy, and budget-friendly fashion that doesn’t
          compromise on style. We carefully curate every piece of clothing to
          ensure it’s the best in comfort, fit, and fashion-forward designs.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="text-blue-500">
            {" "}
            Our founder’s vision was clear:{" "}
          </span>{" "}
          To provide a fashion venture that blends tradition with trend. At
          Loome, we nurture and embrace your femininity, offering you a
          collection that speaks to your unique style, comfort, and confidence.
        </p>

        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Trust Us?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            We are committed to making you look and feel your best. Our
            collections are crafted with care, and we offer affordable prices
            because we believe every girl should have access to the latest
            trends, without compromising on quality.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Shop Now & Embrace Your Style
          </Link>
        </div>
      </div>

      {/* Trust Section */}
      <div className="mt-12 text-center max-w-4xl text-gray-500">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Affordable Prices
            </h3>
            <p className="text-gray-700">
              Get the best deals on trendy clothing without exceeding your
              budget. Stylish fashion for every occasion!
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Premium Quality
            </h3>
            <p className="text-gray-700">
              Our clothes are made with high-quality fabrics that ensure
              durability and comfort. Style that lasts!
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Customer Satisfaction
            </h3>
            <p className="text-gray-700">
              We prioritize your happiness. Experience great customer service,
              hassle-free returns, and timely delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
