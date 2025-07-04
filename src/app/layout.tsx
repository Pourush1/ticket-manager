import './globals.css';
import { LucideKanban } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { homePath, ticketsPath } from '@/paths';

export const metadata: Metadata = {
  title: 'Ticket Manager',
  description: 'Manage your tickets',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1 className="text-white text-2xl font-bold py-4">Ticket Manager</h1>
        <nav className="flex items-center gap-4">
          <div>
            <Link
              href={homePath}
              className={buttonVariants({ variant: 'ghost' })}
            >
              <LucideKanban />
              <h1 className="text-lg font-semibold">TicketBounty</h1>
            </Link>
          </div>
          <div>
            <Link
              href={ticketsPath}
              className={buttonVariants({ variant: 'outline' })}
            >
              Tickets
            </Link>
          </div>
        </nav>
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-10 px-8 bg-secondary/20 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
