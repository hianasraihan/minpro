"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "./component/slider";
import SearchBar from "./search/page";
import Link from "next/link";
interface EventType {
  id: number;
  title: string;
  image: string;
  location?: string;
  time?: string;
  price: string;
  description?: string;
}

export const events: EventType[] = [
  {
    id: 1,
    title: "We The Fest 2025",
    image: "/wtf.jpg",
    location: "Jakarta",
    time: "20 Juli 2024",
    price: "Rp 750.000",
    description:
      "We The Fest adalah sebuah festival musik tahunan yang diadakan di Jakarta, Indonesia, yang menampilkan berbagai genre musik dan artis lokal maupun internasional. Festival ini biasanya menawarkan pengalaman yang lebih dari sekadar musik, termasuk seni, mode, dan kuliner.",
  },
  {
    id: 2,
    title: "Synchronize Fest",
    image: "/sf.jpg",
    location: "Jakarta",
    time: "4 Oktober 2024",
    price: "Rp 450.000",
    description:
      "Synchronize Fest adalah festival musik multi-genre tahunan berskala nasional yang menampilkan beragam musisi dan pertunjukan musik dari berbagai genre, mulai dari pop, rock, hingga musik elektronik. Festival ini juga menyediakan berbagai aktivitas lain seperti outdoor cinema, art & merch market, dan F&B Festival. Synchronize Fest berlokasi di Jakarta International Expo, Kemayoran, Jakarta. ",
  },
  {
    id: 3,
    title: "Java Jazz Festival",
    image: "/jjf.jpg",
    location: "Jakarta",
    time: "2 Maret 2024",
    price: "Rp 600.000",
    description:
      "Java Jazz Festival (JJF), atau Jakarta International Java Jazz Festival, adalah festival musik jazz terbesar di Indonesia dan salah satu yang terbesar di dunia. Festival ini diselenggarakan setiap tahun di Jakarta oleh Java Festival Production sejak tahun 2005. JJF menghadirkan berbagai musisi jazz dari dalam dan luar negeri, serta musisi dari genre lain seperti R&B, Soul, dan Reggae. ",
  },
  {
    id: 4,
    title: "Warehouse Project",
    image: "/wp.jpg",
    location: "Bali",
    time: "8 Desember 2024",
    price: "Rp 900.000",
    description:
      "festival musik elektronik (EDM) besar yang diadakan di Garuda Wisnu Kencana (GWK) Bali. Festival ini terkenal karena menampilkan artis-artis EDM internasional dan menjadi daya tarik utama bagi penggemar musik elektronik di Indonesia dan Asia. ",
  },
  {
    id: 5,
    title: "Bali Music Festival",
    image: "/bmf.jpg",
    location: "Bali",
    time: "5 Agustus 2024",
    price: "Rp 550.000",
    description:
      "Bali Music Festival adalah festival musik yang diadakan di Bali, Indonesia, yang fokus pada berbagai genre musik, termasuk musik dunia, yoga, tari, dan seni, serta berbagai workshop kesehatan dan kebugaran. Festival ini menarik penggemar musik dan yoga dari seluruh dunia, dan menampilkan pertunjukan musik, tari, dan berbagai workshop. ",
  },
  {
    id: 6,
    title: "Soundrenaline",
    image: "/Soundrenaline.jpg",
    location: "Bandung",
    time: "14 September 2024",
    price: "Rp 500.000",
    description:
      "festival musik lintas genre dan lintas generasi terbesar di Indonesia. Festival ini, yang pertama kali diselenggarakan pada tahun 2002, dikenal dengan keragaman musiknya, mulai dari rock, pop, indie, elektronik, hingga alternatif. Soundrenaline juga menonjol karena menghadirkan berbagai hiburan selain musik, seperti stand up comedy dan seni visual. ",
  },
  {
    id: 7,
    title: "Universal Studios Singapore",
    location: "Singapore",
    image: "/unv.jpg",
    price: "Rp.1.300.000",
    description:
      "Universal Studios Singapore is a theme park located in Resorts World Sentosa at Sentosa Island, Singapore. It features 24 rides, shows, and attractions, divided into seven themed zones. The park is Southeast Asia's first and only Universal Studios theme park, offering a variety of experiences based on popular movies and TV shows. ",
  },
  {
    id: 8,
    title: "Marina Bay Sands Skypark",
    location: "Singapore",
    image: "/skypark.jpg",
    price: "Rp.900.000",
    description:
      "Marina Bay Sands is an integrated resort in Singapore featuring a hotel, a casino, a luxury shopping mall, convention facilities, and various entertainment venues. The resort includes three 55-story towers connected on the ground level, with a SkyPark observation deck and an infinity pool on top. It's known for its unique architecture, including the inclined lower sections of the towers, and is a prominent landmark in Singapore's skyline. ",
  },
  {
    id: 9,
    title: "Gardens by the Bay",
    location: "Singapore",
    image: "/gardens.jpg",
    price: "Rp.700.000",
    description:
      "Gardens by the Bay is an iconic garden located in the heart of Marina Bay, Singapore. As one of Asia top tourist attractions, it showcases a stunning blend of nature and futuristic green technology. Spanning over 100 hectares, it features major highlights like the Flower Dome, the world largest glass greenhouse with plants from Mediterranean and semi-arid regions, and the Cloud Forest, a misty dome with a 35-meter indoor waterfall and tropical mountain ecosystem.",
  },
  {
    id: 10,
    title: "Sentosa Island Adventure",
    location: "Singapore",
    image: "/sentosa.jpg",
    price: "Rp.500.000",
    description:
      "Sentosa Island Adventure is a thrilling getaway just off Singapore southern coast. As the country top island resort, it offers exciting attractions, scenic beaches, and lush greenery. Visitors can enjoy adventures like the Skyline Luge, Mega Adventure zipline, and AJ Hackett giant swing, or explore family favorites like Universal Studios, the S.E.A. Aquarium, and relaxing beaches like Siloso and Palawan. With its mix of fun, nature, and excitement, Sentosa is a must-visit for all types of travelers.",
  },
  {
    id: 11,
    title: "Candi Prambanan",
    image: "/prambanan.jpg",
    location: "Yogyakarta",
    price: "Rp 50.000",
    description:
      "Candi Prambanan membawa Anda menyusuri jejak sejarah dan keindahan budaya Jawa yang memukau. Terletak di Yogyakarta, Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 dan didedikasikan untuk Trimurti: Brahma, Wisnu, dan Siwa.",
  },
  {
    id: 12,
    title: "Tari Kecak Bali",
    image: "/Tari-kecak.jpg",
    location: "Bali",
    price: "200.000",
    description:
      "pertunjukan seni paling ikonik dari Bali yang memadukan drama, tari, dan nyanyian vokal khas. Berasal dari tradisi ritual kuno, tarian ini biasanya dibawakan oleh puluhan pria yang duduk melingkar sambil meneriakkan cak-cak-cak secara ritmis, menciptakan irama yang menggetarkan. ",
  },
  {
    id: 13,
    title: "Tangkuban Perahu",
    image: "/tangkuban.jpg",
    location: "Bandung",
    price: "Rp 150.000",
    description:
      "gunung berapi aktif yang terletak sekitar 30 km di utara Kota Bandung, Jawa Barat. Gunung ini terkenal karena bentuk kawahnya yang menyerupai perahu terbalik, sesuai dengan legenda rakyat populer tentang Sangkuriang dan Dayang Sumbi. ",
  },
  {
    id: 14,
    title: "Merapi Lava Tour",
    image: "/merapi.jpg",
    location: "Yogyakarta",
    price: "Rp 250.000",
    description:
      " pengalaman wisata petualangan yang membawa Anda menjelajahi lereng Gunung Merapi, salah satu gunung berapi paling aktif di Indonesia. Dengan menggunakan jeep 4x4, Anda akan diajak menyusuri jalur berbatu dan berdebu, menyaksikan langsung jejak dahsyat erupsi Merapi serta kisah ketangguhan masyarakat sekitarnya.",
  },
  {
    id: 15,
    title: "Pantai Pangtritis",
    image: "/pantai.jpg",
    location: "Yogyakarta",
    price: "Rp 30.000",
    description:
      "salah satu pantai paling terkenal di Yogyakarta, yang terletak sekitar 27 km di selatan Kota Yogyakarta. Pantai ini memikat wisatawan dengan hamparan pasir hitam yang luas, ombak besar khas Samudra Hindia, serta pemandangan matahari terbenam yang memukau. Selain keindahan alamnya, Parangtritis juga memiliki nuansa mistis yang kuat karena erat kaitannya dengan legenda Nyi Roro Kidul, Ratu Pantai Selatan. ",
  },
  {
    id: 16,
    title: "Taman Mini Indonesia",
    image: "/tmii.jpg",
    location: "Jakarta",
    price: "Rp 300.000",
    description:
      "taman budaya bertema Indonesia yang terletak di Jakarta Timur. Tempat ini dirancang untuk memperkenalkan kekayaan budaya dan keragaman suku bangsa Indonesia dalam satu kawasan yang luas. TMII menampilkan paviliun dari 34 provinsi yang merepresentasikan rumah adat, pakaian tradisional, tarian, dan kebudayaan khas masing-masing daerah.",
  },
];
<SearchBar />;
const searchQuery = "";
const festOnlyEvents = events.filter(
  (event) =>
    (event.title.toLowerCase().includes("fest") ||
      event.title.toLowerCase().includes("sound") ||
      event.title.toLowerCase().includes("jazz") ||
      event.title.toLowerCase().includes("project") ||
      event.title.toLowerCase().includes("concert")) &&
    (event.title.toLowerCase().includes(searchQuery) ||
      event.location?.toLowerCase().includes(searchQuery) ||
      event.time?.toLowerCase().includes(searchQuery))
);


export const singaporeEvents: EventType[] = [
  {
    id: 7,
    title: "Universal Studios Singapore",
    image: "/unv.jpg",
    price: "Rp 1.300.000",
  },
  {
    id: 8,
    title: "Marina Bay Sands SkyPark",
    image: "/skypark.jpg",
    price: "Rp 900.000",
  },
  {
    id: 9,
    title: "Gardens by the Bay",
    image: "/gardens.jpg",
    price: "Rp 700.000",
  },
  {
    id: 10,
    title: "Sentosa Island Adventure",
    image: "/sentosa.jpg",
    price: "Rp 500.000",
  },
];

const indonesiaEvents: EventType[] = [
  {
    id: 11,
    title: "Candi Prambanan",
    image: "/prambanan.jpg",
    location: "Yogyakarta",
    price: "Rp 50.000",
  },
  {
    id: 12,
    title: "Tari Kecak Bali",
    image: "/Tari-kecak.jpg",
    location: "Bali",
    price: "200.000",
  },
  {
    id: 13,
    title: "Tangkuban Perahu",
    image: "/tangkuban.jpg",
    location: "Bandung",
    price: "Rp 150.000",
  },
  {
    id: 14,
    title: "Merapi Lava Tour",
    image: "/merapi.jpg",
    location: "Yogyakarta",
    price: "Rp 250.000",
  },
  {
    id: 15,
    title: "Pantai Pangtritis",
    image: "/pantai.jpg",
    location: "Yogyakarta",
    price: "Rp 30.000",
  },
  {
    id: 16,
    title: "Taman Mini Indonesia",
    image: "/tmii.jpg",
    location: "Jakarta",
    price: "Rp 300.000",
  },
];

const favoriteDestinations: EventType[] = [
  {
    id: 1,
    title: "Jakarta",
    image: "jakarta.jpg",
    location: "Jakarta",
    price: "",
  },
  {
    id: 2,
    title: "Singapore",
    image: "/singapore.jpg",
    location: "Singapore",
    price: "",
  },
  {
    id: 3,
    title: "Bali",
    image: "/bali.jpg",
    location: "Bali",
    price: "",
  },
  {
    id: 4,
    title: "Yogyakarta",
    image: "/jogja.jpg",
    location: "Yogyakarta",
    price: "",
  },
  {
    id: 5,
    title: "Bandung",
    image: "/bandung.jpg",
    location: "Bandung",
    price: "",
  },
];

const EventsPage = () => {
  const swiperRef = useRef<any>(null);
  const indonesiaSwiperRef = useRef<any>(null);

  return (
    <div className="mt-18 min-h-screen bg-gray-100 p-8 flex flex-col gap-y-24">
      <main className="p-4">
        <Slider />
      </main>
      {/* Section 1: Konser Festival */}
      <section className="relative -mt-25">
        <div className="flex items-center justify-between px-4 mb-6">
          <h1 className="text-4xl font-extrabold">Konser & Festival</h1>
          <div className="flex gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="group bg-white p-2 rounded-lg shadow hover:bg-black transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black group-hover:text-white transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="group bg-white p-2 rounded-lg shadow hover:bg-black transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black group-hover:text-white transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16">
          {festOnlyEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <Link href={`/event/${event.id}`}>
                <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-all h-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">{event.title}</h2>
                    <p className="text-gray-600 text-sm">
                      Lokasi: {event.location}
                    </p>
                    <p className="text-gray-600 text-sm">Waktu: {event.time}</p>
                    <p className="text-xl font-bold text-green-600">
                      {event.price}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Section 2: Yang Seru di Singapura */}
      <section
        className="rounded-3xl shadow-xl p-10 bg-cover bg-center mt-[-75px]"
        style={{
          backgroundImage: `url('https://a.travel-assets.com/findyours-php/viewfinder/images/res70/542000/542607-singapore.jpg')`,
        }}>
        <h2 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">
          Yang Seru di Singapura
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {singaporeEvents.map((event) => (
            <Link href={`/event/${event.id}`} key={event.id}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col items-center text-center shadow-lg hover:scale-105 transition-all cursor-pointer">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Mulai dari{" "}
                    <span className="text-orange-500 font-bold">
                      {event.price}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Lihat Lebih Banyak
          </button>
        </div>
      </section>

      {/* Section 3: Lagi Populer di Indonesia */}
      <section className="relative">
        <h2 className="text-4xl font-extrabold text-left mb-6">
          Lagi Populer di Negeri Indonesia
        </h2>
        <div className="absolute right-8 top-0 flex gap-4 z-10">
          <button
            onClick={() => indonesiaSwiperRef.current?.slidePrev()}
            className="group bg-white p-2 rounded-lg shadow hover:bg-black transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black group-hover:text-white transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => indonesiaSwiperRef.current?.slideNext()}
            className="group bg-white p-2 rounded-lg shadow hover:bg-black transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black group-hover:text-white transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => (indonesiaSwiperRef.current = swiper)}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16">
          {indonesiaEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <Link href={`/event/${event.id}`}>
                <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-all h-full cursor-pointer">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.location}</p>
                    <p className="text-xl font-bold text-green-600">
                      {event.price}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Section 4: Destination Favorite */}
      <section className="rounded-3xl shadow-xl p-10 bg-indigo-600 mt-[-50px]">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Destination Favorite
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {favoriteDestinations.map((event) => (
            <Link
              href={`/destination/${event.location?.toLowerCase()}`}
              key={event.id}>
              <div className="bg-white rounded-2xl overflow-hidden flex flex-col items-center text-center shadow-lg hover:scale-105 transition-all cursor-pointer">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {event.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
