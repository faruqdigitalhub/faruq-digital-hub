export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Business */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              FARUQ DIGITAL HUB
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Your trusted one-stop digital service centre in Dandume,
              Katsina State. We provide reliable and affordable digital
              and documentation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="/"
                className="text-gray-300 hover:text-yellow-400"
              >
                Home
              </a>

              <a
                href="#services"
                className="text-gray-300 hover:text-yellow-400"
              >
                Services
              </a>

              <a
                href="#about"
                className="text-gray-300 hover:text-yellow-400"
              >
                About Us
              </a>

              <a
                href="#contact"
                className="text-gray-300 hover:text-yellow-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-gray-300">
              <p>📍 Dandume, Katsina State, Nigeria</p>

              <p>📞 09030916494</p>

              <a
                href="https://wa.me/2349030916494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-green-400 hover:text-green-300"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} FARUQ DIGITAL HUB. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Digital Services • Printing • Registration • Design
          </p>
        </div>

      </div>
    </footer>
  );
}