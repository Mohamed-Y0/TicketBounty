import { jsx } from "react/jsx-runtime";
import EmailPasswordReset from "@/emails/password/email-password-reset";
import { resend } from "@/lib/resend";

export const SendEmailPasswordReset = async (
  username: string,
  email: string,
  passwordResetLink: string,
) => {
  return await resend.emails.send({
    from: "no-reply@YourDomain.com",
    to: email,
    subject: "Password Reset from TicketBounty",
    react: jsx(EmailPasswordReset, {
      toName: username,
      url: passwordResetLink,
    }),
  });
};
