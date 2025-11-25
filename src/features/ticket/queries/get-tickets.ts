import { ParsedSearchParams } from "@/features/ticket/search-params";
import { prisma } from "@/lib/prisma";

export const getTickets = async (
  userId: string | undefined,
  searchParams: ParsedSearchParams,
) => {
  const params = await searchParams;

  const where = {
    userId,
    title: {
      contains: params.search,
      mode: "insensitive" as const,
    },
  };

  const skip = params.page * params.size;
  const take = params.size;

  const [tickets, count] = await prisma.$transaction([
    prisma.ticket.findMany({
      where,
      skip,
      take,
      orderBy: {
        [params.sortKey]: params.sortValue,
      },
      include: {
        user: { select: { username: true } },
      },
    }),

    prisma.ticket.count({
      where,
    }),
  ]);

  return {
    list: tickets,
    metadata: {
      count,
      hasNextPage: count > skip + take,
    },
  };
};
