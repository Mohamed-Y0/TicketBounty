import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Header from "@/app/_navigation/Header";
import Sidebar from "@/app/_navigation/sidebar/components/sidebar";
import ReactQueryProviders from "@/app/_providers/react-query/react-query-provider";
import { RedirectToast } from "@/components/redirect-toast";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";

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
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ReactQueryProviders>
            <Header />
            <div className="flex h-screen border-collapse overflow-hidden">
              <Sidebar />
              <main className="bg-secondary/20 flex min-h-screen flex-1 flex-col overflow-auto overflow-x-hidden px-8 py-24">
                <NuqsAdapter>{children}</NuqsAdapter>
              </main>
            </div>
            <Toaster expand />
          </ReactQueryProviders>
          <RedirectToast />
        </ThemeProvider>
      </body>
    </html>
  );
}
