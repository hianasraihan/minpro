"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserProfile = () => {
  const pathname = usePathname();

  const menu = [
    { name: "Transaksi Event", path: "/transaksi-event" },
    { name: "Transaksi Atraksi", path: "/transaksi-atraksi" },
    { name: "Atur Kata Sandi", path: "/ganti-password" },
    { name: "Wishlist", path: "/wishlist" },
  ];

  return (

      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Pengaturan Akun
        </h1>

        <form className="space-y-5 max-w-2xl">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Alamat Email
            </label>
            <input
              type="email"
              defaultValue="hianasraihan@gmail.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Nama Depan
            </label>
            <input
              type="text"
              defaultValue="anas"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Nama Belakang
            </label>
            <input
              type="text"
              defaultValue="raihan"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Tanggal Lahir
            </label>
            <input
              type="date"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Jenis Kelamin
            </label>
            <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md">
              <option>Perempuan</option>
              <option>Laki-laki</option>
              <option>Lainnya</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Negara
            </label>
            <input
              type="text"
              defaultValue="Indonesia"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </form>
      </main>

  );
};

export default UserProfile;
