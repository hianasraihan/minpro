"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserDashboardLayout = ({children}:{children:React.ReactNode}) => {
  const pathname = usePathname();

  const menu = [
    { name: "Transaksi Event", path: "/dashboard/trans-event" },
    { name: "Transaksi Atraksi", path: "/dashboard/trans-attraction" },
    { name: "Atur Kata Sandi", path: "/dashboard/settings" },
    { name: "Wishlist", path: "/dashboard/wishlist" },
  ];

  return (
    <div className="mt-35 min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Hai, Anas Raihan</h2>
        <nav className="space-y-4 text-sm">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-3 py-2 rounded-md ${
                pathname === item.path
                  ? "bg-indigo-100 text-indigo-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Form Akun */}
      {children}
    </div>
  );
};
export default UserDashboardLayout;