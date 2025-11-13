import { Ticket } from "@/app/features/ticket/types";
import { initialTickets } from "@/data";

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  return new Promise((resolve) => {
    resolve(ticket || null);
  });
};
