"use client";

import { LucideKanban, LucideLogOut } from "lucide-react";
import Link from "next/link";
import SubmitButton from "@/components/form/submit-button";
import ThemeSwitcher from "@/components/theme/theme-switcher";
import { Button, buttonVariants } from "@/components/ui/button";
import { signOut } from "@/features/auth/actions/sign-out";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { homePath, signInPath, signUpPath } from "@/paths";

const Header = () => {
  const { user, isFetched } = useAuth();

  if (!isFetched) return null;

  const navItems = user ? (
    <form action={signOut}>
      <SubmitButton
        label="Sign Out"
        icon={<LucideLogOut className="h-4 w-4" />}
      />
    </form>
  ) : (
    <>
      <Link
        href={signUpPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign Up
      </Link>
      <Link
        href={signInPath()}
        className={buttonVariants({ variant: "default" })}
      >
        Sign In
      </Link>
    </>
  );

  return (
    <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 animate-header-from-top fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5 backdrop-blur">
      <div className="flex gap-x-2">
        <Button variant={"ghost"} asChild>
          <Link href={homePath()}>
            <LucideKanban />
            <h1 className="text-lg font-semibold">TicketBoundry</h1>
          </Link>
        </Button>
      </div>
      <div className="flex gap-x-2">
        <ThemeSwitcher />
        {navItems}
      </div>
    </nav>
  );
};

export default Header;
