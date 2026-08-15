export default function Location() {
  const address =
    "No. 11 Alh Bara'u Plaza, Behind Motor Park, Opp. 'Yan Katako, Sabon Gari, Dandume, Katsina State, Nigeria";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  return (
    <section
      id="location"
      className="py-20 px-6 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <p className="text-yellow-500 font-semibold uppercase tracking-wider">
            Find Us
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-blue-900">
            Our Location
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Visit FARUQ DIGITAL HUB for fast, reliable and affordable
            digital services.
          </p>
        </div>

        {/* Location Card */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch">

          {/* Address */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="text-5xl mb-5">
              📍
            </div>

            <h3 className="text-2xl font-bold text-blue-900">
              Visit Our Office
            </h3>

            <p className="mt-5 text-gray-700 leading-relaxed">
              {address}
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p>
                🕘 <strong>Opening Hours:</strong> Everyday, 9:00 AM – 7:00 PM
              </p>

              <p>
                📞 <strong>Phone:</strong> 07035592146
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-blue-900 transition"
              >
                🗺️ Open in Google Maps
              </a>

              <a
                href="https://wa.me/2347035592146"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-green-600 transition"
              >
                💬 WhatsApp Us
              </a>

            </div>

          </div>

          {/* Map Preview */}
          <div className="bg-blue-900 rounded-2xl shadow-lg overflow-hidden min-h-[350px] flex items-center justify-center text-center p-8">

            <div className="text-white">

              <div className="text-6xl mb-5">
                📍
              </div>

              <h3 className="text-2xl font-bold">
                FARUQ DIGITAL HUB
              </h3>

              <p className="mt-3 text-blue-200">
                Sabon Gari, Dandume
              </p>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
              >
                View Location
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}