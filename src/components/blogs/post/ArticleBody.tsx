function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2 className="font-sora text-[30px] leading-[36px] font-semibold tracking-[-0.5px] text-white">
      <span id={id} className="block scroll-mt-28">
        {children}
      </span>
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="pt-5 text-[17px] leading-[30px] text-[#c8c4bc]">{children}</p>
  );
}

export default function ArticleBody() {
  return (
    <article className="max-w-[830px]">
      <section>
        <SectionHeading id="the-hire-that-doesnt-fix-it">
          The Hire That Doesn&apos;t Fix It
        </SectionHeading>
        <P>
          Every operations leader has done it. The team is stretched. Emails
          are falling through the gaps. Processes that used to work stopped
          scaling somewhere around 40 people. The natural response: post a job
          for an Operations Coordinator.
        </P>
        <P>
          And for a few weeks — sometimes months — it helps. Things get
          tracked. Emails get answered. The coordinator absorbs the noise. But
          six months later, you&apos;re hiring again. Or the coordinator has
          burned out. Or the original problem has simply moved one layer down.
        </P>
        <P>
          The issue isn&apos;t the hire. The issue is what the hire was
          supposed to solve.
        </P>
      </section>

      <div className="mt-14 border-l-[1.6px] border-[#ff884c] py-2 pl-6">
        <p className="font-sora text-xl leading-7 tracking-[-0.3px] text-white">
          &quot;Adding a person to a broken process doesn&apos;t fix the
          process. It creates a human dependency on top of a structural
          fault.&quot;
        </p>
      </div>

      <section className="mt-10">
        <SectionHeading id="the-real-problem-is-upstream">
          The Real Problem Is Upstream
        </SectionHeading>
        <P>
          When operations feel chaotic, it&apos;s rarely because you
          don&apos;t have enough people managing the chaos. It&apos;s because
          the systems generating the chaos aren&apos;t designed well.
        </P>
        <P>
          Processes that require constant human intervention to stay on track
          are not processes — they&apos;re procedures held together by
          institutional knowledge and personal effort. They work fine at 20
          people. They start cracking at 50. They collapse at 100.
        </P>

        <div className="mt-8 border border-[#4b4949]/50 bg-[#0d0d0d] p-6">
          <p className="font-mono text-[10px] tracking-[2px] text-[#ff884c] uppercase">
            Common upstream problems
          </p>
          <ul className="mt-3 flex flex-col gap-3">
            {[
              "Approval workflows that live in someone's head or inbox",
              "Data that exists in three systems but never automatically syncs",
              "Handoffs between teams that depend on a weekly sync call",
              "Status tracking done by manually updating a spreadsheet",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-[#858382]">
                <span
                  aria-hidden
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#ff884c]"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <P>
          Each of these is a design problem. Not a staffing problem. Hiring
          someone to navigate broken design doesn&apos;t fix the design — it
          just ensures the workarounds are more consistently applied.
        </P>
      </section>

      <section className="mt-14">
        <SectionHeading id="the-coordinator-trap">
          The Coordinator Trap
        </SectionHeading>
        <P>
          Here&apos;s what usually happens after the hire. The new
          coordinator is sharp. They pick things up quickly. They document
          what they learn, build their own shortcuts, and become remarkably
          good at managing the dysfunction.
        </P>
        <P>
          Now you have two problems: the original broken process, and a
          single person who is the only one who knows how to navigate it. The
          dependency has deepened. The bus factor is now one.
        </P>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { value: "~6mo", label: "Until the coordinator is the process" },
            { value: "1", label: "Person holding critical operational knowledge" },
            { value: "0", label: "Underlying problems actually solved" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 border border-[#4b4949]/50 bg-[#0d0d0d] p-6"
            >
              <p className="font-sora text-4xl font-semibold tracking-[-1px] text-[#ff884c]">
                {stat.value}
              </p>
              <p className="text-xs text-[#858382]">{stat.label}</p>
            </div>
          ))}
        </div>

        <P>
          When that coordinator eventually leaves — and they will, because
          high-functioning people in dysfunction-management roles burn out —
          you lose the process entirely. You&apos;re back to square one,
          hiring again, and onboarding someone into chaos that has grown
          slightly more complex.
        </P>
      </section>

      <section className="mt-14">
        <SectionHeading id="what-actually-needs-fixing">
          What Actually Needs Fixing
        </SectionHeading>
        <P>
          Before you post the job, map the problem. Specifically: where are
          decisions getting stuck? Where is data being moved manually that
          should move automatically? Where are handoffs failing?
        </P>
        <P>
          In our experience working with B2B companies at scale, the answer is
          almost always one of three things:
        </P>

        <div className="mt-8 divide-y divide-[#4b4949]/40 border border-[#4b4949]/40">
          {[
            {
              title: "A missing or misconfigured integration",
              body: "Two systems that should talk to each other don't. A person fills the gap. Fix: build the integration. The person becomes unnecessary for that task.",
            },
            {
              title: "An approval flow that has no structure",
              body: "Decisions that require sign-off travel by email and Slack, accumulate in inboxes, and get lost. Fix: design the approval flow explicitly and enforce it in tooling.",
            },
            {
              title: "A reporting process that requires manual assembly",
              body: "Someone spends hours every week pulling numbers from different places to build a single view. Fix: connect the sources to a single reporting layer.",
            },
          ].map((item, i) => (
            <div key={item.title} className="flex gap-6 p-7">
              <span className="font-mono text-[11px] tracking-[2px] text-[#ff884c]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-sora text-base font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-[#858382]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <P>
          In each case, the solution is a systems change, not a headcount
          change. Once the system works, the human overhead drops —
          permanently, not just until the next hire.
        </P>
      </section>

      <section className="mt-14">
        <SectionHeading id="when-the-hire-makes-sense">
          When the Hire Actually Makes Sense
        </SectionHeading>
        <P>
          This isn&apos;t an argument against hiring operations people.
          It&apos;s an argument for sequencing the work correctly.
        </P>
        <P>
          A great ops hire — someone who comes in with process discipline and
          systems thinking — can be transformative. But only if they&apos;re
          hired to design and improve, not to absorb and endure.
        </P>
        <P>
          The right time to hire is after you&apos;ve understood your
          operational failures clearly enough to describe them precisely. Not
          &quot;we&apos;re overwhelmed&quot; — but &quot;our customer
          onboarding fails at the document collection step because we have no
          structured handoff between sales and operations.&quot;
        </P>

        <div className="mt-8 flex items-center gap-4">
          <span aria-hidden className="h-px flex-1 bg-[#4b4949]/40" />
          <p className="font-mono text-[10px] tracking-[2px] text-[#4b4949] uppercase">
            The right order
          </p>
          <span aria-hidden className="h-px flex-1 bg-[#4b4949]/40" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { tag: "First", text: "Map where it's breaking and why" },
            { tag: "Then", text: "Fix the structural / systems issue" },
            { tag: "Then", text: "Hire someone to build on a clean foundation" },
          ].map((step, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 border border-[#4b4949]/40 bg-[#0d0d0d] p-5"
            >
              <p className="font-mono text-[9px] tracking-[2px] text-[#ff884c] uppercase">
                {step.tag}
              </p>
              <p className="text-sm text-white">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading id="the-takeaway">The Takeaway</SectionHeading>
        <P>
          If you&apos;re about to hire an ops coordinator because things feel
          chaotic, pause for two weeks first. Spend that time mapping the
          chaos — not managing it. Trace every failure to its source. Ask
          whether a better-designed system would eliminate the need for the
          role entirely.
        </P>
        <P>
          Sometimes the answer is no. Sometimes you genuinely need the person.
          But often, you&apos;ll find that three to five systems changes would
          do more than any hire — and would make the eventual hire far more
          effective.
        </P>
        <p className="pt-5 text-[17px] leading-[30px] text-white">
          Operations should scale through design, not headcount. The
          companies that figure that out early are the ones that don&apos;t
          spend the next three years re-hiring for the same problem.
        </p>
      </section>
    </article>
  );
}
