
export default function Home() {
  return (
    <main className="mx-auto min-h-[calc(100vh-65px)] max-w-[1400px] px-6 py-9 md:px-9 md:py-11">

      {/* Page Heading */}
      <section className="mb-10">
        <p className="mb-2 text-xs text-[#8B938D]">
          WEDNESDAY, NOVEMBER 11
        </p>

        <h1 className="text-[27px] font-medium tracking-tight">
          Overview
        </h1>

        <p className="mt-2 text-sm text-[#8B938D]">
          Your startup workspace, all in one place.
        </p>
      </section>

      {/* Workspace Summary */}
      <section className="mb-10 border-y border-[#303630] py-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs text-[#8B938D]">Projects</p>
            <p className="mt-2 text-sm font-medium">
              No projects yet
            </p>
          </div>

          <div>
            <p className="text-xs text-[#8B938D]">Tasks</p>
            <p className="mt-2 text-sm font-medium">
              No tasks yet
            </p>
          </div>

          <div>
            <p className="text-xs text-[#8B938D]">Team</p>
            <p className="mt-2 text-sm font-medium">
              No members yet
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">

        {/* Projects */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-medium">
              Recent projects
            </h2>

            <span className="text-xs text-[#8B938D]">
              View all
            </span>
          </div>

          <div className="border-y border-[#303630] py-12 text-center">
            <p className="text-sm text-[#D8DDD9]">
              No projects created yet
            </p>

            <p className="mt-2 text-xs text-[#777D78]">
              Your projects will appear here when you create them.
            </p>
          </div>
        </div>

        {/* Activity */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-medium">
              Recent activity
            </h2>

            <span className="text-xs text-[#8B938D]">
              All activity
            </span>
          </div>

          <div className="border-y border-[#303630] py-12 text-center">
            <p className="text-sm text-[#D8DDD9]">
              Nothing to show yet
            </p>

            <p className="mt-2 text-xs text-[#777D78]">
              Workspace updates will appear here.
            </p>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-[#252B27] pt-5">
        <p className="text-[11px] text-[#69716B]">
          FYNEST — Your venture. Your workspace.
        </p>
      </footer>

    </main>
  );
}
