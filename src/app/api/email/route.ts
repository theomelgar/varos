import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
 

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