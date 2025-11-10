import { initialTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find(ticket => ticket.id === ticketId);

  return (
    <div>
      <h1>Hello Ticket {ticketId}</h1>
      <p className="text-sm">{ticket?.content}</p>
    </div>
  );
};

export default TicketPage;
