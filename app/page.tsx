export default function Page() {
  return (
    <div className="bg-zinc-950 pt-28 px-10 text-2xl text-gray-200">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="h-60 mb-6 bg-zinc-900 border-l-4 border-red-600 rounded-xl flex items-center justify-center"
        >
          Section {i + 1}
        </div>
      ))}
    </div>
  );
}
