import React, { Children } from "react";
import MenuLink from "@/app/ui/MenuLink";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdWork,
  MdAnalytics,
} from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { GiBus } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard/admin-dashboard",
        icon: <MdDashboard className=" w-5 h-6" />,
      },
      {
        title: "Users",
        path: "/dashboard/admin-dashboard/users",
        icon: <MdSupervisedUserCircle className=" w-5 h-6" />,
      },
      {
        title: "Bus",
        path: "/dashboard/admin-dashboard/Bus",
        icon: <FaBus className=" w-5 h-6" />,
      },
      {
        title: "Bus Registration",
        path: "/dashboard/admin-dashboard/BusRegistration",
        icon: <GiBus className=" w-5 h-6" />,
      },
      {
        title: "Bus Location ",
        path: "/dashboard/admin-dashboard/BusLocation",
        icon: <IoLocationOutline className=" w-5 h-6" />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/admin-dashboard/revenue",
        icon: <MdWork className=" w-5 h-6" />,
      },
      {
        title: "Reports",
        path: "/dashboard/admin-dashboard/reporting",
        icon: <MdAnalytics className=" w-5 h-6" />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="flex">
      <ul className="h-screen w-64 gap-4">
        {menuItems.map((cat) => (
          <li className="text-white h-2/5" key={cat.title}>
            <div className="mt-2">
              <span className="text-3xl font-bold my-4">{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink className="gap-2" item={item} key={item.title} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
