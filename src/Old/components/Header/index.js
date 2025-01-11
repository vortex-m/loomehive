// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FaShoppingBag, FaUser } from "react-icons/fa";
// import { Button } from "@mui/material";

// const Header = () => {
//   const [loggedIn] = useState(false);

//   return (
//     <header className="w-full text-white shadow-lg">
//       <div className="bg-[#1e4258] py-1">
//         <div className="container mx-auto flex justify-center">
//           <p className="text-sm md:text-base font-medium tracking-wide">
//             COD AVAILABLE | SHIPPING FREE OVER ₹4000 🎉
//           </p>
//         </div>
//       </div>

//       <nav className="w-full bg-white shadow-sm">
//         <div className="container mx-auto flex items-center justify-between px-6 py-3 relative">
//           <Link to="/" className="flex items-center">
//             <img src="" alt="Logo" className="h-8 w-auto text-black" />
//           </Link>

//           <div className="flex items-center space-x-8 ml-[5vw]">
//             <Link
//               to="/"
//               className="text-gray-700 hover:text-black hover:underline   transition duration-300 ease-in-out"
//             >
//               Home
//             </Link>
//             <Link
//               to="/new-arrivals"
//               className="text-gray-700 hover:text-black hover:underline   transition duration-300 ease-in-out"
//             >
//               New Arrivals
//             </Link>
//             <Link
//               to="/best-sellers"
//               className="text-gray-700 hover:text-black hover:underline   transition duration-300 ease-in-out"
//             >
//               Best Sellers
//             </Link>
//             <Link
//               to="/sale"
//               className="text-gray-700 hover:text-black hover:underline   transition duration-300 ease-in-out"
//             >
//               Sale
//             </Link>
//           </div>

//           <div className="flex items-center space-x-6">
//             <Link
//               to="/cart"
//               className="relative text-gray-700 hover:text-gray-900"
//             >
//               <FaShoppingBag className="text-lg" size={24} />
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
//                 2
//               </span>
//             </Link>

//             {loggedIn ? (
//               <Link to="/account" className="text-gray-700 hover:text-gray-900">
//                 <FaUser className="text-lg" size={24} />
//               </Link>
//             ) : (
//               <Button
//                 component={Link}
//                 to="/login"
//                 variant="outlined"
//                 sx={{
//                   borderColor: "blue.700",
//                   color: "gray.700",
//                   transition: "all 0.3s ease-in-out",
//                   "&:hover": {
//                     backgroundColor: "gray.300",
//                     color: "blue.700",
//                     borderColor: "blue.700",
//                   },
//                 }}
//               >
//                 LogIn
//               </Button>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { Button } from "@mui/material";

const Header = () => {
  const [loggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="bg-[#1e4258] py-1">
        <div className="container mx-auto flex justify-center">
          <p className="text-sm text-white md:text-base font-medium tracking-wide">
            COD AVAILABLE | SHIPPING FREE OVER ₹4000 🎉
          </p>
        </div>
      </div>

      <nav
        className={`w-full bg-white shadow-md transition-all duration-300 ${
          scrolled ? " shadow-xl z-10 fixed py- top-0" : " py-1"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-3 relative">
          <Link to="/" className="flex items-center">
            <img src="" alt="Logo" className="h-8 w-auto text-black" />
          </Link>

          <div className="flex items-center space-x-8 ml-[5vw]">
            <Link
              to="/"
              className="text-gray-700 hover:text-black hover:underline transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/new-arrivals"
              className="text-gray-700 hover:text-black hover:underline transition duration-300 ease-in-out"
            >
              New Arrivals
            </Link>
            <Link
              to="/best-sellers"
              className="text-gray-700 hover:text-black hover:underline transition duration-300 ease-in-out"
            >
              Best Sellers
            </Link>
            <Link
              to="/sale"
              className="text-gray-700 hover:text-black hover:underline transition duration-300 ease-in-out"
            >
              Sale
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-gray-900"
            >
              <FaShoppingBag className="text-lg" size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                2
              </span>
            </Link>

            {loggedIn ? (
              <Link to="/account" className="text-gray-700 hover:text-gray-900">
                <FaUser className="text-lg" size={24} />
              </Link>
            ) : (
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                sx={{
                  borderColor: "blue.700",
                  color: "gray.700",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "gray.300",
                    color: "blue.700",
                    borderColor: "blue.700",
                  },
                }}
              >
                LogIn
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
