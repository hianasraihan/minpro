"use client";

import { useParams } from "next/navigation";
import { events } from "@/app/page"; // pastikan ini sesuai
import Link from "next/link";

const DestinationPage = () => {
  const params = useParams();
  const id = (params?.id as string)?.toLowerCase(); // pastikan ID sesuai dengan lokasi (misal: 'jakarta')

  // Memfilter acara berdasarkan lokasi yang diambil dari URL
  const filteredEvents = events.filter(
    (event) => event.location?.toLowerCase() === id
  );

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-10 capitalize">Acara di {id}</h1>
      {filteredEvents.length === 0 ? (
        <p>Tidak ada acara ditemukan di lokasi ini.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <Link href={`/event/${event.id}`} key={event.id}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all cursor-pointer">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  {event.time && (
                    <p className="text-gray-500 text-sm mt-1">{event.time}</p>
                  )}
                  <p className="text-green-600 font-bold mt-2">{event.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinationPage;
