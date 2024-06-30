export default function Counseling() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-600 mb-10">
        Counseling Service
      </h1>
      <p className="text-lg text-center mb-8">
        Our Shara'ee counseling services address various aspects of Muslim life:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Family Counseling",
            description:
              "Addressing intergenerational conflicts, parenting challenges, and family dynamics.",
            icon: "🏠",
          },
          {
            title: "Marriage Counseling",
            description:
              "Helping couples navigate marital issues in line with Islamic principles.",
            icon: "💍",
          },
          {
            title: "Youth Counseling",
            description:
              "Guiding young Muslims through challenges unique to their age group.",
            icon: "🌱",
          },
          {
            title: "Spiritual Counseling",
            description:
              "Assisting individuals in strengthening their faith and overcoming spiritual obstacles.",
            icon: "☪️",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition-all hover:shadow-xl hover:bg-teal-50"
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
      <div className="mt-10 bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg shadow-md">
        <p className="text-lg text-center text-teal-800">
          Our counselors are well-versed in Islamic teachings and modern
          counseling techniques, offering a balanced approach to addressing
          life's challenges.
        </p>
      </div>
    </div>
  );
}
