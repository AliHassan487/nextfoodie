const RestaurantFooter = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="/about"
                  className="hover:text-green-500 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="hover:text-green-500 transition duration-300"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-green-500 transition duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Legal</h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="/terms"
                  className="hover:text-green-500 transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-green-500 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="hover:text-green-500 transition duration-300"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Follow Us</h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:text-green-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="hover:text-green-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-green-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-4">
              Contact Info
            </h5>
            <ul className="space-y-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@restaurant.com"
                  className="hover:text-green-500"
                >
                  support@restaurant.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+123456789" className="hover:text-green-500">
                  +123 456 789
                </a>
              </li>
              <li>Address: 123 Restaurant St, Food City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <a
              href="/terms"
              className="text-sm text-gray-400 hover:text-green-500"
            >
              Terms of Service
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-green-500"
            >
              Privacy Policy
            </a>
          </div>

          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Restaurant Portal. All Rights Reserved.
          </p>
          {/* <p className="text-center text-sm text-gray-400 mt-2">
              Designed with 💖 by Your Company Name.
            </p> */}
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;
