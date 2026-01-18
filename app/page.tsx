const SECTIONS = ["Home", "About", "Products", "Services", "Contact"];

export default function Page() {
  return (
    <div
      className="
        bg-zinc-950
        px-10
        text-2xl
        text-gray-200
        pt-[84px]     /* navbar ke neeche spacing */
        pb-72         /* 👈 last section ke baad khali space */
      "
    >
      {SECTIONS.map((section) => (
        <section
          key={section}
          name={section}
          className="
            h-72
            mb-5
            bg-zinc-900
            rounded-xl
            flex
            items-center
            justify-center
            shadow-md
            shadow-black/40
          "
        >
          {section} Section
        </section>
      ))}
    </div>
  );
}
