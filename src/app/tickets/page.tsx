import TicketItem from "@/app/features/ticket/components/ticket-item";
import Heading from "@/components/Heading";
import { initialTickets } from "@/data";

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title={"Tickets"}
        description={"All your tickets at one place"}
      />

      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
