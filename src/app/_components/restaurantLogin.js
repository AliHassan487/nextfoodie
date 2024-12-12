const RestaurantLogin = () => {
    return (
      <div className="auth-form">
        <h2 className="form-title">Log in to Your Account</h2>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field"
          />
          <button type="submit" className="primary-button">
            Log In
          </button>
        </form>
      </div>
    );
  };
  
  export default RestaurantLogin;
  