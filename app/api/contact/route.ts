"use server"
// import EmailTemplate from "@/EmailTemplate";
import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Studio Adorante <noreply@studioadorante.it>",
      to: ["andrea.bucci014@gmail.com"],
      subject: "Hello world",
      // react: EmailTemplate({ firstName: "John" }),
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
