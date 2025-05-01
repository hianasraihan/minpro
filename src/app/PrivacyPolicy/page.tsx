import Link from "next/link";
const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4 py-12">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Privacy Policy
          </h1>
          <div className="h-2 w-32 bg-yellow-500 mx-auto" />
        </div>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Event-In is committed to protecting your privacy. This policy explains
          how we collect, use, and safeguard your personal information when you
          use our services.
        </p>

        <div className="space-y-10 text-gray-800 leading-relaxed text-justify text-[18px]">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p>
              We collect personal data such as your name, email, phone number,
              and payment details when you register or make a booking. We also
              gather behavioral data through cookies and analytics tools to
              better understand user preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Use of Information</h2>
            <p>
              Your information is used to process transactions, improve our
              services, provide a personalized experience, and send promotional
              content—only if you choose to receive it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
            <p>
              We implement technical and organizational measures to secure your
              data from unauthorized access, loss, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Third-Party Sharing</h2>
            <p>
              We never sell your personal data. We may share limited information
              with trusted partners for event logistics or payment processing,
              under strict confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
            <p>
              You may access, correct, or delete your data at any time. You can
              also opt out of marketing communications via your profile
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Updates to This Policy
            </h2>
            <p>
              We may occasionally update this Privacy Policy. Please check this
              page regularly to stay informed of any changes.
            </p>
          </section>

          <section>
            <p>
              If you have any questions, feel free to contact us at{" "}
              <a
                href="mailto:privacy@event-in.com"
                className="text-blue-600 underline hover:text-blue-800">
                privacy@event-in.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
