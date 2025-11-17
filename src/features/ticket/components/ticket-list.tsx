import { getTickets } from "@/features/queries/get-tickets";
import TicketItem from "@/features/ticket/components/ticket-item";

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-y-4">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
