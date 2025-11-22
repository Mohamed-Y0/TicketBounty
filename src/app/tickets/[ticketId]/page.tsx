import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { getTicket } from "@/features/queries/get-ticket";
import TicketItem from "@/features/ticket/components/ticket-item";
import { homePath } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket((await params).ticketId);

  if (!ticket) notFound();

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Breadcrumbs
        breadcrumbs={[
          { title: "Tickets", href: homePath() },
          { title: ticket.title },
        ]}
      />

      <Separator />

      <div className="animate-fade-in-from-top flex justify-center">
        <TicketItem ticket={ticket} isDetail />
      </div>
    </div>
  );
};

export default TicketPage;
