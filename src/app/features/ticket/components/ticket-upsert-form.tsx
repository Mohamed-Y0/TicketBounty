"use client";

import { Ticket } from "@prisma/client";
import { Label } from "@radix-ui/react-label";
import { useActionState } from "react";
import { upsertTicket } from "@/app/features/ticket/actions/upsert-ticket";
import FieldError from "@/components/form/field-error";
import SubmitButton from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    { message: "", fieldErrors: {} },
  );

  return (
    <form action={action} className="flex flex-col gap-y-2">
      {/* <Input name="id" type="hidden" defaultValue={(actionState.payload?.get('id') as string) ?? ticket.id} /> */}

      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        name="title"
        id="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea
        name="content"
        id="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <FieldError actionState={actionState} name="content" />

      <SubmitButton label={ticket ? "Edit" : "Create"} />

      {actionState.message}
    </form>
  );
};

export default TicketUpsertForm;
