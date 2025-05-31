import {z} from "zod"

export const MessageValidator = z.object({
    name: z.string().min(4, "name must be longer than 4 symbols"),
    phone: z.string().min(9, "phone must be longer than 9 symbols"),
    email: z.string().email("email must be valid"),
    details: z.string().optional()
})