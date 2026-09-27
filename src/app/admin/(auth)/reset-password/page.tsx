import AuthShell from "@/components/admin/AuthShell";
import ResetForm from "./ResetForm";

export default function ResetPasswordPage() {
  return (
    <AuthShell
      title="Set a new password"
      subtitle="Choose a strong password for your admin account."
      art="/Admin/forgot.png"
    >
      <ResetForm />
    </AuthShell>
  );
}
