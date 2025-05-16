import { IncomingMessage } from "@/app/emailTeamplates";
import { resend } from "@/app/lib/resendClient";

export async function sendEmail(email: string): Promise<void> {
  try {
    console.log(email);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vkotradingfze@gmail.com",
      subject: "Hello World",
      react: IncomingMessage(),
    });
  } catch (error) {
    console.error(error);
  }
}
