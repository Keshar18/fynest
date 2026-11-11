
const projectStatuses = [
  { name: "Not Started", description: "Projects waiting to begin" },
  { name: "In Progress", description: "Currently active projects" },
  { name: "Completed", description: "Successfully finished projects" },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-65px)] max-w-[1400px] px-6 py-9 md:px-9 md:py-11">
      <div className="mb-10">
        <p className="mb-2 text-xs text-[#8B938D]">
          WORKSPACE / PROJECTS
        </p>

        <h1 className="text-[27px] font-medium tracking-tight">
          Tasks & Projects
        </h1>

        <p className="mt-2 text-sm text-[#8B938D]">
          Plan work, manage responsibilities and track progress.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium">All projects</h2>
          <p className="mt-1 text-xs text-[#8B938D]">
            Your startup projects and tasks.
          </p>
        </div>

        <button className="bg-[#A31C1B] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#871716]">
          + Create project
        </button>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {projectStatuses.map((status) => (
          <div
            key={status.name}
            className="border border-[#303630] bg-[#171717] p-5"
          >
            <h3 className="text-sm font-medium">{status.name}</h3>

            <p className="mt-2 text-xs text-[#8B938D]">
              {status.description}
            </p>

            <div className="mt-8 border-t border-[#303630] pt-5">
              <p className="text-xs text-[#777D78]">
                No projects
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
