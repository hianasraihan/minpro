"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

export const allEvents = [
  { id: "1", title: "We The Fest 2025", poster: "/wtf.jpg" },
  { id: "2", title: "Synchronize Fest", poster: "/sf.jpg" },
  { id: "3", title: "Java Jazz Festival", poster: "/jjf.jpg" },
  { id: "4", title: "Warehouse Project", poster: "/wp.jpg" },
  { id: "5", title: "Bali Music Festival", poster: "/bmf.jpg" },
  { id: "6", title: "Soundrenaline", poster: "/Soundrenaline.jpg" },
  { id: "7", title: "Universal Studios Singapore", poster: "/unv.jpg" },
  { id: "8", title: "Marina Bay Sands SkyPark", poster: "/skypark.jpg" },
  { id: "9", title: "Gardens by the Bay", poster: "/gardens.jpg" },
  { id: "10", title: "Sentosa Island Adventure", poster: "/sentosa.jpg" },
  { id: "11", title: "Candi Prambanan", poster: "/prambanan.jpg" },
  { id: "12", title: "Tari Kecak Bali", poster: "/Tari-kecak.jpg" },
  { id: "13", title: "Tangkuban Perahu", poster: "/tangkuban.jpg" },
  { id: "14", title: "Merapi Lava Tour", poster: "/merapi.jpg" },
  { id: "15", title: "Pantai Pangtritis", poster: "/pantai.jpg" },
  { id: "16", title: "Taman Mini Indonesia", poster: "/tmii.jpg" },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTheater, setSelectedTheater] = useState("Select Location");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(allEvents);
  const [isSticky, setIsSticky] = useState(false);

  const theaters = ["Jakarta", "Singapore", "Bali", "Yogyakarta", "Bandung"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const filtered = allEvents.filter((event) =>
        event.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(allEvents);
    }
  };

  return (
    <header
      className={`fixed navbar  mb-100 left-1/2 transform -translate-x-1/2   top-2 z-50 w-[1380px] rounded-4xl shadow-lg transition-all duration-300 ${
        isSticky ? "bg-blue-900" : "bg-blue-950"
      }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/event-in.png"
            alt="Event-in Logo"
            width={200}
            height={200}
          />
        </Link>

        {/* Search and Auth Buttons */}
        <nav className="flex items-center space-x-6 relative">
          {/* Search */}
          <div className="relative min-w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search"
              className="px-4 py-2 md:w-[450px] rounded bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full pl-10"
            />
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            {searchQuery && filteredEvents.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white text-black shadow-md rounded-lg max-h-60 overflow-y-auto z-50">
                {filteredEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={`/event/${event.id}`}
                    className="block px-4 py-2 hover:bg-gray-100">
                    {event.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Theater Dropdown */}
          <div className="relative z-50 px-4 py-2 bg-blue-700 rounded-md ">
            <FaCartShopping className="text-white" />
          </div>

          {/* Login Button */}
          <Link
            href="/register"
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white transition-all">
            Login / Sign Up
          </Link>
          <Link href="/dashboard">
            <CgProfile className="text-white text-4xl" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
