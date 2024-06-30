export default function Nikkah() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-600 mb-10">
        Nikkah/Marriage Service
      </h1>
      <p className="text-lg text-center mb-8">
        Our masjid offers Nikkah services conducted by a registered NYC Marriage
        Officiant. This service includes:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Pre-marital counseling",
            description:
              "Preparing couples for married life from an Islamic perspective.",
            icon: "🤝",
          },
          {
            title: "Nikkah ceremony",
            description:
              "Conducting the Islamic marriage contract in accordance with Shariah.",
            icon: "📜",
          },
          {
            title: "Marriage certificate",
            description:
              "Providing official documentation recognized by NYC authorities.",
            icon: "📄",
          },
          {
            title: "Post-marriage guidance",
            description:
              "Offering support to newlyweds as they begin their journey together.",
            icon: "🏡",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition-all hover:shadow-xl "
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">{item.icon}</span>
              <h2 className="text-xl font-semibold text-teal-600">
                {item.title}
              </h2>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="text-lg text-center mt-10 bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
        We strive to make the Nikkah process meaningful, ensuring that couples
        understand the rights and responsibilities of Islamic marriage.
      </p>
    </div>
  );
}
