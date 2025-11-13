import { notFound } from "next/navigation";
import { getTicket } from "@/app/features/queries/get-ticket";
import TicketItem from "@/app/features/ticket/components/ticket-item";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket((await params).ticketId);

  if (!ticket) notFound();

  return (
    <div className="animate-fade-in-from-top flex justify-center">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
