import { Ticket } from "@prisma/client";
import { Label } from "@radix-ui/react-label";
import { upsertTicket } from "@/app/features/ticket/actions/upsert-ticket";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  return (
    <form
      action={upsertTicket.bind(null, ticket?.id)}
      className="flex flex-col gap-y-2"
    >
      {/* <Input name="id" type="hidden" defaultValue={ticket.id} /> */}

      <Label htmlFor="title">Title</Label>
      <Input type="text" name="title" id="title" defaultValue={ticket?.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea name="content" id="content" defaultValue={ticket?.content} />

      <Button type="submit">{ticket ? "Edit" : "Create"}</Button>
    </form>
  );
};

export default TicketUpsertForm;
