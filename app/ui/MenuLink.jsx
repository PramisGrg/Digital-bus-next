"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <div className="my-4">
      <Link href={item.path} className={`${pathname === item.path}`}>
        <div className="flex hover:bg-[#2d5c87] transition: duration-100 font-bold py-2 px-4 mt-3 rounded items-center my-2  gap-2 pl-6">
          {item.icon}
          {item.title}
        </div>
      </Link>
    </div>
  );
};

export default MenuLink;
