import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  let body: { name?: string; email?: string; subject?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, subject, message } = body;
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const subjectLabels: Record<string, string> = {
    interview: "Interview Inquiry",
    collaboration: "Project Collaboration",
    consulting: "QA Consulting",
    other: "Other",
  };

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subjectLabels[subject] ?? subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
          <div style="border-bottom:2px solid #2dd4bf;padding-bottom:16px;margin-bottom:24px">
            <h2 style="margin:0;color:#2dd4bf">Portfolio Contact</h2>
            <p style="margin:4px 0 0;color:#666;font-size:14px">${subjectLabels[subject] ?? subject}</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
            <tr><td style="padding:6px 0;color:#666;width:80px">From</td><td style="padding:6px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#2dd4bf">${email}</a></td></tr>
          </table>
          <div style="background:#f5f5f5;border-radius:8px;padding:16px;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send email:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
