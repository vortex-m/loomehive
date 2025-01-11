import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1e4258] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/about-us" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-gray-300 hover:text-white"
                >
                 Terms and Conditions
                </a>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Policies</h3>
            <ul>
              
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="text-gray-300 hover:text-white"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="/shipping-policy"
                  className="text-gray-300 hover:text-white"
                >
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Address: Kharar Road, Mohali, Punjab, India
            </p>
            <p className="text-gray-300">Contact No: (+91) 8521977355</p>
            <p className="text-gray-300">
              Email:{" "}
              <a
                href="mailto:help.srinka@gmail.com"
                className="text-blue-400 hover:text-white"
              >
                help.srinka@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-400">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
