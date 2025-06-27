import { IncomingMessage } from "@/app/emailTeamplates";
import { resend } from "@/app/lib/resendClient";
import { MessageValidator } from "@/app/utils";
import { sendMessage } from "@/app/actions/sendMessage";

type FormResponse = {
  errors: Record<string, string[]>;
  values: Record<string, string>;
  successMessage: string;
};

export async function sendEmail(
  _: unknown,
  formData: FormData,
): Promise<FormResponse> {
  const entries = formData.entries();
  const payload = Object.fromEntries(entries);

  const { success, data, error } = MessageValidator.safeParse(payload);

  if (!success) {
    console.log(error?.flatten().fieldErrors);

    return {
      errors: error?.flatten().fieldErrors,
      values: {},
      successMessage: "",
    };
  }

  try {
    await sendMessage(data);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nfo@finest-tobacco.com",
      subject: "New message",
      react: IncomingMessage({ content: data }),
    });

    return {
      errors: {},
      values: {},
      successMessage: "Successfully sent",
    };
  } catch (error) {
    console.error(error);

    return {
      errors: { server: ["Something went wrong"] },
      values: {},
      successMessage: "",
    };
  }
}
