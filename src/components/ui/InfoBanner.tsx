export default function InfoBanner({ description }: { description: string }) {
  return (
    <div className="mt-10 bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg shadow-md">
      <p className="text-lg text-center text-teal-800">{description} </p>
    </div>
  );
}
