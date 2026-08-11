const services = [
  {
    icon: "🖨️",
    title: "Printing",
    description: "High-quality colour and black & white printing.",
  },
  {
    icon: "📄",
    title: "Photocopy",
    description: "Fast and affordable photocopy services.",
  },
  {
    icon: "🪪",
    title: "NIN Services",
    description: "NIN enrolment, modification and related services.",
  },
  {
    icon: "🏢",
    title: "CAC Registration",
    description: "Business name and company registration assistance.",
  },
  {
    icon: "🎓",
    title: "JAMB Registration",
    description: "JAMB registration and related online services.",
  },
  {
    icon: "🇳🇬",
    title: "NYSC Registration",
    description: "NYSC registration and online application assistance.",
  },
  {
    icon: "📑",
    title: "WAEC & NECO",
    description: "Online examination and result-related services.",
  },
  {
    icon: "📸",
    title: "Passport Photos",
    description: "Professional passport photographs and photo editing.",
  },
  {
    icon: "💻",
    title: "Typing & Documents",
    description: "Typing, CVs, letters, forms and document preparation.",
  },
  {
    icon: "🪪",
    title: "Plastic ID Cards",
    description: "PVC and plastic identification card services.",
  },
  {
    icon: "📋",
    title: "Online Applications",
    description: "Assistance with online applications and registrations.",
  },
  {
    icon: "📌",
    title: "Lamination",
    description: "Professional document and certificate lamination.",
  },
];

export default function MyServices() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center">
          <p className="text-yellow-500 font-semibold uppercase tracking-wider">
            What We Offer
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-blue-900">
            Our Services
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Reliable digital, documentation and registration services
            for individuals, students, businesses and organizations.
          </p>
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">

          {services.map((service) => {

            const message = encodeURIComponent(
              `Hello FARUQ DIGITAL HUB, I want to request ${service.title}.`
            );

            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100"
              >

                {/* Icon */}
                <div className="text-4xl">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold text-blue-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/2349030916494?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  💬 Request Service
                </a>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}