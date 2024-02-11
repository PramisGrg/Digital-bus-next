"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <div className="my-4">
      <Link href={item.path} className={`${pathname === item.path}`}>
        <div className="flex hover:bg-blue-300 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-500 gap-2">
          {item.icon}
          {item.title}
        </div>
      </Link>
    </div>
  );
};

export default MenuLink;
