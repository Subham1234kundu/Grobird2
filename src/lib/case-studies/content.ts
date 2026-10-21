import type { CaseStudy } from "./types";

/** GroBird's own case studies, transcribed from the GBT-CS-2026 decks. Shown ahead of any published in Supabase. */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "presales-force",
    title: "Live in a month. Four platforms in nine.",
    description: "How GroBird became the implementation partner behind Presales Force — designing and building its enterprise, channel partner, mobile and consumer platforms, all live today.",
    tag: "Product Architecture",
    industry: "SaaS",
    cover_image_url: "/case-studies/presales-force-cover.jpg",
    published: true,
    sort_order: 0,
    created_at: "2026-10-21T00:00:00Z",
    updated_at: "2026-10-21T00:00:00Z",
    content: `## Overview

**Case study | Presales Force | Enterprise AI & SaaS**

How GroBird became the implementation partner behind Presales Force — designing and building its enterprise, channel partner, mobile and consumer platforms, all live today.

Since January 2026 · Exclusive implementation partner · Ongoing

**Scope:** Product architecture · Enterprise platform · Channel partner platform · Android & iOS apps · Consumer platform · Cloud infrastructure

## The result, in one line

**One technology partner, from day one. Four platforms live in nine months.**

- **1 month** — from start to the enterprise MVP going live
- **4 platforms** — live: enterprise, channel partner, mobile and consumer
- **9 months** — from the first line of code to all four live
- **2 app stores** — Presales Force on Android and on iOS

*Source: GroBird delivery records, January – October 2026*

Presales Force brought the method. GroBird designed and built the systems that run it.

## About the client

**Presales work decides big deals. Presales Force makes it visible.**

Presales Force is a presales business intelligence platform for B2B companies. It gives presales teams one structured way to run discovery, solution design, demos and proof-of-concepts — and gives leaders a clear view of how that work moves deals.

- **For presales teams** — One method for every opportunity, from the first call to the proof-of-concept.
- **For leaders and partners** — A shared view of pipeline and performance — inside the company and across its channel.
- **For individuals** — Tejas brings the same method to any sales engineer, without an enterprise contract.

The method: 01 Discovery → 02 Solution design → 03 Demo → 04 Proof-of-concept.

## The challenge

**A strong method needs a product before the market moves on.**

| What they had | What they needed |
| --- | --- |
| A clear presales method and a sharp view of the market | One implementation partner to design and build the whole product family, not a single app |
| A product vision for four kinds of user: teams, leaders, partners and individuals | Enterprise-grade foundations from the very first release |
| A short window to reach the market first | A live product in weeks, not quarters |
| | A partner who would stay and keep building as the business grew |

The brief was not one app. It was a product family.

## What we diagnosed first

**Before building anything, we mapped who would use it, and how.**

1. **Presales engineers** — Run every opportunity through one method
2. **Presales leaders** — See pipeline health and team performance
3. **Channel partners** — Sell, onboard and serve their own customers
4. **Individuals** — Use the method without an enterprise contract

**One shared foundation:** Accounts and roles · Presales method engine · AI services · Analytics · Billing

Four kinds of user became four platforms on one shared foundation.

## What we built

**One enterprise foundation. Four live platforms on top of it.**

1. **Enterprise platform** (Live) — The core product and its infrastructure, built for enterprise teams and enterprise evaluations.
2. **Channel partner platform** (Live) — Lets partners sell Presales Force, onboard their customers and serve them.
3. **Mobile apps** (Live) — Presales Force on Android and iOS — learning, scoring and community in every presales engineer's pocket.
4. **Tejas** (Live) — A self-serve consumer edition. An individual sales engineer signs up, pays and starts the same day.

Built once on a shared foundation, released four ways.

## Inside the product

**Every opportunity, one view. Where each deal stands, and why.**

![Tejas opportunities view — every opportunity moving through the presales method, with technical-win scores and filters (sample data)](/case-studies/presales-force/slide-07.jpg)

1. Each opportunity moves step by step through the presales method — progress and risk shown on every row.
2. A technical-win score on every deal, so leaders see which ones are at risk before the forecast call.
3. Search, filter and sort across products and stages. No spreadsheets.

*Tejas — opportunities view. Sample data.*

**From first call to business case. One flow, no spreadsheets.**

![Tejas discovery and TCO screens — questions, company brief and call insights; cost of ownership and ROI from the client's own numbers (sample data)](/case-studies/presales-force/slide-08.jpg)

- **Discovery** — Questions, company brief and call insights on one screen.
- **Commercials** — Cost of ownership and ROI, built from the client's own numbers.

*Product screens from Tejas. Sample data.*

## How it works

**One core, many doors. Every platform runs on the same engine.**

![Architecture: four platforms on shared services, AI services, and a Java / Spring Boot core with cloud infrastructure in India](/case-studies/presales-force/slide-09.jpg)

Platforms: Enterprise · Channel partner · Mobile apps · Tejas

| Layer | What it holds |
| --- | --- |
| Shared services | Accounts and roles · The presales method engine · Analytics · Billing |
| AI services | Python AI services working behind the method engine |
| Core platform and infrastructure | Java / Spring Boot core · Cloud infrastructure in India |

Built once, reused everywhere — that is what made nine months possible.

## How fast

**The first release in a month. The full family in nine.**

![Timeline: partnership in Jan 2026, enterprise MVP live within a month, all four platforms live by Oct 2026](/case-studies/presales-force/slide-10.jpg)

- **Jan 2026** — Partnership begins. GroBird becomes the exclusive technology partner.
- **Within a month** — The enterprise MVP goes live. *(Live · Enterprise MVP)*
- **By Oct 2026** — Channel partner platform, mobile apps and Tejas all live. *(Live · Channel partner · Mobile apps · Tejas)*
- **Today** — Supporting Presales Force as the business expands.

Speed came from building the foundation once, and building it right.

## How we work together

**Not a vendor. The implementation partner behind the product.**

- **Exclusive, since day one** — GroBird has been Presales Force's only technology implementation partner since January 2026.
- **Product delivery, end to end** — Diagnosis, architecture, requirements, releases and support — run alongside the founders.
- **Still building** — Supporting Presales Force as it takes the product into new markets.

**GroBird Growth Framework, as applied at Presales Force:**

1. **Diagnose** — Users and product blueprint mapped
2. **Architect** — One foundation for four platforms
3. **Build & deploy** — Enterprise MVP live in a month
4. **Optimise & scale** — Ongoing — supporting expansion

Engagement · Scalable product architecture · Infrastructure & scale layer · Ongoing partnership

Exclusive technology implementation partner to Presales Force since January 2026.`,
  },
  {
    id: "johns-hopkins-india",
    title: "How Johns Hopkins India streamlined multi-branch operations and eliminated audit chaos with a centralized accounting system",
    description: "A custom-built centralized accounting and reimbursement system with automatic Tally Prime sync turned fragmented, email-based finance into single-window management.",
    tag: "Accounting & Reimbursement Platform",
    industry: "B2B Services",
    cover_image_url: "/case-studies/johns-hopkins-india-cover.jpg",
    published: true,
    sort_order: 1,
    created_at: "2026-10-21T00:00:00Z",
    updated_at: "2026-10-21T00:00:00Z",
    content: `## Overview

Johns Hopkins India Pvt. Ltd. · Procurement · Multi-branch, India

**Scope:** Accounting & reimbursement platform · Document management · PO & invoice tracking · Tally Prime integration · Multi-branch rollout

## Executive summary

Johns Hopkins India Pvt. Ltd., a procurement company operating multiple branches across India, struggled with fragmented reimbursement processes and manual tracking systems that created audit nightmares.

By implementing a custom-built centralized accounting and reimbursement system with an integrated dashboard and automatic Tally Prime synchronization, the company eliminated email-based confusion, streamlined invoice and PO tracking, and transformed their financial operations into a single-window management solution.

- **80%** reduction in reimbursement processing time
- **95%** reduction in audit document retrieval
- **93%** reduction in data entry errors
- **70%** reduction in cross-branch coordination

*Figures reported by Johns Hopkins India*

![Illustrative single-window finance dashboard — spend by branch, approval queue, Tally sync status](/case-studies/johns-hopkins-india/slide-02.jpg)

## About the client

Johns Hopkins India Pvt. Ltd. is a procurement company with multiple operational branches distributed across India. The company's head of operations, based in Pune, oversees financial processes including reimbursements, purchase orders, and invoice management for all locations. With geographically dispersed teams, efficient communication and centralized record-keeping are critical to the organization's success.

- Procurement company
- Multiple operational branches across India
- Head of operations based in Pune

One head office, many branches.

## The challenge: fragmented processes creating operational bottlenecks

Before implementing the new system, Johns Hopkins India faced significant challenges that hindered operational efficiency and created compliance risks:

1. **Email-based reimbursement chaos.** The head of operations received reimbursement requests via email from multiple branches, leading to confusion, delays, and missed requests. Without a centralized tracking mechanism, reimbursements often fell through the cracks, frustrating employees and slowing down operations.
2. **Manual Excel dependency.** The finance team relied heavily on manually created Excel spreadsheets to track purchase orders (POs), vendor invoices, payment statuses and reimbursement records. This manual approach was time-consuming, error-prone, and created data silos across departments.
3. **Disconnected document management.** Supporting documents and attachments were stored separately from the Excel records, making it difficult to verify transactions during audits. The lack of integration between financial data and supporting documentation created a fragmented workflow.
4. **Audit complications.** When audit time arrived, the team struggled to compile complete records. The disconnected systems meant hours of manual work to reconcile Excel files with physical or digital attachments, increasing the risk of errors and compliance issues.
5. **No real-time visibility.** Management lacked real-time insights into financial operations across branches. Without a unified dashboard, decision-makers couldn't track spending patterns, pending approvals, or cash flow in real time.

**How a request moved before:** Email from branch → Typed into Excel → Documents filed elsewhere → Reconciled at audit → No live view

## The solution: a robust centralized system with single-window management

Grobird Technologies designed and implemented a comprehensive accounting and reimbursement system tailored specifically to Johns Hopkins India's multi-branch operations.

- **Before:** Branch emails, an ops inbox, attachments, Excel sheets and manual Tally entry — all disconnected.
- **After:** Branches, documents, approvals, POs & invoices, the dashboard and Tally Prime sync — all connected through a single window.

![Before vs after — scattered branch emails, Excel sheets and manual Tally entry replaced by a single window](/case-studies/johns-hopkins-india/slide-05.jpg)

## Key features delivered

### One dashboard for every branch. Every request, document and approval.

- **Centralized dashboard.** A robust, user-friendly dashboard that provides real-time visibility into all financial operations across branches. The dashboard displays pending reimbursements, outstanding POs, invoice statuses, and payment tracking in one unified interface.
- **Integrated document management.** All supporting documents—receipts, invoices, approvals, and correspondence—are automatically attached to their corresponding transactions within the system. This eliminates the need for separate file storage and ensures complete documentation for every financial entry.
- **Automated reimbursement workflow.** Employees can submit reimbursement requests directly through the system, with automated routing to the appropriate approvers. The head of operations in Pune receives organized, trackable requests with complete documentation, eliminating email chaos.

![Illustrative reimbursement requests view with pending, approved, escalated and synced-to-Tally statuses](/case-studies/johns-hopkins-india/slide-06.jpg)

### Enter it once. Tally Prime stays in sync.

- **Purchase order and invoice tracking.** The system provides end-to-end tracking of POs from creation through fulfillment, with invoice matching and payment status updates. Every stakeholder can see exactly where each transaction stands in the workflow.
- **Automatic Tally Prime synchronization.** Perhaps the most powerful feature is the seamless integration with Johns Hopkins India's existing Tally Prime server. All transactions entered into the system automatically sync with Tally, eliminating double entry and ensuring accounting records remain accurate and up-to-date.
- **Single-window operations.** Instead of juggling multiple systems, spreadsheets, and email threads, the entire finance team now manages all operations through one centralized platform. This dramatically reduces training time and operational complexity.

The GroBird platform (purchase orders, invoices, reimbursements, approvals) connects to the existing Tally Prime server over a secure API — no double entry, every approved transaction auto-synced.

## How it works now: from request to Tally, entirely within the system

Reimbursement requests are now submitted, tracked, and approved entirely within the system.

1. **Employee submits** — Request raised in the system with documents attached
2. **Automated routing** — Sent to the appropriate approver by rule
3. **Head of operations, Pune** — Organized, trackable requests with complete documentation
4. **Approved** — Audit trail recorded for every transaction
5. **Synced to Tally Prime** — Automatically, with no double entry

Supporting documents linked to every step · Live status on the dashboard · Audit-ready records at all times

## Implementation process

The implementation followed a structured approach designed to minimize disruption to ongoing operations:

1. **Phase 1: Requirements gathering.** Grobird Technologies worked closely with the head of operations and finance team to understand existing workflows and pain points.
2. **Phase 2: System design.** Custom features were designed to match Johns Hopkins India's specific branch structure and approval hierarchies.
3. **Phase 3: Tally integration.** Secure API connections were established with the existing Tally Prime server to enable automatic synchronization.
4. **Phase 4: User training.** Staff across all branches received comprehensive training on the new system.
5. **Phase 5: Phased rollout.** The system was deployed branch by branch to ensure smooth adoption and address any location-specific needs.

![Five-phase implementation process — requirements, system design, Tally integration, user training, phased rollout](/case-studies/johns-hopkins-india/slide-09.jpg)

## Results: operational excellence and audit-ready records

The implementation of the centralized accounting system delivered transformative results for Johns Hopkins India:

1. **Eliminated email confusion.** Reimbursement requests are now submitted, tracked, and approved entirely within the system. The head of operations has complete visibility into all pending requests with supporting documentation attached, eliminating the chaos of email-based processes.
2. **Streamlined record-keeping.** Manual Excel creation and management has been eliminated. All financial records are automatically generated and maintained within the system, with complete audit trails for every transaction.
3. **Integrated documentation.** Supporting documents are automatically linked to their transactions, ensuring that every entry has complete documentation. This integration has eliminated the previous challenge of managing separate attachment storage.
4. **Audit-ready compliance.** The company now maintains audit-ready records at all times. When audit season arrives, the team can instantly generate comprehensive reports with all supporting documentation, dramatically reducing preparation time and compliance risks.
5. **Real-time financial visibility.** Management now has real-time dashboards showing spending patterns, pending approvals, cash flow status, and branch-wise financial performance. This visibility enables data-driven decision-making and proactive financial management.
6. **Seamless accounting integration.** The automatic synchronization with Tally Prime has eliminated double-entry work and reduced accounting errors. The finance team saves significant time while maintaining more accurate records.
7. **Improved cross-branch coordination.** With all branches working within the same system, communication and coordination have improved dramatically. Standardized processes across locations have enhanced operational consistency.

## Measurable impact

| Metric | Before | After | Improvement |
| --- | --- | --- | --- |
| Reimbursement processing time | 25 hrs/week | 5 hrs/week | 80% reduction |
| Audit document retrieval | 40 hours | 2 hours | 95% reduction |
| Data entry errors | 15 per month | 1 per month | 93% reduction |
| Cross-branch coordination | 20 hrs/week | 6 hrs/week | 70% reduction |

*Figures reported by Johns Hopkins India*

## Client testimonial

> The centralized system has completely transformed how we manage financial operations across our branches. What used to take hours of Excel work and email searching now happens automatically. During our last audit, we were able to provide complete documentation in minutes instead of days. It's been a game-changer for our operations team.
>
> — Head of Operations, Johns Hopkins India Pvt. Ltd.

## Key takeaways

This successful implementation demonstrates several critical success factors for enterprise software solutions:

1. Custom solutions designed for specific workflows outperform generic off-the-shelf products when processes are unique to the organization.
2. Integration with existing systems (like Tally Prime) ensures adoption by minimizing disruption and eliminating redundant data entry.
3. Centralized dashboards provide visibility that transforms decision-making capabilities for management.
4. Automated document management eliminates common compliance risks and audit preparation challenges.
5. Multi-branch coordination requires unified platforms that standardize processes while accommodating location-specific needs.

## Transform your financial operations

Is your organization struggling with fragmented financial processes, manual record-keeping and Excel dependency, audit preparation challenges, poor visibility across multiple locations, or disconnected systems and data silos?

We specialize in creating custom accounting and operations management systems that integrate seamlessly with your existing infrastructure. Our expertise includes:

- Custom Accounting & Financial Management Systems
- Multi-Branch Operations Management
- Dashboard & Reporting Solutions
- ERP & Tally Integration Solutions
- Automated Workflow & Approval Systems
- Audit Compliance Systems

*This case study is based on actual client implementation. Results may vary based on specific organizational requirements and existing infrastructure.*`,
  },
  {
    id: "e7-cyber",
    title: "Six platforms in five months. An enterprise's digital operations, built from scratch.",
    description: "How GroBird designed E-7 Cyber's operating processes and built the partner, distributor, support, learning and web platforms that run them.",
    tag: "Operating Process Design",
    industry: "B2B Services",
    cover_image_url: "/case-studies/e7-cyber-cover.jpg",
    published: true,
    sort_order: 2,
    created_at: "2026-10-21T00:00:00Z",
    updated_at: "2026-10-21T00:00:00Z",
    content: `## Overview

**Six platforms in five months. An enterprise's digital operations, built from scratch.**

How GroBird designed E-7 Cyber's operating processes and built the partner, distributor, support, learning and web platforms that run them.

Dubai · UAE · Saudi Arabia · Egypt · 2025

**Scope:** Operating process design · Corporate website · Partner, admin, distributor & support portals · Learning platform

## The result, in one line

Operations designed from scratch. Six platforms live in five months.

- **6 platforms** — Website, partner, admin, distributor, support and learning
- **5 months** — From the first workshop to all six platforms live
- **3 markets** — UAE, Saudi Arabia and Egypt
- **4 user groups** — Partners, distributors, enterprise clients and the internal team

*Source: GroBird delivery records, 2025*

E-7 Cyber brought the products. GroBird built the operations around them.

## About the client

**Enterprise-grade products. Built for government mandates.**

E-7 Cyber is a Dubai-based cybersecurity company with a portfolio that includes BlindSpot, Vigilance and a suite of regulatory compliance platforms. It sells through resellers and regional distributors to enterprise and government buyers across the UAE, Saudi Arabia and Egypt.

- **A strong product portfolio** — BlindSpot, Vigilance and regulatory compliance platforms.
- **Enterprise and government buyers** — CISOs, compliance officers and procurement teams.
- **A channel-led business** — Resellers and distributors carry the products into each market.

Three markets, one company.

## The challenge

**A strong product portfolio without the operations behind it.**

| How things ran | What it held back |
|---|---|
| Partner deals registered by email | No single view of the channel pipeline |
| Distributor orders and licences tracked by hand | Slow, uneven deal approvals |
| Support requests arriving in inboxes | No case history for enterprise clients |
| Training given one session at a time | Hard to look as established as the global vendors E-7 was competing against |

The products were enterprise-grade. The operations around them had to catch up.

## What we diagnosed first

**Before building, we mapped who E-7 works with, and how.**

![Diagram of the E-7 team at the centre, connected to partners (onboarding, deal registration, approval), enterprise clients (support, escalation, documentation) and distributors (licensing, orders, invoicing)](/case-studies/e7-cyber/slide-05.jpg)

- **Partners (resellers)** — onboarding · deal registration · approval
- **Enterprise clients (CISOs · compliance)** — support · escalation · documentation
- **Distributors (regional)** — licensing · orders · invoicing
- Training and certification for all three groups

Every hand-off became a process before it became a screen.

## Operations, from scratch

**We designed the operations first. Then built the software around them.**

![Five core operating processes — partner onboarding, deal registration, licence orders, enterprise support and certification — each mapped as a four-step flow](/case-studies/e7-cyber/slide-06.jpg)

| Process | Flow |
|---|---|
| Partner onboarding | Apply → Verify → Assign tier → Activate |
| Deal registration | Register → Review → Approve → Track |
| Licence orders | Order → Approve → Issue licence → Invoice |
| Enterprise support | Raise ticket → Triage → Resolve → Document |
| Certification | Enrol → Learn → Assess → Certify |

Five core processes, each owned, each with a clear next step.

## What we built

**One ecosystem. Six platforms, live in five months.**

1. **Corporate website** — A professional presence with lead generation aimed at CISOs, compliance officers and procurement teams.
2. **Partner portal** — Deal registration, pipeline tracking, tiered pricing and self-service channel management for resellers.
3. **Admin portal** — One internal control centre for partner management, deal approvals and performance reporting.
4. **Distributor portal** — Product licensing, order management, inventory visibility and financial reporting for distributors.
5. **Support portal** — Ticketing, case management and product documentation for enterprise clients.
6. **Learning platform** — Certification tracks for clients, partners and distributors, each with its own learning path.

Built on the processes, not the other way round.

## How it fits together

**One control centre. Every portal reports into it.**

![The admin portal as one control centre, with the website, learning, support, partner and distributor portals reporting into it](/case-studies/e7-cyber/slide-08.jpg)

The **admin portal** (approvals · reporting) sits at the centre:

- **Website** — leads
- **Learning platform** — certifications
- **Partner portal** — deals for approval
- **Support portal** — tickets and cases
- **Distributor portal** — orders and licences

Leadership saw partners, distributors and clients in one place.

## Inside the partner portal

**Every partner deal registered, approved and tracked in one place.**

![Illustrative view of the partner portal's deal registration screen (sample data)](/case-studies/e7-cyber/slide-09.jpg)

1. Partners see their deals, value and tier at a glance — no more chasing by email.
2. Every registration goes to the admin portal for approval, with a clear status.
3. Price lists, certifications and support sit in the same portal.

*Illustrative view. Sample data.*

## How fast

**Five months, from first workshop to six live platforms.**

![Five-month delivery timeline from first workshop to six live platforms](/case-studies/e7-cyber/slide-10.jpg)

| Month | Phase | What went live |
|---|---|---|
| Month 1 | Diagnose and design | Operating processes mapped and designed. Corporate website. |
| Month 2 | Channel | Partner portal and admin portal. |
| Month 3 | Distribution | Distributor portal: licensing, orders, inventory. |
| Month 4 | Support | Support portal: ticketing, cases, documentation. |
| Month 5 | Learning and launch | Learning platform. All six platforms live. |

Process design came first, so each platform had a clear job before it was built.

## What changed

**The operations of a much larger company. Ready for enterprise and government buyers.**

| Before | After |
|---|---|
| Partner deals arriving by email | Every deal registered, approved and tracked in one pipeline |
| Distributor orders handled by hand | Licensing, orders and inventory self-served by distributors |
| Support requests in inboxes | Tickets with case history and product documentation |
| Training one session at a time | Certification tracks for clients, partners and distributors |

Leadership got one view of the channel, the clients and the team.`,
  },
  {
    id: "investmate",
    title: "From manual follow-ups to a client journey that runs itself.",
    description: "How GroBird took a growing buyers agency off spreadsheets and email chains — and turned past clients into a steady source of new business.",
    tag: "Client Journey Automation",
    industry: "Real Estate",
    cover_image_url: "/case-studies/investmate-cover.jpg",
    published: true,
    sort_order: 3,
    created_at: "2026-10-21T00:00:00Z",
    updated_at: "2026-10-21T00:00:00Z",
    content: `## Overview

How GroBird took a growing buyers agency off spreadsheets and email chains — and turned past clients into a steady source of new business.

- **Client:** Investmate Buyers Agency
- **Industry:** Property advisory · Australia
- **Scope:** CRM · Client journey automation · Search manager · Automated client updates · Referral nurture · Knowledge base

## The result, in one line

**Every enquiry answered. Every client tracked. Past clients bringing in new ones.**

- **6** · Connected tools — from first enquiry to life after settlement
- **24/7** · Enquiry response — every new enquiry acknowledged and qualified within minutes
- **1** · View of every client — strategy call to settlement, in one place
- **New** · Revenue stream — repeat business and referrals from past clients

*Source: GroBird project records*

Investmate brought the expertise. GroBird built the system behind it.

## About the client

### A buyers agency gaining real traction.

Investmate is a buyers agency: its advisors help clients find, assess and secure the right property, then guide them all the way to settlement. As word spread, enquiries grew faster than the team could follow them up by hand.

- **Advisor-led** — Every client relies on a personal advisor who knows their brief.
- **Growing fast** — More enquiries, more active searches, more settlements each month.
- **Built on trust** — Happy clients are the best source of the next client.

Every deal is a three-way relationship between client, advisor and property: brief and strategy, search and shortlist, offer and settlement.

## The challenge

### The business was growing. The way it ran was almost entirely manual.

| How it ran | What it cost |
|---|---|
| Enquiries tracked inconsistently | Slow or missed replies to new enquiries |
| Follow-up depended on each team member | Hours spent piecing together one client’s status |
| Client journeys spread across spreadsheets, email and calendars | Referrals and repeat business left untapped |
| No contact with clients after settlement | New advisors slow to get up to speed |

Good advisors were spending their time on admin instead of clients.

## What we diagnosed first

### We mapped the full client journey, from first enquiry to life after settlement.

01 Enquiry → 02 Strategy call → 03 Property brief → 04 Search → 05 Offer → 06 Settlement → 07 Referral

![Client journey map from enquiry to referral, highlighting slow first reply, follow-up by memory and silence after settlement](/case-studies/investmate/slide-05.jpg)

- **Where clients slipped away** — The first reply and the follow-up after a strategy call depended on someone remembering.
- **Where time was lost** — Each client’s status lived in three or four places, so updates took hours.
- **Where revenue was missed** — After settlement, nobody stayed in touch — so referrals rarely happened.

Three leaks. Each became something the system now handles on its own.

## What we built

### Six connected tools. One client journey.

![Six connected tools — CRM, client journey automation, search manager, client updates, post-settlement nurture, knowledge base](/case-studies/investmate/slide-06.jpg)

1. **CRM with instant response** — Every new enquiry acknowledged and qualified within minutes, day or night.
2. **Client journey automation** — Strategy call booking, property brief, search, offer and settlement — each step triggers the next.
3. **Search and shortlist manager** — Advisors run several active searches at once, with every property and note in one place.
4. **Automated client updates** — Search updates, milestone notices and settlement countdowns go out on their own.
5. **Post-settlement nurture** — Past clients stay in touch — and referrals and repeat business follow.
6. **Advisor knowledge base** — How Investmate works, written down, so new advisors get up to speed quickly.

Advisors spend their time on clients. The system handles the follow-up.

## Inside the system

### Every client, every search, on one screen.

![Illustrative client pipeline board showing every client and active search on one screen (sample data)](/case-studies/investmate/slide-07.jpg)

1. New enquiries get a reply within minutes — and land in the pipeline, already qualified.
2. Each client moves stage by stage, so advisors always know the next step.
3. Shortlisted properties, notes and documents sit with the search they belong to.

*Illustrative view. Sample data.*

## Automated client updates

### Clients always know what is happening. Nobody has to remember to tell them.

![Timeline of automated client updates from enquiry received to after settlement](/case-studies/investmate/slide-08.jpg)

| Stage | Message |
|---|---|
| Enquiry received | Instant reply and qualifying questions |
| Call booked | Confirmation and property brief form |
| Searching | Regular search updates |
| Offer accepted | Milestone notice and next steps |
| Settlement | Countdown to settlement day |
| After settlement | Check-ins and a referral ask |

Every message goes out at the right moment, automatically.

## The referral loop

### Past clients became a source of new business.

Before, contact usually ended at settlement. Now every settled client enters a nurture programme — check-ins, useful updates and a well-timed ask for a referral. The client base that had been sitting idle started bringing in repeat business and referrals.

![Referral loop diagram — settle, nurture, refer, new enquiry — "client for life](/case-studies/investmate/slide-09.jpg)

- Happy clients stay in touch
- Referrals arrive warm
- Revenue that was almost entirely untapped

## What changed

### What was a bottleneck became a competitive advantage.

| Before | Now |
|---|---|
| Enquiries waiting on someone to reply | Every enquiry answered within minutes, 24/7 |
| Each client’s journey spread across spreadsheets and email | One journey, stage by stage, in one place |
| Updates sent when someone remembered | Clients updated automatically at every milestone |
| No contact after settlement | Past clients bringing repeat business and referrals |

Investmate can take on more clients without adding the same amount of admin.`,
  },
];
