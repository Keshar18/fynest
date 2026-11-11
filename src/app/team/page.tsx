
const departments = [
  {
    name: "Engineering",
    description: "Software development and technology",
  },
  {
    name: "Product",
    description: "Product planning and development",
  },
  {
    name: "Marketing",
    description: "Branding, growth and marketing",
  },
  {
    name: "Operations",
    description: "Business operations and administration",
  },
  {
    name: "Finance",
    description: "Accounts, budgets and financial planning",
  },
  {
    name: "Human Resources",
    description: "People management and recruitment",
  },
];

export default function TeamPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-65px)] max-w-[1400px] px-6 py-9 md:px-9 md:py-11">
      <div className="mb-10">
        <p className="mb-2 text-xs text-[#8B938D]">
          WORKSPACE / TEAM
        </p>

        <h1 className="text-[27px] font-medium tracking-tight">
          Team & Departments
        </h1>

        <p className="mt-2 text-sm text-[#8B938D]">
          Organize your people, departments and responsibilities.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium">Your departments</h2>
          <p className="mt-1 text-xs text-[#8B938D]">
            Organize your startup structure.
          </p>
        </div>

        <button className="bg-[#A31C1B] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#871716]">
          + Add member
        </button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {departments.map((department) => (
          <div
            key={department.name}
            className="border border-[#303630] bg-[#171717] p-5 transition hover:border-[#A31C1B]/50"
          >
            <h3 className="text-sm font-medium">
              {department.name}
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#8B938D]">
              {department.description}
            </p>

            <div className="mt-6 border-t border-[#303630] pt-4">
              <p className="text-xs text-[#777D78]">
                No members assigned
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
