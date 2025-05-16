import { Resend } from "resend";
import "server only";

export const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);
