import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    let newContact = null;

    // 1. Attempt to save to MongoDB
    try {
      await connectToDatabase();
      newContact = await Contact.create({
        name,
        email,
        message,
      });
    } catch (dbError) {
      console.error("MongoDB Error (Continuing to send email):", dbError);
      // We won't return here, we'll still try to send the email!
    }

    // 2. Configure Nodemailer to send email alert
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS?.replace(/\s+/g, ''); // Remove spaces if any

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.warn("Email credentials not found in environment variables.");
      return NextResponse.json({ error: "Email configuration missing" }, { status: 500 });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: EMAIL_USER,
        to: EMAIL_USER, // Send to yourself
        replyTo: email, // Reply to the user who filled the form
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new message from your portfolio website!\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        html: `
          <h3>New Message from Portfolio Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Nodemailer Error:", emailError);
      return NextResponse.json({ error: "Failed to send email. Check your credentials." }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: newContact }, { status: 200 });
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
