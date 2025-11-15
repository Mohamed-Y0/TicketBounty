import { Ticket } from "@prisma/client";
import { Label } from "@radix-ui/react-label";
import { updateTicket } from "@/app/features/ticket/actions/update-ticket";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type TicketUpdateFormProps = {
  ticket: Ticket;
};

const TicketUpdateForm = ({ ticket }: TicketUpdateFormProps) => {
  return (
    <form
      action={updateTicket.bind(null, ticket.id)}
      className="flex flex-col gap-y-2"
    >
      {/* <Input name="id" type="hidden" defaultValue={ticket.id} /> */}

      <Label htmlFor="title">Title</Label>
      <Input type="text" name="title" id="title" defaultValue={ticket.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea name="content" id="content" defaultValue={ticket.content} />

      <Button type="submit">Update</Button>
    </form>
  );
};

export default TicketUpdateForm;
