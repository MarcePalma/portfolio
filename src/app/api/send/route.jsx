import { NextResponse } from "next/server";
import { Resend } from "resend";
import Image from "next/image";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail, email],
      subject: subject,
      react: <>
        <h1>{subject}</h1>
        <p>Thank you for contacting me!</p>
        <p>New message submitted:</p>
        <p>{message}</p>
        <p>I &apos;ll try to reach you as soon as possible</p>
      </>,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email." });
  }
}