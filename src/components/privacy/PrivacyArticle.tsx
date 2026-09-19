type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "labeled-list"; items: { label: string; text: string }[] }
  | { type: "callout"; text: string }
  | { type: "subheading"; text: string }
  | { type: "email-note"; prefix: string; email: string; suffix?: string }
  | { type: "contact-grid" }
  | { type: "response-note" };

type Section = {
  number: string;
  id: string;
  heading: string;
  blocks: Block[];
};

const SECTIONS: Section[] = [
  {
    number: "01",
    id: "information-we-collect",
    heading: "Information We Collect",
    blocks: [
      {
        type: "p",
        text: "We collect information in connection with our services, our website, and our business relationships. The categories of information we may collect include:",
      },
      { type: "subheading", text: "Information you provide directly" },
      {
        type: "list",
        items: [
          "Contact information (name, email address, phone number, job title, organization name)",
          "Business information provided in the course of scoping or delivering services",
          "Communications you send us via email, contact forms, or other channels",
          "Account credentials for platforms we access on your behalf under a service agreement",
        ],
      },
      { type: "subheading", text: "Information collected automatically" },
      {
        type: "list",
        items: [
          "Website usage data including pages visited, time on site, and referring URLs",
          "Device information including browser type, operating system, and IP address",
          "Cookies and similar tracking technologies (see Section 07)",
        ],
      },
      { type: "subheading", text: "Information from third parties" },
      {
        type: "p",
        text: "We may receive information about you from business partners, publicly available sources, and data enrichment providers, which we use to better understand our prospective and current clients.",
      },
    ],
  },
  {
    number: "02",
    id: "how-we-use-information",
    heading: "How We Use Information",
    blocks: [
      { type: "p", text: "We use the information we collect to:" },
      {
        type: "list",
        items: [
          "Deliver, operate, and improve our services",
          "Communicate with you about your engagement, support requests, and service updates",
          "Send relevant business communications and, where permitted, marketing about our services",
          "Generate anonymized, aggregated insights about operations and industry trends",
          "Comply with legal obligations and enforce our agreements",
          "Protect the security and integrity of our systems and services",
        ],
      },
      {
        type: "callout",
        text: "We do not sell personal information to third parties. We do not use personal information for automated decision-making that produces legal or similarly significant effects.",
      },
      {
        type: "p",
        text: "Our legal basis for processing personal data (where applicable under GDPR or similar frameworks) is typically: (a) performance of a contract; (b) legitimate interests; or (c) your consent where explicitly requested.",
      },
    ],
  },
  {
    number: "03",
    id: "information-sharing",
    heading: "Information Sharing",
    blocks: [
      {
        type: "p",
        text: "We do not sell, trade, or rent personal information. We may share information in the following limited circumstances:",
      },
      { type: "subheading", text: "Service providers" },
      {
        type: "p",
        text: "We engage trusted third-party vendors to support our operations — including cloud hosting, communication tools, analytics platforms, and payment processors. These vendors are contractually bound to process data only as directed by us and under appropriate security standards.",
      },
      { type: "subheading", text: "Business transfers" },
      {
        type: "p",
        text: "In the event of a merger, acquisition, or sale of assets, client data may be transferred as part of that transaction. We will provide notice before personal information is transferred and becomes subject to a different privacy policy.",
      },
      { type: "subheading", text: "Legal requirements" },
      {
        type: "p",
        text: "We may disclose information when required by law, court order, or government authority, or when we believe in good faith that disclosure is necessary to protect the rights, property, or safety of GroBird, our clients, or others.",
      },
    ],
  },
  {
    number: "04",
    id: "data-security",
    heading: "Data Security",
    blocks: [
      {
        type: "p",
        text: "We implement industry-standard technical and organizational measures to protect personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:",
      },
      {
        type: "list",
        items: [
          "Encryption of data in transit using TLS 1.2 or higher",
          "Encryption of sensitive data at rest",
          "Access controls and role-based permissions for internal systems",
          "Regular security assessments and vulnerability reviews",
          "Employee training on data handling and security practices",
        ],
      },
      {
        type: "p",
        text: "Despite these measures, no security system is impenetrable. We cannot guarantee the absolute security of information transmitted over the internet. In the event of a data breach that affects your personal information, we will notify you as required by applicable law.",
      },
      {
        type: "email-note",
        prefix: "If you suspect any unauthorized access to or misuse of your information, contact us immediately at ",
        email: "security@grobird.io",
        suffix: ".",
      },
    ],
  },
  {
    number: "05",
    id: "data-retention",
    heading: "Data Retention",
    blocks: [
      {
        type: "p",
        text: "We retain personal information for as long as necessary to fulfill the purposes for which it was collected, to comply with our legal obligations, and to resolve disputes or enforce our agreements.",
      },
      { type: "p", text: "Specifically:" },
      {
        type: "list",
        items: [
          "Client engagement data is retained for the duration of the contract plus seven (7) years for legal and accounting purposes",
          "Marketing contact data is retained until you opt out or request deletion",
          "Website analytics data is retained for up to twenty-four (24) months",
          "Communications are retained for five (5) years unless otherwise required",
        ],
      },
      {
        type: "p",
        text: "When retention periods expire, data is securely deleted or anonymized so it can no longer be associated with an individual.",
      },
    ],
  },
  {
    number: "06",
    id: "your-rights",
    heading: "Your Rights",
    blocks: [
      {
        type: "p",
        text: "Depending on your location, you may have certain rights regarding your personal information. These may include:",
      },
      {
        type: "labeled-list",
        items: [
          { label: "Access:", text: "Request a copy of the personal information we hold about you" },
          { label: "Correction:", text: "Request correction of inaccurate or incomplete information" },
          { label: "Deletion:", text: "Request deletion of your personal information (subject to legal retention obligations)" },
          { label: "Portability:", text: "Receive your data in a structured, machine-readable format" },
          { label: "Objection:", text: "Object to processing based on legitimate interests" },
          { label: "Restriction:", text: "Request restriction of processing in certain circumstances" },
          { label: "Opt-out of marketing:", text: "Unsubscribe from marketing communications at any time" },
        ],
      },
      {
        type: "email-note",
        prefix: "To exercise any of these rights, contact us at ",
        email: "privacy@grobird.io",
        suffix: ". We will respond within 30 days. We may need to verify your identity before fulfilling a request.",
      },
    ],
  },
  {
    number: "07",
    id: "cookies-tracking",
    heading: "Cookies & Tracking",
    blocks: [
      {
        type: "p",
        text: "Our website uses cookies and similar tracking technologies to improve functionality and understand how visitors interact with our site. The types of cookies we use include:",
      },
      {
        type: "labeled-list",
        items: [
          { label: "Essential cookies:", text: "Required for core website functionality. Cannot be disabled." },
          { label: "Analytics cookies:", text: "Help us understand website usage patterns (e.g. Google Analytics). Anonymized where possible." },
          { label: "Preference cookies:", text: "Remember your settings and choices to improve your experience." },
          { label: "Marketing cookies:", text: "Track your activity to deliver relevant advertising. Only used with your consent." },
        ],
      },
      {
        type: "p",
        text: "You can manage cookie preferences through your browser settings or a cookie consent tool displayed on your first visit to our website. Note that disabling certain cookies may affect website functionality.",
      },
    ],
  },
  {
    number: "08",
    id: "third-party-services",
    heading: "Third-Party Services",
    blocks: [
      {
        type: "p",
        text: "Our website and services may contain links to or integrations with third-party platforms and tools. This Privacy Policy does not apply to third-party services. We encourage you to review the privacy policies of any third-party services you access through our platform.",
      },
      {
        type: "p",
        text: "Current third-party services we work with include (but are not limited to) cloud infrastructure providers, CRM platforms, analytics services, and payment processors. Each is governed by their own privacy terms and data processing agreements with GroBird.",
      },
    ],
  },
  {
    number: "09",
    id: "international-transfers",
    heading: "International Transfers",
    blocks: [
      {
        type: "p",
        text: "GroBird operates globally and may transfer personal information across international borders. When we transfer personal data from the European Economic Area (EEA), United Kingdom, or Switzerland, we use appropriate safeguards such as:",
      },
      {
        type: "list",
        items: [
          "Standard Contractual Clauses (SCCs) approved by the European Commission",
          "Adequacy decisions where the receiving country is deemed to provide adequate data protection",
          "Binding Corporate Rules where applicable",
        ],
      },
      {
        type: "callout",
        text: "If you have questions about the safeguards we use for international data transfers, contact us at privacy@grobird.io.",
      },
    ],
  },
  {
    number: "10",
    id: "changes-to-policy",
    heading: "Changes to Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other reasons. When we make material changes, we will notify you by:",
      },
      {
        type: "list",
        items: [
          "Posting a prominent notice on our website prior to the change becoming effective",
          "Sending an email to clients and contacts for whom we have an email address",
        ],
      },
      {
        type: "p",
        text: "Your continued use of our services or website after changes take effect constitutes acceptance of the revised policy.",
      },
    ],
  },
  {
    number: "11",
    id: "contact-us",
    heading: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
      },
      { type: "contact-grid" },
      { type: "response-note" },
    ],
  },
];

const CONTACT_GRID = [
  { label: "General privacy inquiries", email: "privacy@grobird.io" },
  { label: "Data security concerns", email: "security@grobird.io" },
  { label: "Legal & compliance", email: "legal@grobird.io" },
  { label: "Subject access requests", email: "privacy@grobird.io" },
];

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-[764px] text-[14.5px] leading-[27px] text-white/45">
      {children}
    </p>
  );
}

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "p":
      return <P key={key}>{block.text}</P>;
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
    case "labeled-list":
      return (
        <div key={key} className="flex flex-col">
          {block.items.map((item) => (
            <p key={item.label} className="text-[14.5px] leading-[27px]">
              <span className="font-semibold text-white/60">{item.label}</span>{" "}
              <span className="text-white/45">{item.text}</span>
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
        <h3 key={key} className="pt-2 text-[15px] font-semibold text-white/70">
          {block.text}
        </h3>
      );
    case "email-note":
      return (
        <p key={key} className="max-w-[764px] text-[14.5px] leading-[27px] text-white/45">
          {block.prefix}
          <a href={`mailto:${block.email}`} className="text-[#ff884c]">
            {block.email}
          </a>
          {block.suffix}
        </p>
      );
    case "contact-grid":
      return (
        <div key={key} className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
          {CONTACT_GRID.map((item) => (
            <div
              key={item.label}
              className="border border-white/[0.08] bg-white/[0.02] px-5 py-4"
            >
              <p className="pb-1.5 font-mono text-[9px] tracking-[2px] text-white/20 uppercase">
                {item.label}
              </p>
              <a href={`mailto:${item.email}`} className="text-[13px] text-[#ff884c]">
                {item.email}
              </a>
            </div>
          ))}
        </div>
      );
    case "response-note":
      return (
        <div key={key} className="pt-2">
          <p className="font-mono text-[9px] tracking-[2px] text-white/20 uppercase">
            Response time commitment
          </p>
          <p className="max-w-[714px] pt-3 text-sm leading-6 text-white/40">
            We respond to all privacy inquiries within thirty (30) days. For
            urgent matters related to data security or potential breaches,
            we aim to respond within 48 hours.
          </p>
        </div>
      );
  }
}

export default function PrivacyArticle() {
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
