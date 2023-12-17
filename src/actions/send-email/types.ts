import { z } from "zod";
import { SendEmail } from "./schema";
import { ActionState } from "@/lib/create-safe-action";

type Email = {
  id: string;
  nome: string;
  email: string;
  celular: string;
  createdAt: string;
  updatedAt: string;
};

export type InputType = z.infer<typeof SendEmail>;
export type ReturnType = ActionState<InputType, Email>;
