import React from "react";
import MenuLink from "@/app/ui/MenuLink";

import { MdDashboard, MdAttachMoney, MdLogout } from "react-icons/md";
import { FaLocationDot, FaMoneyCheckDollar } from "react-icons/fa6";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard/user-dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Location",
        path: "/dashboard/user-dashboard/location ",
        icon: <FaLocationDot />,
      },
      {
        title: "Payment",
        path: "/dashboard/user-dashboard/payment",
        icon: <MdAttachMoney />,
      },
      {
        title: "Transaction",
        path: "/dashboard/user-dashboard/Transaction",
        icon: <FaMoneyCheckDollar />,
      },
      {
        title: "Log out",
        path: "/dashboard/user-dashboard/Logout",
        icon: <MdLogout />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="flex">
      <ul className="h-screen w-64 gap-4">
        {menuItems.map((cat) => (
          <li className="text-white h-2/5 mt-10" key={cat.title}>
            <div className="mt-8">
              <span className="mt-36 text-white text-3xl font-bold  my-4">
                {cat.title}
              </span>
              {cat.list.map((item) => (
                <MenuLink className="gap-4" item={item} key={item.title} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
