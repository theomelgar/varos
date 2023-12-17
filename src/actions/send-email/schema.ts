import { z } from "zod";

export const SendEmail = z.object({
  nome: z.string(),
  email: z.string(),
  celular: z.string(),
});
