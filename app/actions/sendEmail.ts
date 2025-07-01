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
  const receivers = (payload.receivers as string).split(",") ?? "";

  const { success, data, error } = MessageValidator.safeParse({
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    details: payload.details,
  });

  if (!success) {
    console.log(error?.flatten().fieldErrors);

    return {
      errors: error?.flatten().fieldErrors,
      values: {},
      successMessage: "",
    };
  }

  try {
    void sendMessage(data);

    receivers.forEach((receiver) => {
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: receiver,
        subject: "New message",
        react: IncomingMessage({ content: data }),
      });
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
