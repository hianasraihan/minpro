// src/app/about/page.tsx
import Link from "next/link";

const About = () => {
  return (
    <div className="pt-20 font-sans text-center">
      <div className="mb-8 text-5xl font-bold">
        <h1>About Event-In</h1>
        <div className="h-2 w-32 bg-yellow-500 mx-auto" />
      </div>

      <div className="mx-auto w-full px-8 text-lg text-gray-700 text-justify">
        <p className="mb-6">
          Event-In is your trusted platform for discovering and booking tickets
          to the most exciting events, concerts, and travel experiences. Whether
          you're a music lover, culture seeker, or adventure enthusiast,
          Event-In makes it easy to plan your next outing—anytime, anywhere.
        </p>

        <h2 className="mb-4 text-3xl font-semibold">Key Features:</h2>
        <ul className="mb-8 list-disc list-inside text-gray-600">
          <li>
            <strong>Real-Time Event Listings:</strong> Instantly view upcoming
            events, concerts, exhibitions, and tour packages with real-time
            availability.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Enjoy a smooth, intuitive
            design that makes browsing and booking fast and hassle-free.
          </li>
          <li>
            <strong>Diverse Experiences:</strong> From live music and cultural
            festivals to guided trips and workshops, find experiences that suit
            your style.
          </li>
          <li>
            <strong>Secure Payments:</strong> Pay safely using a variety of
            methods, including cards and digital wallets.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Get smart suggestions
            based on your interests and past bookings.
          </li>
          <li>
            <strong>Exclusive Deals & Access:</strong> Be the first to access
            presales, VIP packages, and seasonal offers.
          </li>
          <li>
            <strong>Flexible Seating & Scheduling:</strong> Choose seats and
            times that work best for you—where applicable.
          </li>
          <li>
            <strong>24/7 Customer Support:</strong> Our team is always here to
            help with any questions or booking concerns.
          </li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Why Choose Event-In?</h2>
        <ul className="mb-8 list-disc list-inside text-gray-600">
          <li>
            <strong>Convenience:</strong> Book tickets anytime, anywhere with
            ease.
          </li>
          <li>
            <strong>Variety:</strong> Access a wide range of events and
            destinations tailored to your lifestyle.
          </li>
          <li>
            <strong>Reliability:</strong> Transparent availability and trusted
            payment processing.
          </li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">How It Works:</h2>
        <ol className="mb-8 list-decimal list-inside text-gray-600">
          <li>
            <strong>Explore Events:</strong> Browse through our latest events,
            concerts, or travel packages via the website or app.
          </li>
          <li>
            <strong>Choose Location & Time:</strong> Pick your desired
            destination, venue, or event schedule.
          </li>
          <li>
            <strong>Select Your Ticket:</strong> Choose ticket types that match
            your preferences— general, VIP, or group.
          </li>
          <li>
            <strong>Make Payment:</strong> Secure your spot with fast and secure
            checkout.
          </li>
          <li>
            <strong>Enjoy the Experience!</strong> Present your digital ticket
            and make lasting memories.
          </li>
        </ol>

        <p className="text-lg font-semibold text-gray-700">
          Ready to explore unforgettable events and adventures? Visit{" "}
          <Link
            href="https://www.event-in.com"
            className="text-blue-500 underline">
            www.Event-In.com
          </Link>{" "}
          and plan your next experience in just a few clicks!
        </p>
      </div>
    </div>
  );
};

export default About;
