import AuthShell from "@/components/admin/AuthShell";
import LoginForm from "./LoginForm";

const URL_ERRORS: Record<string, string> = {
  config:
    "Supabase is not configured. Add the keys to .env and restart the dev server.",
  link: "That sign-in link is invalid or has expired. Request a new one.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to manage blogs, leads and site content."
      art="/Admin/sideImage.png"
    >
      <LoginForm initialError={error ? URL_ERRORS[error] : undefined} />
    </AuthShell>
  );
}
