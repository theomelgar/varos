"use server";

import { InputType, ReturnType } from "./types";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { SendEmail } from "./schema";
import axios from "axios";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { nome, email, celular } = data;

  try {
    // Simula um envio
    // await axios.post("/endpoint-imaginario", {
    //   nome,
    //   email,
    //   celular,
    // });
    console.log("enviou certo")
  } catch (error) {
    return {
      error: "Failed to send email",
    };
  }

  revalidatePath(`/`);
  return {
    data: {
      id: "0",
      nome: "Fulano",
      email: "Fulano@gmail.com",
      celular: "9999999999",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
    },
  };
};

export const sendEmail = createSafeAction(SendEmail, handler);
