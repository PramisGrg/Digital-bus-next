import React from "react";

import Link from "next/link";
import { FaBusAlt } from "react-icons/fa";

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "SuperAdmin Login",
    link: "/superAdmin-login",
  },
  {
    title: "Admin Login",
    link: "/admin-login",
  },
];

function NavbarNew() {
  return (
    <div className="shadow-lg w-full p-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-centre justify-between h-16">
          <div className="flex items-center">
            <div className="text-3xl pr-2 pt-2">
              <FaBusAlt />
            </div>
            <a href="/" className="font-bold pt-3 text-3xl">
              सहज यात्रा
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((x, index) => (
                <Link
                  key={index}
                  href={x.link}
                  className="text-xl text-gray-700 transition-all duration-500 hover:bg-blue-600 hover:text-white mt-2 px-3 py-2 rounded-md text-md cursor-pointer"
                >
                  {x.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarNew;
