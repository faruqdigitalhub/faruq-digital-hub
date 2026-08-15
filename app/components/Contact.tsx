export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <p className="text-yellow-500 font-semibold uppercase tracking-wider">
            Get In Touch
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-blue-900">
            Contact FARUQ DIGITAL HUB
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Need printing, registration, document preparation or another
            digital service? Contact us and let's get it done.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* Phone */}
          <div className="bg-white rounded-2xl p-8 shadow-md text-center">
            <div className="text-4xl">📞</div>

            <h3 className="mt-4 text-xl font-bold text-blue-900">
              Call Us
            </h3>

            <p className="mt-2 text-gray-600">
              07035592146
            </p>

            <a
              href="tel:07035592146"
              className="inline-block mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl p-8 shadow-md text-center">
            <div className="text-4xl">💬</div>

            <h3 className="mt-4 text-xl font-bold text-blue-900">
              WhatsApp
            </h3>

            <p className="mt-2 text-gray-600">
              Chat with us directly.
            </p>

            <a
              href="https://wa.me/2347035592146"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
          <a
  href="https://www.google.com/maps/search/?api=1&query=F45G%2BXRX%20Dan%20Dume%2C%20Katsina%2C%20Nigeria"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition"
>
  📍 Get Directions
</a>

          {/* Location */}
          <div className="bg-white rounded-2xl p-8 shadow-md text-center">
            <div className="text-4xl">📍</div>

            <h3 className="mt-4 text-xl font-bold text-blue-900">
              Visit Us
            </h3>

            <p className="mt-2 text-gray-600">
              Dandume, Katsina State, Nigeria
            </p>

            <p className="mt-4 font-semibold text-gray-700">
              🕘 Everyday: 9:00 AM – 7:00 PM
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}