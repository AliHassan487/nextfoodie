"use client";
import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Restaurant Portal</h1>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/" className="hover:text-indigo-400 transition">
            Home
          </Link>
          <Link href="/menu" className="hover:text-indigo-400 transition">
            Menu
          </Link>
          <Link href="/contact" className="hover:text-indigo-400 transition">
            Contact
          </Link>
          <Link href="/login" className="hover:text-indigo-400 transition">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default RestaurantHeader;
