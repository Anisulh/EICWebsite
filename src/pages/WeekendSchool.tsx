export default function WeekendSchool() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-600 mb-10">
        Weekend Classes for Children
      </h1>
      <p className="text-lg text-center mb-8">
        Our weekend classes for children are designed to nurture young Muslims
        in their faith and knowledge. Held on Fridays and Sundays, these classes
        focus on:
      </p>
      <ol className="space-y-6">
        {[
          {
            title: "Quranic Recitation",
            description:
              "Students learn proper pronunciation and recitation techniques.",
            icon: "📖",
          },
          {
            title: "Tajweed Rules",
            description:
              "Basic principles of Tajweed are introduced to enhance Quranic recitation.",
            icon: "🔊",
          },
          {
            title: "Islamic Education",
            description: "Fundamental concepts of Islam, including:",
            icon: "🕌",
            subItems: [
              { text: "Five Pillars of Islam", icon: "🏛️" },
              { text: "Prophetic Stories", icon: "📜" },
              { text: "Islamic History", icon: "🗓️" },
              { text: "Islamic Manners", icon: "🤲" },
              { text: "Articles of Faith", icon: "☪️" },
            ],
          },
        ].map((item, index) => (
          <li
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition-all hover:shadow-xl"
          >
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-4">{item.icon}</span>
              <h2 className="text-xl font-semibold text-teal-500">
                {item.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-2">{item.description}</p>
            {item.subItems && (
              <ul className="list-none pl-6 mt-4 space-y-2">
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-gray-700 font-medium flex items-center"
                  >
                    <span className="text-xl mr-2">{subItem.icon}</span>
                    {subItem.text}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
      <p className="text-lg text-center mt-10 bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
        Classes are structured by age groups to ensure appropriate learning
        levels. Our experienced teachers create an engaging and supportive
        environment for children to grow in their faith.
      </p>
    </div>
  );
}
