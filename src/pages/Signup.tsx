
import { Layout } from "@/components/layout/Layout";
import { SignupForm } from "@/components/auth/SignupForm";

export default function Signup() {
  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center py-12 login-gradient">
        <div className="w-full max-w-md p-8 space-y-8 bg-background/80 backdrop-blur-sm rounded-xl border shadow-sm">
          <SignupForm />
        </div>
      </div>
    </Layout>
  );
}
