
const navigation = [
  { label: "Overview", symbol: "◫", active: true },
  { label: "My Workspace", symbol: "▦" },
  { label: "Document Vault", symbol: "▤" },
  { label: "Meetings & Contacts", symbol: "◎" },
  { label: "Team & Departments", symbol: "♧" },
  { label: "Tasks & Projects", symbol: "☷" },
  { label: "Calendar & Deadlines", symbol: "▦" },
  { label: "AI Assistant", symbol: "✳" },
];

const stats = [
  { label: "Active Projects", value: "08", note: "Projects in progress" },
  { label: "Pending Tasks", value: "24", note: "Tasks need attention" },
  { label: "Team Members", value: "12", note: "Across all departments" },
  { label: "Documents", value: "156", note: "Stored in your vault" },
];

const tasks = [
  { title: "Finalize investor pitch deck", project: "Fundraising", date: "Today", status: "In Progress" },
  { title: "Review product roadmap", project: "Product", date: "Tomorrow", status: "Pending" },
  { title: "Schedule team meeting", project: "Operations", date: "Nov 14", status: "Pending" },
];

const activities = [
  { title: "New document uploaded", detail: "Investor Pitch Deck.pdf", time: "10 minutes ago" },
  { title: "Project updated", detail: "Product Development", time: "1 hour ago" },
  { title: "New team member added", detail: "Design Department", time: "Yesterday" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030407] text-[#F5F5F5] md:flex">
      {/* Sidebar */}
      <aside className="w-full border-b border-[#282D37] bg-[#0D1017] p-5 md:min-h-screen md:w-[250px] md:border-b-0 md:border-r">
        <div className="mb-9 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1558C9] font-bold text-white">
            F
          </div>
          <span className="text-xl font-bold tracking-[0.18em]">FYNEST</span>
        </div>

        <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#717784]">
          WORKSPACE
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm ${
                item.active
                  ? "border border-[#1558C9]/30 bg-[#1558C9]/15 text-white"
                  : "text-[#A1A1AA] hover:bg-[#191D26] hover:text-white"
              }`}
            >
              <span className="w-5 text-center">{item.symbol}</span>
              {item.label}
              {item.active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#D4FF24]" />
              )}
            </div>
          ))}
        </nav>

        <div className="mt-10 border-t border-[#282D37] pt-5">
          <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#717784]">
            ACCOUNT
          </p>
          <div className="rounded-lg px-3 py-3 text-sm text-[#A1A1AA]">
            ⚙ Settings & Permissions
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-[#282D37] bg-[#111318] p-4">
          <p className="text-xs font-semibold text-white">Your venture workspace</p>
          <p className="mt-2 text-xs leading-5 text-[#A1A1AA]">
            One place to manage your startup and your team.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <section className="min-w-0 flex-1">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#282D37] px-6 py-5 lg:px-9">
          <div>
            <p className="text-xs text-[#A1A1AA]">Workspace / Overview</p>
            <h2 className="mt-1 text-lg font-semibold">Overview</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden rounded-lg border border-[#282D37] bg-[#111318] px-4 py-2 text-xs text-[#717784] sm:block">
              Search anything...
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#282D37] text-sm">
              ♧
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1558C9] text-xs font-bold">
              AR
            </div>
          </div>
        </header>

        {/* Dashboard */}
        <div className="space-y-8 p-6 lg:p-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm text-[#D4FF24]">YOUR COMMAND CENTER</p>
              <h1 className="text-3xl font-semibold tracking-tight">
                Welcome back, Founder.
              </h1>
              <p className="mt-2 text-sm text-[#A1A1AA]">
                Here's what's happening across your venture today.
              </p>
            </div>

            <button className="rounded-lg bg-[#1558C9] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              + Create New
            </button>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[#282D37] bg-[#111318] p-5"
              >
                <p className="text-sm text-[#A1A1AA]">{stat.label}</p>
                <p className="mt-4 text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-[#717784]">{stat.note}</p>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
            <div className="rounded-xl border border-[#282D37] bg-[#111318] p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">Your Tasks</h2>
                  <p className="mt-1 text-xs text-[#A1A1AA]">
                    Keep track of important work
                  </p>
                </div>
                <button className="text-xs text-[#D4FF24]">View all →</button>
              </div>

              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.title}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#282D37] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-4 w-4 rounded border border-[#717784]" />
                      <div>
                        <p className="text-sm font-medium">{task.title}</p>
                        <p className="mt-1 text-xs text-[#717784]">
                          {task.project} · {task.date}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-[#A1A1AA]">{task.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#282D37] bg-[#111318] p-5">
              <h2 className="font-semibold">Recent Activity</h2>
              <p className="mt-1 text-xs text-[#A1A1AA]">
                Latest workspace updates
              </p>

              <div className="mt-6 space-y-6">
                {activities.map((activity) => (
                  <div key={activity.title} className="flex gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#1558C9]" />
                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="mt-1 text-xs text-[#A1A1AA]">
                        {activity.detail}
                      </p>
                      <p className="mt-2 text-[11px] text-[#717784]">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="rounded-xl border border-[#282D37] bg-[#111318] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-semibold">Build your venture with FYNEST</h2>
                <p className="mt-2 text-sm text-[#A1A1AA]">
                  Your documents, people, projects and decisions. All connected.
                </p>
              </div>
              <span className="text-xs font-semibold tracking-wider text-[#D4FF24]">
                ONE WORKSPACE. COMPLETE CONTROL.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
