import { ParsedSearchParams } from "@/features/ticket/search-params";
import { prisma } from "@/lib/prisma";

export const getTickets = async (
  userId: string | undefined,
  searchParams: ParsedSearchParams,
) => {
  const where = {
    userId,
    title: {
      contains: (await searchParams).search,
      mode: "insensitive" as const,
    },
  };

  const skip = (await searchParams).page * (await searchParams).size;
  const take = (await searchParams).size;

  return await prisma.ticket.findMany({
    where,
    skip,
    take,
    orderBy: {
      [(await searchParams).sortKey]: (await searchParams).sortValue,
    },
    include: {
      user: { select: { username: true } },
    },
  });
};
