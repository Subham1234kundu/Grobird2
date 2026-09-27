import ArrowIcon from "@/components/ui/ArrowIcon";
type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "subheading"; text: string }
  | { type: "contact" };

type Section = {
  number: string;
  id: string;
  heading: string;
  blocks: Block[];
};

const SECTIONS: Section[] = [
  {
    number: "01",
    id: "acceptance-of-terms",
    heading: "Acceptance of Terms",
    blocks: [
      {
        type: "p",
        text: `By accessing or using any services provided by GroBird ("Company", "we", "our", or "us"), you agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these terms.`,
      },
      {
        type: "p",
        text: "If you do not agree to these terms, you may not use our services. Your continued use of our services after any modifications to these terms shall constitute your consent to such modifications.",
      },
      {
        type: "callout",
        text: "These terms apply to all visitors, users, clients, and others who access or use our services, including but not limited to our web-based platforms, consulting engagements, and technology implementation services.",
      },
    ],
  },
  {
    number: "02",
    id: "services",
    heading: "Services",
    blocks: [
      {
        type: "p",
        text: "GroBird provides operations and technology implementation services for B2B companies, including but not limited to:",
      },
      {
        type: "list",
        items: [
          "Revenue cycle management and healthcare operations automation",
          "Fintech operations infrastructure and compliance workflow automation",
          "Technology partner programs and integration support",
          "Custom software development and systems integration",
          "Process consulting and workflow optimization",
        ],
      },
      {
        type: "p",
        text: "The specific scope of services provided to each client is outlined in a separate Statement of Work (SOW) or Master Services Agreement (MSA), which forms part of the overall agreement between GroBird and the client. In the event of any conflict between these Terms and a SOW or MSA, the more specific document shall control.",
      },
      {
        type: "p",
        text: "We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice to affected clients. We will not be liable for any modification, suspension, or discontinuation of services.",
      },
    ],
  },
  {
    number: "03",
    id: "client-responsibilities",
    heading: "Client Responsibilities",
    blocks: [
      { type: "p", text: "To enable GroBird to deliver services effectively, clients agree to:" },
      {
        type: "list",
        items: [
          "Provide timely access to required systems, data, and personnel as reasonably requested",
          "Designate a primary point of contact with authority to make decisions on the client's behalf",
          "Review and provide feedback on deliverables within agreed timelines",
          "Ensure that any data, content, or materials provided to GroBird do not infringe the rights of any third party",
          "Maintain adequate security practices within their own systems and environments",
          "Comply with all applicable laws and regulations relevant to their business operations",
        ],
      },
      {
        type: "p",
        text: "Client acknowledges that delays in fulfilling these responsibilities may impact delivery timelines. GroBird is not liable for delays resulting from client's failure to meet these obligations.",
      },
    ],
  },
  {
    number: "04",
    id: "intellectual-property",
    heading: "Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "Unless otherwise specified in a written agreement, the following intellectual property terms apply:",
      },
      { type: "subheading", text: "GroBird IP" },
      {
        type: "p",
        text: "All pre-existing methodologies, frameworks, tools, templates, and know-how developed by GroBird remain the exclusive property of GroBird. Nothing in these terms grants any rights to GroBird's proprietary intellectual property beyond what is necessary to receive the services.",
      },
      { type: "subheading", text: "Client IP" },
      {
        type: "p",
        text: "Client retains ownership of all pre-existing intellectual property provided to GroBird. Client grants GroBird a limited, non-exclusive license to use such materials solely for the purpose of delivering the agreed services.",
      },
      { type: "subheading", text: "Work Product" },
      {
        type: "p",
        text: "Upon full payment of all fees, custom deliverables created specifically for a client under a SOW will be assigned to the client, excluding any GroBird proprietary components. Specific IP ownership terms may vary per SOW.",
      },
    ],
  },
  {
    number: "05",
    id: "confidentiality",
    heading: "Confidentiality",
    blocks: [
      {
        type: "p",
        text: "Both parties acknowledge that in connection with the services, each may receive or have access to confidential information of the other party. Each party agrees to:",
      },
      {
        type: "list",
        items: [
          "Keep all confidential information strictly confidential",
          "Not disclose confidential information to any third party without prior written consent",
          "Use confidential information solely for the purpose of performing under these Terms",
          "Protect confidential information with at least the same degree of care used for its own confidential information (no less than reasonable care)",
        ],
      },
      {
        type: "p",
        text: "Confidential information does not include information that: (a) is or becomes publicly known through no breach of this agreement; (b) was rightfully known before receipt; (c) is rightfully obtained from a third party without restriction; or (d) is independently developed without use of confidential information.",
      },
      {
        type: "callout",
        text: "These confidentiality obligations survive termination of the agreement for a period of three (3) years.",
      },
    ],
  },
  {
    number: "06",
    id: "payment-terms",
    heading: "Payment Terms",
    blocks: [
      {
        type: "p",
        text: "Payment terms for services are outlined in each SOW or project agreement. Unless otherwise specified:",
      },
      {
        type: "list",
        items: [
          "Invoices are due within thirty (30) days of the invoice date",
          "Late payments accrue interest at 1.5% per month or the maximum allowable rate, whichever is lower",
          "GroBird reserves the right to suspend services for accounts more than 30 days past due",
          "All fees are stated in USD unless otherwise agreed in writing",
          "Retainer fees are non-refundable unless services cannot be delivered due to GroBird's failure",
        ],
      },
      {
        type: "p",
        text: "Disputed invoices must be raised in writing within ten (10) business days of receipt. Undisputed portions of invoices remain due per the standard payment terms. Failure to dispute within this window shall be deemed acceptance of the invoice.",
      },
    ],
  },
  {
    number: "07",
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent permitted by applicable law, GroBird's total cumulative liability arising out of or related to these Terms or the services — whether in contract, tort, or otherwise — shall not exceed the total fees paid by the client to GroBird in the three (3) months immediately preceding the event giving rise to the claim.",
      },
      {
        type: "p",
        text: "In no event shall GroBird be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including but not limited to loss of revenue, loss of profits, loss of business, loss of data, or loss of goodwill, even if GroBird has been advised of the possibility of such damages.",
      },
      {
        type: "callout",
        text: "Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability. In such jurisdictions, GroBird's liability is limited to the maximum extent permitted by law.",
      },
    ],
  },
  {
    number: "08",
    id: "termination",
    heading: "Termination",
    blocks: [
      {
        type: "p",
        text: "Either party may terminate the agreement with thirty (30) days written notice, unless a different notice period is specified in the applicable SOW. Immediate termination may occur if:",
      },
      {
        type: "list",
        items: [
          "The other party materially breaches these Terms and fails to cure within fifteen (15) days of written notice",
          "The other party becomes insolvent or files for bankruptcy protection",
          "Continued performance would require either party to violate applicable law",
        ],
      },
      {
        type: "p",
        text: "Upon termination, all outstanding invoices become immediately due and payable. Client shall promptly return or destroy all GroBird confidential information. Sections on Intellectual Property, Confidentiality, Limitation of Liability, and Governing Law survive termination.",
      },
    ],
  },
  {
    number: "09",
    id: "governing-law",
    heading: "Governing Law",
    blocks: [
      {
        type: "p",
        text: "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which GroBird is incorporated, without regard to conflict of law principles.",
      },
      {
        type: "p",
        text: "Any disputes arising from or relating to these Terms shall first be subject to good-faith negotiation between the parties for a period of thirty (30) days. If unresolved, disputes shall be submitted to binding arbitration under the rules of a mutually agreed arbitration body, except that either party may seek injunctive relief in any court of competent jurisdiction.",
      },
    ],
  },
  {
    number: "10",
    id: "changes-to-terms",
    heading: "Changes to Terms",
    blocks: [
      {
        type: "p",
        text: "GroBird reserves the right to update these Terms at any time. Material changes will be communicated to active clients via email at least thirty (30) days before taking effect. Continued use of our services after changes take effect constitutes acceptance of the revised Terms.",
      },
      {
        type: "p",
        text: "The most current version of these Terms will always be available on our website. If you have questions about any changes, please contact us at legal@grobird.io.",
      },
      { type: "contact" },
    ],
  },
];

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "p":
      return (
        <p
          key={key}
          className="max-w-[764px] text-[14.5px] leading-[27px] text-white/45"
        >
          {block.text}
        </p>
      );
    case "list":
      return (
        <div key={key} className="flex flex-col">
          {block.items.map((item) => (
            <p key={item} className="text-[14.5px] leading-[27px] text-white/45">
              {item}
            </p>
          ))}
        </div>
      );
    case "callout":
      return (
        <div key={key} className="w-full py-2">
          <div className="border-l-[1.6px] border-[#ff884c] bg-[#ff884c]/5 py-4 pr-4 pl-5">
            <p className="max-w-[726px] text-[13px] leading-6 text-white/50">
              {block.text}
            </p>
          </div>
        </div>
      );
    case "subheading":
      return (
        <h3
          key={key}
          className="pt-2 text-[15px] font-semibold text-white/70"
        >
          {block.text}
        </h3>
      );
    case "contact":
      return (
        <div
          key={key}
          className="mt-10 w-full border border-white/[0.08] bg-white/[0.02] p-6"
        >
          <p className="font-mono text-[9px] tracking-[2px] text-[#ff884c] uppercase">
            Questions about these terms?
          </p>
          <p className="pt-3 pb-4 text-sm text-white/40">
            Our team is happy to walk you through anything in these Terms
            before you engage our services.
          </p>
          <a
            href="mailto:legal@grobird.io"
            className="inline-flex items-center gap-1.5 bg-[#ff884c] px-5 py-2.5 text-xs font-semibold text-black"
          >
            Contact legal@grobird.io
            <ArrowIcon direction="right" className="size-3.5" />
          </a>
        </div>
      );
  }
}

export default function TermsArticle() {
  return (
    <div className="flex-1 lg:max-w-[928px]">
      {SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-24 border-t border-white/[0.06] py-12 first:border-t-0"
        >
          <div className="flex items-start gap-6">
            <span className="pt-1 font-mono text-[11px] tracking-[1px] text-white/15">
              {section.number}
            </span>
            <h2 className="font-sora text-2xl font-semibold tracking-[-0.3px] text-white">
              {section.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-4 pt-6 pl-[35px]">
            {section.blocks.map((block, i) => renderBlock(block, i))}
          </div>
        </section>
      ))}
    </div>
  );
}
