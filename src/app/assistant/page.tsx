
const suggestedQuestions = [
  "Summarize my recent meetings",
  "Show my pending tasks",
  "Find important upcoming deadlines",
  "Summarize my startup documents",
];

export default function AssistantPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-65px)] max-w-[1400px] px-6 py-9 md:px-9 md:py-11">
      <div className="mb-10">
        <p className="mb-2 text-xs text-[#8B938D]">
          WORKSPACE / AI ASSISTANT
        </p>

        <h1 className="text-[27px] font-medium tracking-tight">
          AI Assistant
        </h1>

        <p className="mt-2 text-sm text-[#8B938D]">
          Your intelligent assistant for startup information and decisions.
        </p>
      </div>

      <section className="mx-auto max-w-[760px]">
        <div className="border border-[#303630] bg-[#171717] p-6 md:p-8">
          <h2 className="text-lg font-medium">
            How can I help you today?
          </h2>

          <p className="mt-2 text-sm text-[#8B938D]">
            Ask questions about your workspace, meetings, documents and tasks.
          </p>

          <div className="mt-8 space-y-3">
            {suggestedQuestions.map((question) => (
              <div
                key={question}
                className="border border-[#303630] px-4 py-3 text-sm text-[#C5CBC6] transition hover:border-[#A31C1B]/50"
              >
                {question}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 border border-[#303630] px-4 py-3">
            <input
              type="text"
              placeholder="Ask anything about your startup..."
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#777D78]"
            />

            <button
              type="button"
              className="bg-[#A31C1B] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#871716]"
            >
              Send
            </button>
          </div>

          <p className="mt-4 text-[11px] text-[#777D78]">
            AI responses will be connected to your authorized workspace data.
          </p>
        </div>
      </section>
    </main>
  );
}
