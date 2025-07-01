import { Message } from "@/app/types";
import { axiosClient, StrapiRoutes } from "@/app/lib";

export async function sendMessage(message: Message) {
  try {
    const response = await axiosClient(StrapiRoutes.POST_SEND_MESSAGES, {
      method: "POST",
      data: {
        data: message,
      },
    });

    return response;
  } catch (error) {
    console.error("Subscribe Service Error:", error);
  }
}
