import Navbar from "./components/Navbar";
import MyServices from "./components/MyServices";
import PriceList from "./components/PriceList";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Location from "./components/Location";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-blue-900 text-white py-20 md:py-28 px-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 opacity-80"></div>

          <div className="relative max-w-6xl mx-auto">

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="/logo.png"
                alt="FARUQ DIGITAL HUB"
                className="w-48 h-32 md:w-64 md:h-40 object-contain drop-shadow-2xl"
              />
            </div>

            {/* Badge */}
            <div className="inline-block bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-bold text-sm md:text-base mb-6 shadow-lg">
              ⭐ TRUSTED DIGITAL SERVICES
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
              FARUQ DIGITAL HUB
            </h1>

            <p className="mt-5 text-2xl md:text-4xl font-bold text-yellow-300">
              Your Digital Needs. Sorted.
            </p>

            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Professional printing, online registration, document
              preparation, graphic design and reliable digital services
              for individuals, students, businesses and organizations
              in Dandume.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <a
                href="tel:07035592146"
                className="bg-yellow-400 text-blue-950 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-yellow-300 hover:scale-105 transition"
              >
                📞 Call Us
              </a>

              <a
                href="https://wa.me/2347035592146"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-green-600 hover:scale-105 transition"
              >
                💬 WhatsApp Us
              </a>

              <a
                href="#services"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition"
              >
                🛠️ View Services
              </a>

            </div>

            {/* Trust / Business Highlights */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                <div className="text-3xl">🖨️</div>
                <p className="mt-2 font-bold text-xl">12+</p>
                <p className="text-blue-200 text-sm">
                  Digital Services
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                <div className="text-3xl">⚡</div>
                <p className="mt-2 font-bold text-xl">Fast</p>
                <p className="text-blue-200 text-sm">
                  Service Delivery
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                <div className="text-3xl">📍</div>
                <p className="mt-2 font-bold text-xl">Dandume</p>
                <p className="text-blue-200 text-sm">
                  Katsina State
                </p>
              </div>

            </div>

            <p className="mt-10 text-blue-200">
              🕘 Open Everyday: 9:00 AM – 7:00 PM
            </p>

          </div>
        </section>

        {/* Services */}
        <MyServices />

        {/* Price List */}
        <PriceList />

        {/* About */}
        <About />

        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold text-center text-blue-900">
              Why Choose FARUQ DIGITAL HUB?
            </h2>

            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              We make digital services simple, accessible and affordable
              for individuals, students and businesses in our community.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-12">

              <div className="text-center p-6 rounded-xl shadow-lg bg-gray-50">
                <div className="text-4xl mb-4">⚡</div>

                <h3 className="text-xl font-bold text-blue-900">
                  Fast Service
                </h3>

                <p className="mt-3 text-gray-700">
                  We value your time and provide quick and efficient services.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl shadow-lg bg-gray-50">
                <div className="text-4xl mb-4">💰</div>

                <h3 className="text-xl font-bold text-blue-900">
                  Affordable Prices
                </h3>

                <p className="mt-3 text-gray-700">
                  Quality digital services at prices that work for you.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl shadow-lg bg-gray-50">
                <div className="text-4xl mb-4">🔒</div>

                <h3 className="text-xl font-bold text-blue-900">
                  Reliable Service
                </h3>

                <p className="mt-3 text-gray-700">
                  We handle your documents and applications with professionalism.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl shadow-lg bg-gray-50">
                <div className="text-4xl mb-4">📍</div>

                <h3 className="text-xl font-bold text-blue-900">
                  Local & Accessible
                </h3>

                <p className="mt-3 text-gray-700">
                  Convenient digital services right here in Dandume.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Contact */}
        <Contact />
        <Location />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </>
  );
}