import React from "react";
import MenuLink from "@/app/ui/MenuLink";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard/superadmin-dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/superadmin-dashboard/Users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Unverified Users",
        path: "/dashboard/superadmin-dashboard/UnverifiedUsers",
        icon: <MdShoppingBag />,
      },
      {
        title: "Verified Users",
        path: "/dashboard/superadmin-dashboard/VerifiedUsers",
        icon: <MdAttachMoney />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="flex">
      <ul className="h-screen w-64 gap-4">
        {menuItems.map((cat) => (
          <li className="h-2/5" key={cat.title}>
            <div className="mt-2">
              <span className="text-2xl my-4">{cat.title}</span>
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
