export default function PriceList() {
  const prices = [
    ["Printing (Black & White)", "₦100"],
    ["Printing (Colour)", "₦150"],
    ["Photocopy (Black & White)", "₦50"],
    ["Photocopy (Colour)", "₦100"],
    ["Passport Photos", "Contact Us"],
    ["Typing & Documents", "Contact Us"],
    ["Lamination (A4)", "₦200"],
    ["Plastic ID Card", "₦1,500"],
    ["CAC Registration", "Contact Us"],
    ["NIN Services", "Contact Us"],
    ["JAMB Registration", "Contact Us"],
    ["NYSC Registration", "₦7,500 - ₦10,000"],
  ];

  return (
    <section
      id="prices"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <p className="text-yellow-500 font-semibold uppercase tracking-wider">
            Affordable Pricing
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-blue-900">
            Our Price List
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Transparent and affordable pricing for our most requested services.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">

          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="text-left px-6 py-4">Service</th>
                <th className="text-right px-6 py-4">Price</th>
              </tr>
            </thead>

            <tbody>
              {prices.map(([service, price]) => (
                <tr
                  key={service}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium">
                    {service}
                  </td>

                  <td className="px-6 py-4 text-right font-bold text-blue-900">
                    {price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/2347035592146"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition"
          >
            💬 Ask About Any Service
          </a>
        </div>

      </div>
    </section>
  );
}