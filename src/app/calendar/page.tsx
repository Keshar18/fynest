
const upcomingItems = [
  {
    title: "Project deadlines",
    description: "Track important project completion dates.",
  },
  {
    title: "Meetings",
    description: "Keep your business meetings organized.",
  },
  {
    title: "Compliance",
    description: "Monitor legal and regulatory due dates.",
  },
  {
    title: "Reminders",
    description: "Never miss important follow-up actions.",
  },
];

export default function CalendarPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-65px)] max-w-[1400px] px-6 py-9 md:px-9 md:py-11">
      <div className="mb-10">
        <p className="mb-2 text-xs text-[#8B938D]">
          WORKSPACE / CALENDAR
        </p>

        <h1 className="text-[27px] font-medium tracking-tight">
          Calendar & Deadlines
        </h1>

        <p className="mt-2 text-sm text-[#8B938D]">
          Manage your startup schedule and important dates.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium">Upcoming schedule</h2>
          <p className="mt-1 text-xs text-[#8B938D]">
            Your important events and deadlines.
          </p>
        </div>

        <button className="bg-[#A31C1B] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#871716]">
          + Add event
        </button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        {upcomingItems.map((item) => (
          <div
            key={item.title}
            className="border border-[#303630] bg-[#171717] p-5 transition hover:border-[#A31C1B]/50"
          >
            <h3 className="text-sm font-medium">{item.title}</h3>

            <p className="mt-2 text-xs leading-5 text-[#8B938D]">
              {item.description}
            </p>

            <p className="mt-6 text-xs text-[#777D78]">
              No scheduled items
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
