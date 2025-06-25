import Link from "next/link";
import { initialTickets } from "@/data";

const Tickets = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tickets Page</h1>
      <ul>
        {initialTickets.map((ticket) => (
          <div key={ticket.id} className="flex items-center gap-2">
            <h2 className="font-bold text-lg">{ticket.title}</h2>
            <Link href={`/tickets/${ticket.id}`} className="text-sm underline">
              View
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
