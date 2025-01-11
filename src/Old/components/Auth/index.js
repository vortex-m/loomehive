import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Shield from "../../assets/logo/shield.png";
import backgroundFrame from "../../assets/Background/background-frame.svg";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);

  return (
    <div
      className="flex justify-center items-center h-screen "
      style={{
        backgroundImage: `url(${backgroundFrame})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-[32vw]">
        <img
          src={forgotPass ? Shield : null}
          alt="Logo"
          className="mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-start mb-3">
          {isSignUp ? "Sign Up" : forgotPass ? "Forgot Password" : "Sign In"}
        </h2>
        <form>
          {/* Forgot Password Screen */}
          {forgotPass ? (
            <>
              <div className="mb-4">
                <TextField
                  type="email"
                  id="email"
                  className="w-full"
                  label="Enter your email to reset password"
                  variant="standard"
                  required
                />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
                >
                  Reset Password
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Sign In / Sign Up Form */}
              {!isSignUp && (
                <>
                  <div className="mb-4">
                    <TextField
                      type="email"
                      id="email"
                      className="w-full"
                      label="Enter your email"
                      variant="standard"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <TextField
                      type="password"
                      id="password"
                      className="w-full"
                      label="Enter your password"
                      variant="standard"
                      required
                    />
                  </div>
                  <button
                    className="mb-4 relative group"
                    onClick={() => setForgotPass(true)}
                  >
                    <p className="text-purple-500">
                      Forgot Password
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </p>
                  </button>

                  <div className="flex items-center gap-4 mb-3">
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
                    >
                      {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigate("/");
                      }}
                      className="w-full bg-gray-300 py-2 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
              {isSignUp && (
                <>
                  <div className="flex justify-between gap-2 items-center">
                    <div className="mb-4">
                      <TextField
                        type="text"
                        id="name"
                        className="w-full"
                        label="Enter your name"
                        variant="standard"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <TextField
                        type="password"
                        id="phone"
                        className="w-full"
                        label="Your phone number"
                        variant="standard"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <TextField
                      type="email"
                      id="email"
                      className="w-full"
                      label="Enter your email"
                      variant="standard"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <TextField
                      type="password"
                      id="password"
                      className="w-full"
                      label="Enter your password"
                      variant="standard"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
                    >
                      {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                  </div>
                </>
              )}
            </>
          )}

          <div className="text-center mb-4">
            <p>
              {isSignUp ? "Already have an account?" : "Not Registered?"}{" "}
              <button
                type="button"
                className="text-purple-500 relative group"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </p>
          </div>
          {!forgotPass && (
            <div className="text-center">
              <p className="mb-1 text-lg text-gray-900 font-bold">
                Or continue with social account
              </p>
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 py-2 rounded hover:bg-gray-100"
              >
                <FaGoogle className="text-xl text-blue-500" />
                Sign In With Google
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Auth;
