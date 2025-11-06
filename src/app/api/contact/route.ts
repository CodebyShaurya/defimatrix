import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL || "buildnboostin@gmail.com";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { fullName, email, companyName, referral, message } = formData;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [toEmail],
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Full Name: ${fullName}
        Email: ${email}
        Company Name: ${companyName || "Not provided"}
        Referred By: ${referral || "Not provided"}
        Message: ${message || "None"}
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Contact form submitted successfully", data }, { status: 200 });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
