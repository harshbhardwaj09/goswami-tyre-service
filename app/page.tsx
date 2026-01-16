export default function Page() {
  return (
    <div className="pt-28 px-10 text-2xl">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="h-24 mb-4 bg-gray-100 rounded-lg flex items-center justify-center"
        >
          Section {i + 1}
        </div>
      ))}
    </div>
  );
}
