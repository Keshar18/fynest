
const categories = [
  { name: "Company Documents", description: "Registration, legal and compliance records" },
  { name: "Financial Documents", description: "Budgets, invoices and financial reports" },
  { name: "Investor Documents", description: "Pitch decks, proposals and funding records" },
  { name: "Team Documents", description: "Policies, contracts and internal records" },
];

export default function DocumentsPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-65px)] max-w-[1400px] px-6 py-9 md:px-9 md:py-11">
      <div className="mb-10">
        <p className="mb-2 text-xs text-[#8B938D]">WORKSPACE / DOCUMENTS</p>
        <h1 className="text-[27px] font-medium tracking-tight">
          Document Vault
        </h1>
        <p className="mt-2 text-sm text-[#8B938D]">
          Store and organize your startup documents in one place.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium">All documents</h2>
          <p className="mt-1 text-xs text-[#8B938D]">
            Your organized document library
          </p>
        </div>

        <button className="bg-[#A31C1B] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#871716]">
          + Upload document
        </button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.name}
            className="border border-[#303630] bg-[#171717] p-5 transition hover:border-[#A31C1B]/50"
          >
            <h3 className="text-sm font-medium">{category.name}</h3>
            <p className="mt-2 text-xs text-[#8B938D]">
              {category.description}
            </p>
            <p className="mt-6 text-xs text-[#777D78]">
              No documents yet
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
