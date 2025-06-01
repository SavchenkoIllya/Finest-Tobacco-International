import { Messages } from "@/app/db/types";
import { MessageStatuses } from "@/app/lib/messageStatuses";

export const mockedMessage: Messages["insert"] = {
  name: "Test username",
  email: "test@test.com",
  phone: "1234567890",
  details: "Test details",
  status: MessageStatuses.NOT_READ,
};
