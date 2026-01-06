import { Google_Sans } from "next/font/google"
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import "./globals.css";

import type { Metadata } from "next";

const gsans = Google_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "anask",
  description: "Anonymous discussion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${gsans.className} antialiased min-h-screen bg-background text-[#EE7600]`}
      >
        <div className="relative flex min-h-screen flex-col md:flex-row">
          <AppSidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <Header />
            <main className="flex-1 w-full bg-background">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
