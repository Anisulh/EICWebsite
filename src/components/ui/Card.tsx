export default function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 transition-all hover:shadow-xl">
      <div className="flex items-center mb-2">
        {icon && <span className="text-3xl mr-4">{icon}</span>}
        <h2 className="text-xl font-semibold text-teal-500">{title}</h2>
      </div>
      {children}
    </div>
  );
}
