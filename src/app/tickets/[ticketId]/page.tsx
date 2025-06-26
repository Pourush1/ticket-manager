import { initialTickets } from "@/data";

interface TicketPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return <div>Ticket not found</div>;
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
