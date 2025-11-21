import Link from "next/link";
import { CardCompact } from "@/components/card-compact";
import { SignInForm } from "@/features/auth/components/sign-in-form";
import { passwordForgotPath, signUpPath } from "@/paths";

const SignInPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        title="Sign In"
        description="Sign in to your account"
        className="animate-fade-in-from-top w-full max-w-[420px]"
        content={<SignInForm />}
        footer={
          <>
            <Link href={signUpPath()} className="text-muted-foreground text-sm">
              No account yet?
            </Link>

            <Link
              href={passwordForgotPath()}
              className="text-muted-foreground text-sm"
            >
              Forgot Password?
            </Link>
          </>
        }
      />
    </div>
  );
};

export default SignInPage;
