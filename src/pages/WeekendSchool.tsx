export default function WeekendSchool() {
  return (
    <div className="text-xl">
      <h1 className="text-2xl font-bold text-center w-full mb-10">
        Weekend Classes for Children
      </h1>
      <p>
        Our weekend classes for children are designed to nurture young Muslims
        in their faith and knowledge. Held on Fridays and Sundays, these classes
        focus on:
      </p>
      <ol className="list-decimal max-w-3xl mx-auto my-8 space-y-4">
        <li>
          <b>Quranic Recitation:</b> Students learn proper pronunciation and
          recitation techniques.
        </li>
        <li>
          <b>Tajweed Rules:</b> Basic principles of Tajweed are introduced to
          enhance Quranic recitation.
        </li>
        <li>
          <b>Islamic Education:</b> Fundamental concepts of Islam, including:
          <ul className="list-disc max-w-xl mx-auto my-8 space-y-4 font-bold">
            <li>Five Pillars of Islam</li>
            <li>Prophetic Stories</li>
            <li>Islamic History</li>
            <li>Islamic Manners</li>
            <li>Articles of Faith</li>
          </ul>
        </li>
      </ol>
      <p>
        Classes are structured by age groups to ensure appropriate learning
        levels. Our experienced teachers create an engaging and supportive
        environment for children to grow in their faith.
      </p>
    </div>
  );
}
