import Link from 'next/link';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { initialTickets } from '@/data';
import { ticketsPath } from '@/paths';

interface TicketPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Go to Tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Ticket DetailsPage: {ticket.title}</h1>
      <p className="text-sm text-gray-500">
        Ticket Description: {ticket.description}
      </p>
      <p className="text-sm text-gray-500">Ticket Status: {ticket.status}</p>
    </div>
  );
};

export default TicketPage;
