"use client";
import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <header className="bg-black text-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wider">Restaurant Portal</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-indigo-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-indigo-500 transition">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-indigo-500 transition">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default RestaurantHeader;
