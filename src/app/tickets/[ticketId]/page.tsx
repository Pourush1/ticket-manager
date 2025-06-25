import { initialTickets } from "@/data";

interface TicketPageProps {
  params: {
    ticketId: string;
  };
}

const TicketPage = ({ params }: TicketPageProps) => {
  const { ticketId } = params;

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
