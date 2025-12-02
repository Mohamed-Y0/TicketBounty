import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Comments from "@/features/comment/components/comments";
import { getComments } from "@/features/comment/queries/get-comments";
import TicketItem from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { homePath } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticketPromise = getTicket((await params).ticketId);
  const commentsPromise = getComments((await params).ticketId);

  const [ticket, paginatedComments] = await Promise.all([
    ticketPromise,
    commentsPromise,
  ]);

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
        <TicketItem
          ticket={ticket}
          isDetail
          comments={
            <Comments
              ticketId={ticket.id}
              paginatedComments={paginatedComments}
            />
          }
        />
      </div>
    </div>
  );
};

export default TicketPage;
