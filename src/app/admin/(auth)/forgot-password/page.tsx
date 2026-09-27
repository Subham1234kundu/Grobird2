import AuthShell from "@/components/admin/AuthShell";
import ForgotForm from "./ForgotForm";

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Forgot your password?"
      subtitle="Enter your admin email and we'll send a link to reset it."
      art="/Admin/forgot.png"
    >
      <ForgotForm />
    </AuthShell>
  );
}
