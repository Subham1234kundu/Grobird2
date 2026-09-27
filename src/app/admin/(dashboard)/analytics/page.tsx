import Image from "next/image";
import { ButtonLink, Card, PageHeader } from "@/components/admin/ui";
import { requireUser } from "@/lib/admin/auth";

export default async function AnalyticsPage() {
  await requireUser();

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const propertyId = process.env.GA_PROPERTY_ID?.replace(/\D/g, "");
  const reportUrl = propertyId
    ? `https://analytics.google.com/analytics/web/#/p${propertyId}/reports/intelligenthome`
    : "https://analytics.google.com/";

  return (
    <>
      <PageHeader
        title="Analytics"
        description="Traffic is measured by Google Analytics."
        action={
          <ButtonLink href={reportUrl} target="_blank" rel="noreferrer">
            Open Google Analytics ↗
          </ButtonLink>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Site tag">
          <div className="flex items-start gap-4 p-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#ff884c]/12">
              <Image src="/Admin/dashboardImage/googleAnalytics.png" alt="" width={22} height={22} className="opacity-80" aria-hidden />
            </span>
            <div className="text-sm text-[#5b5b63]">
              {gaId ? (
                <>
                  <p className="font-medium text-[#111]">Tracking is active.</p>
                  <p className="mt-1">
                    Measurement ID <code className="rounded bg-[#f0f0f2] px-1.5 py-0.5 font-mono text-[12px] text-[#111]">{gaId}</code> is loaded on every public page.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-medium text-[#111]">Tracking is not set up.</p>
                  <p className="mt-1">
                    Add <code className="rounded bg-[#f0f0f2] px-1.5 py-0.5 font-mono text-[12px] text-[#111]">NEXT_PUBLIC_GA_ID</code> to .env and restart the server.
                  </p>
                </>
              )}
            </div>
          </div>
        </Card>

        <Card title="Reports">
          <div className="p-5 text-sm text-[#5b5b63]">
            <p>
              Page views, sessions, sources and conversions live in the Google Analytics
              dashboard for this property. Use the button above to open it; sign in with the
              Google account that owns the property.
            </p>
            <p className="mt-3 text-[12px] text-[#a0a0a5]">
              Embedding charts here needs a Google service account with read access to the
              property. Ask for that if you want live numbers inside the admin.
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}
