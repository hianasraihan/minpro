"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/app/component/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { events, singaporeEvents } from "@/app/page";

export default function SlugEventPage() {
  const params = useParams();
  const [event, setEvent] = useState<any>({});
  const [quantity, setQuantity] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const getEventDetail = () => {
    const getEvent = singaporeEvents.find(
      (event) => event.id.toString() === params.id
    );
    setEvent(getEvent);
  };

  const handleQuantityChange = (value: number) => {
    setQuantity((prev) => Math.max(0, prev + value));
  };

  const calculatePrice = () => {
    const basePrice = parseInt(event?.price?.replace(/[^\d]/g, "")) || 0;
    return basePrice * quantity;
  };

  const handleBooking = () => {
    setIsBooking(true);
    setTimeout(() => {
      setBookingSuccess(true);
      setIsBooking(false);
    }, 1000);
  };

  useEffect(() => {
    getEventDetail();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        {event.title}
      </h1>

      <Image
        src={event.image}
        alt={event.title || "Event poster"}
        width={1000}
        height={600}
        className="rounded-2xl shadow-xl object-cover w-full h-[500px] mb-10"
      />

      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="text-indigo-600 border-l-8 border-indigo-600 rounded-r-md px-3 py-1 mr-2"></span>
        Pilihan Tiket
      </h2>

      <div className="bg-gray-50 rounded-2xl p-6 shadow">
        <div className="flex items-center text-gray-500 gap-6 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>{event.location}</span>
          </div>
        </div>

        <hr className="my-4" />

        <p className="text-blue-600 font-bold text-lg">Early Bird</p>
        <p className="text-gray-700">Harga</p>
        <p className="text-3xl font-bold text-gray-900 mb-6">
          Rp.{" "}
          {parseInt(event.price?.replace(/[^\d]/g, "") || "0").toLocaleString(
            "id-ID"
          )}
        </p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => handleQuantityChange(-1)}
              disabled={isBooking}
              className="w-10 h-10 p-0 font-bold text-xl">
              -
            </Button>
            <span className="w-10 text-center font-medium text-lg text-white bg-blue-600 rounded-md py-2">
              {quantity}
            </span>
            <Button
              onClick={() => handleQuantityChange(1)}
              disabled={isBooking}
              className="w-10 h-10 p-0 font-bold text-xl">
              +
            </Button>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg text-gray-600">Total</p>
            <p className="text-2xl font-bold text-gray-900">
              Rp. {calculatePrice().toLocaleString("id-ID")}
            </p>
          </div>
          <Button
            onClick={handleBooking}
            disabled={isBooking || quantity === 0}
            className="bg-blue border-gray-400 text-black hover:bg-blue-600 px-6 py-3 rounded-lg shadow">
            {isBooking ? "Memproses..." : "Pesan Sekarang"}
          </Button>
        </div>
        {bookingSuccess && (
          <p className="mt-4 text-green-600 font-semibold">
            Tiket berhasil dipesan!
          </p>
        )}
      </div>

      <div className="w-full h-96 mt-10">
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            event.location
          )}&output=embed`}
          width="100%"
          height="100%"
          className="rounded-2xl border shadow"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
