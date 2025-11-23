import { SearchParams } from "@/features/ticket/search-params";
import { prisma } from "@/lib/prisma";

export const getTickets = async (
  userId: string | undefined,
  searchParams: SearchParams,
) => {
  return await prisma.ticket.findMany({
    where: {
      userId,
      title: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: { select: { username: true } },
    },
  });
};
