
export default function WorkspacePage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-65px)] max-w-[1400px] px-6 py-9 md:px-9 md:py-11">
      <div className="mb-10">
        <p className="mb-2 text-xs text-[#8B938D]">
          WORKSPACE
        </p>

        <h1 className="text-[27px] font-medium tracking-tight">
          My Workspace
        </h1>

        <p className="mt-2 text-sm text-[#8B938D]">
          Manage your personal work and startup information.
        </p>
      </div>

      <div className="border-y border-[#303630] py-12 text-center">
        <h2 className="text-sm font-medium">
          Your workspace is empty
        </h2>

        <p className="mt-2 text-xs text-[#8B938D]">
          Your personal files, notes and work will appear here.
        </p>
      </div>
    </main>
  );
}
