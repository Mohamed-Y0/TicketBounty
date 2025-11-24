import { ParsedSearchParams } from "@/features/ticket/search-params";
import { prisma } from "@/lib/prisma";

export const getTickets = async (
  userId: string | undefined,
  searchParams: ParsedSearchParams,
) => {
  return await prisma.ticket.findMany({
    where: {
      userId,
      title: {
        contains: (await searchParams).search,
        mode: "insensitive",
      },
    },
    orderBy: {
      [(await searchParams).sortKey]: (await searchParams).sortValue,
    },
    include: {
      user: { select: { username: true } },
    },
  });
};
