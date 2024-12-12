const RestaurantSignUp = () => {
    return (
      <div className="auth-form">
        <h2 className="form-title">Create a Restaurant Account</h2>
        <form>
          <input
            type="text"
            placeholder="Restaurant Name"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Create a password"
            className="input-field"
          />
          <button type="submit" className="primary-button">
            Sign Up
          </button>
        </form>
      </div>
    );
  };
  
  export default RestaurantSignUp;
  