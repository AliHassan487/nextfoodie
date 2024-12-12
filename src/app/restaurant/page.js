"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="restaurant-page">
      <div className="form-container">
        <h1 className="page-title">Restaurant Portal</h1>
        <div className="form-card">
          {isLogin ? <RestaurantLogin /> : <RestaurantSignUp />}
          <button className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
