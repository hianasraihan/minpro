"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface WishlistItem {
  id: string;
  title: string;
  poster: string;
  type: "Event" | "Attraction";
}

const initialWishlist: WishlistItem[] = [
  {
    id: "1",
    title: "We The Fest 2025",
    poster: "/wtf.jpg",
    type: "Event",
  },
  {
    id: "7",
    title: "Universal Studios Singapore",
    poster: "/unv.jpg",
    type: "Attraction",
  },
  {
    id: "12",
    title: "Tari Kecak Bali",
    poster: "/Tari-kecak.jpg",
    type: "Attraction",
  },
];

export default function DashboardWishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleRemove = (id: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="p-8 w-full max-w-6xl ml-6">
      <h1 className="text-4xl font-bold mb-8">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-xl overflow-hidden relative group transition hover:shadow-lg">
              <Image
                src={item.poster}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{item.type}</p>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/event/${item.id}`}
                    className="text-blue-600 hover:underline">
                    View Details
                  </Link>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
