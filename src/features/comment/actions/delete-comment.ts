"use server";

import { revalidatePath } from "next/cache";
import { toActionState } from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/getAuthOrRedirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import { prisma } from "@/lib/prisma";
import { ticketPath } from "@/paths";

export const deleteComment = async (id: string) => {
  const { user } = await getAuthOrRedirect();

  const comment = await prisma.comment.findUnique({
    where: { id },
  });

  if (!comment || !isOwner(user, comment)) {
    return toActionState("ERROR", "Not Authorized");
  }

  await prisma.comment.delete({
    where: { id },
  });

  revalidatePath(ticketPath(comment.ticketId));

  return toActionState("SUCCESS", "Comment Deleted");
};
