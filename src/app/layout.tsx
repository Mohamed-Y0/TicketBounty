import "./globals.css";
import { LucideKanban } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/paths";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TicketBounty",
  description: "Ticket Bounty Application..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5 backdrop-blur">
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={homePath()}>
                <LucideKanban />
                <h1 className="ml-2 text-lg font-semibold">TicketBoundry</h1>
              </Link>
            </Button>
          </div>
          <div>
            <Link
              href={ticketsPath()}
              className={buttonVariants({ variant: "outline" })}
            >
              Tickets
            </Link>
          </div>
        </nav>
        <main className="bg-secondary/20 flex min-h-screen flex-1 flex-col overflow-auto overflow-x-hidden px-8 py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
