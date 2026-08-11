export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-yellow-500 font-semibold uppercase tracking-wider">
            About Us
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-blue-900">
            Your Trusted Digital Service Center
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            FARUQ DIGITAL HUB is a reliable digital service center
            providing professional printing, documentation, online
            registration and digital support services.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We help students, individuals, businesses and organizations
            access essential digital services quickly, conveniently and
            affordably.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 text-lg">
                ⚡ Fast Service
              </h3>
              <p className="mt-2 text-gray-600">
                We value your time and aim to complete services efficiently.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 text-lg">
                🤝 Customer Focused
              </h3>
              <p className="mt-2 text-gray-600">
                We treat every customer with respect and professionalism.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 text-lg">
                💰 Affordable
              </h3>
              <p className="mt-2 text-gray-600">
                Quality digital services at competitive prices.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 text-lg">
                🔐 Reliable
              </h3>
              <p className="mt-2 text-gray-600">
                We handle your documents and information responsibly.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-blue-900 text-white rounded-3xl p-8 md:p-10 shadow-xl">
          <div className="text-6xl mb-6">
            💻
          </div>

          <h3 className="text-3xl font-bold">
            Digital Solutions Made Simple
          </h3>

          <p className="mt-5 text-blue-100 leading-relaxed">
            From printing and photocopying to online registrations,
            document preparation and digital applications, FARUQ DIGITAL
            HUB is here to make everyday digital tasks easier.
          </p>

          <div className="mt-8 border-t border-blue-700 pt-6">
            <p className="font-semibold text-yellow-300">
              📍 Dandume, Katsina State
            </p>

            <p className="mt-3">
              🕘 Open Everyday: 9:00 AM – 7:00 PM
            </p>

            <a
              href="tel:09030916494"
              className="inline-block mt-6 bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              📞 Call Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}