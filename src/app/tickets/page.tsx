import { Heading } from '@/components/heading';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTickets } from '@/features/ticket/queries/get-tickets';

const Tickets = async () => {
  const tickets = await getTickets();

  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Tickets" description="All your tickets are listed here" />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
