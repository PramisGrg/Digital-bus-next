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
        path: "/dashboard/user",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/user/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/user/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/user/transactions",
        icon: <MdAttachMoney />,
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
