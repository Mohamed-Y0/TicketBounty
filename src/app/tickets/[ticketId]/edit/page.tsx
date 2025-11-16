import { notFound } from "next/navigation";
import { getTicket } from "@/app/features/queries/get-ticket";
import TicketUpsertForm from "@/app/features/ticket/components/ticket-upsert-form";
import CardCompact from "@/components/card-compact";

type TicketEditPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
  const ticket = await getTicket((await params).ticketId);

  if (!ticket) notFound();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        title="Edit Ticket"
        description="Edit an existing Ticket"
        className="animate-fade-in-from-top w-full max-w-[420px]"
        content={<TicketUpsertForm ticket={ticket} />}
      />
    </div>
  );
};

export default TicketEditPage;
