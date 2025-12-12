// passwordChange
"use server";

import { z } from "zod";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/getAuthOrRedirect";
import { SendEmailPasswordReset } from "@/features/password/emails/send-email-password-reset";
import { generatePasswordResetLink } from "@/features/password/utils/generate-password-reset-link";
import { verifyPasswordHash } from "@/features/password/utils/hash-and-verify";

const passwordChangeSchema = z.object({
  password: z.string().min(6).max(191),
});

export const passwordChange = async (
  _actionState: ActionState,
  formData: FormData,
) => {
  const { user } = await getAuthOrRedirect();

  try {
    const { password } = passwordChangeSchema.parse(
      Object.fromEntries(formData),
    );

    const validPassword = await verifyPasswordHash(user.passwordHash, password);
    if (!validPassword)
      return toActionState("ERROR", "Incorrect password", formData);

    const passwordResetLink = await generatePasswordResetLink(user.id);

    await SendEmailPasswordReset(user.username, user.email, passwordResetLink);
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  return toActionState("SUCCESS", "Check your email for a reset link.");
};
