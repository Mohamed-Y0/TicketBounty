import { Suspense } from "react";
import TicketCreateFom from "@/app/features/ticket/components/ticket-create-form";
import TicketList from "@/app/features/ticket/components/ticket-list";
import CardCompact from "@/components/card-compact";
import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title={"Tickets"}
        description={"All your tickets at one place"}
      />

      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created"
        className="w-full max-w-[420px] self-center"
        content={<TicketCreateFom />}
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
