import { Message } from "@/app/types";
import { getStrapiURL } from "@/app/utils/getStrapiUrl";

export async function sendMessage(message: Message) {
  const path = "/api/messages";
  const strapiURL = getStrapiURL();
  const url = new URL(path, strapiURL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_POST_MESSAGES_API_KEY}`,
      },
      body: JSON.stringify({
        data: message,
      }),
    });

    return response.json();
  } catch (error) {
    console.error("Subscribe Service Error:", error);
  }
}
