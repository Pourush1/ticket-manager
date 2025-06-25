interface TicketPageProps {
  params: {
    ticketId: string;
  };
}

const TicketPage = ({ params }: TicketPageProps) => {
  const { ticketId } = params;

  return <div>Ticket DetailsPage: {ticketId}</div>;
};

export default TicketPage;
