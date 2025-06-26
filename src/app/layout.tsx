import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { homePath, ticketsPath } from "@/paths";

export const metadata: Metadata = {
  title: "Ticket Manager",
  description: "Manage your tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1 className="text-white text-2xl font-bold">Ticket Manager</h1>
        <nav className="flex items-center gap-4">
          <Link href={homePath}>Home</Link>
          <Link href={ticketsPath}>Tickets</Link>
        </nav>
        <main className="min-h-screen flex-1  overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
