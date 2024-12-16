"use client";

import { useState } from "react";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";
import RestaurantFooter from "../_components/RestaurantFooter";

const Restaurant = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* Header */}
      <RestaurantHeader />

      {/* Main Section */}
      <main className="flex flex-col items-center justify-start min-h-screen bg-black text-white pt-20 pb-10">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            Welcome to Restaurant Portal
          </h1>

          {/* Render Login or Signup Form */}
          {isLogin ? <RestaurantLogin /> : <RestaurantSignUp />}

          {/* Toggle Between Login and Signup */}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md transition"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Log In"}
          </button>
        </div>
      </main>

      {/* Footer */}
      <RestaurantFooter />
    </>
  );
};

export default Restaurant;
