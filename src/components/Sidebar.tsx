
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Overview", href: "/" },
  { label: "My Workspace", href: "/workspace" },
  { label: "Documents", href: "/documents" },
  { label: "Meetings & Contacts", href: "/meetings" },
  { label: "Team & Departments", href: "/team" },
  { label: "Tasks & Projects", href: "/projects" },
  { label: "Calendar", href: "/calendar" },
  { label: "AI Assistant", href: "/assistant" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-[#252B27] bg-[#171717] px-5 py-6 md:min-h-screen md:w-[240px] md:border-b-0 md:border-r">

      {/* Brand */}
      <Link href="/" className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-8 w-8 items-center justify-center bg-[#A31C1B] text-sm font-semibold text-white">
          F
        </div>

        <span className="text-[17px] font-semibold tracking-[0.16em]">
          FYNEST
        </span>
      </Link>

      {/* Workspace */}
      <div className="mb-8 rounded-md border border-[#303030] px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-[#777D78]">
          Workspace
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-medium">My Startup</span>
          <span className="text-xs text-[#777D78]">⌄</span>
        </div>
      </div>

      {/* Navigation */}
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#777D78]">
        Workspace
      </p>

      <nav className="space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 border-l-2 px-3 py-[10px] text-[13px] transition-colors ${
                isActive
                  ? "border-[#A31C1B] bg-[#252B27] text-white"
                  : "border-transparent text-[#A3AAA5] hover:bg-[#222522] hover:text-white"
              }`}
            >
              <span
                className={`h-[6px] w-[6px] rounded-full ${
                  isActive ? "bg-[#A31C1B]" : "bg-[#59615B]"
                }`}
              />

              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Account */}
      <div className="mt-8 border-t border-[#303030] pt-5 md:mt-auto">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#303030] text-xs font-medium">
            AR
          </div>

          <div>
            <p className="text-xs font-medium">Founder Account</p>
            <p className="mt-1 text-[10px] text-[#777D78]">
              Personal workspace
            </p>
          </div>
        </div>

        <Link
          href="/settings"
          className={`mt-5 block px-2 text-xs transition-colors ${
            pathname === "/settings"
              ? "text-white"
              : "text-[#777D78] hover:text-white"
          }`}
        >
          Settings & Permissions
        </Link>
      </div>
    </aside>
  );
}
