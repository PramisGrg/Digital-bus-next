import React from "react";
import MenuLink from "@/app/ui/MenuLink";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
} from "react-icons/md";

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
        title: "Products",
        path: "/dashboard/admin-dashboard/products",
        icon: <MdShoppingBag className=" w-5 h-6" />,
      },
      {
        title: "Transactions",
        path: "/dashboard/admin-dashboard/transactions",
        icon: <MdAttachMoney className=" w-5 h-6" />,
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

const page = () => {
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

export default page;
