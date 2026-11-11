
const meetingTypes = [
  {
    title: "Investor Meetings",
    description: "Funding discussions, investor calls and follow-ups",
  },
  {
    title: "Client Meetings",
    description: "Client discussions, requirements and feedback",
  },
  {
    title: "Team Meetings",
    description: "Internal discussions and team decisions",
  },
  {
    title: "Partners & Vendors",
    description: "Business partners, suppliers and external contacts",
  },
];

export default function MeetingsPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-65px)] max-w-[1400px] px-6 py-9 md:px-9 md:py-11">
      <div className="mb-10">
        <p className="mb-2 text-xs text-[#8B938D]">
          WORKSPACE / MEETINGS
        </p>

        <h1 className="text-[27px] font-medium tracking-tight">
          Meetings & Contacts
        </h1>

        <p className="mt-2 text-sm text-[#8B938D]">
          Keep track of business conversations and important relationships.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium">Meeting records</h2>
          <p className="mt-1 text-xs text-[#8B938D]">
            Organize your business interactions.
          </p>
        </div>

        <button className="bg-[#A31C1B] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#871716]">
          + Add meeting
        </button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        {meetingTypes.map((type) => (
          <div
            key={type.title}
            className="border border-[#303630] bg-[#171717] p-5 transition hover:border-[#A31C1B]/50"
          >
            <h3 className="text-sm font-medium">{type.title}</h3>

            <p className="mt-2 text-xs leading-5 text-[#8B938D]">
              {type.description}
            </p>

            <p className="mt-6 text-xs text-[#777D78]">
              No records yet
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
