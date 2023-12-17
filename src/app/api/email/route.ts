import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { nome, email, celular } = req.body;

  try {
    const response = await axios.post("/endpoint-imaginario", {
      nome,
      email,
      celular,
    });

    if (response.status === 200) {
      res.status(200).json({ message: "Email sent successfully!" });
    } else {
      res.status(400).json({ message: "Failed to send email." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error sending email." });
  }
}