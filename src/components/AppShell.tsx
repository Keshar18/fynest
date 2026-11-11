
import Sidebar from "./Sidebar";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#06110C] text-[#F1F3F1] md:flex">
      <Sidebar />

      <div className="min-w-0 flex-1">
        {/* Topbar */}
        <header className="flex min-h-[65px] items-center justify-between border-b border-[#252B27] px-6 md:px-9">
          <div className="text-xs text-[#8B938D]">
            FYNEST <span className="mx-2">/</span>
            <span className="text-white">Workspace</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden text-xs text-[#8B938D] sm:block">
              Search
              <kbd className="ml-2 border border-[#303630] px-1.5 py-1 text-[10px]">
                Ctrl K
              </kbd>
            </span>

            <div className="h-4 w-px bg-[#303630]" />

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#303630] text-[11px] font-medium">
              AR
            </div>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}
