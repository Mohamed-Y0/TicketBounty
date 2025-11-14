import { Suspense } from "react";
import TicketCreateForm from "@/app/features/ticket/components/ticket-create-form";
import TicketList from "@/app/features/ticket/components/ticket-list";
import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title={"Tickets"}
        description={"All your tickets at one place"}
      />

      <Card className="w-full max-w-[420px] self-center">
        <CardHeader>
          <CardTitle>Create Ticket</CardTitle>
          <CardDescription>A new ticket will be created</CardDescription>
        </CardHeader>
        <CardContent>
          <TicketCreateForm />
        </CardContent>
      </Card>

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
