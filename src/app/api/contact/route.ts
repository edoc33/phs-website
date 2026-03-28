import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";
import { Resend } from "resend";

const SHEET_ID = "1e8QF6czZg4U4PcuWPxmbtcWDqM0fe4TFlY26cxmI1vI";
const NOTIFY_EMAILS = ["eric.docouto@gmail.com", "portuguesehousekeeping@gmail.com"];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, details } = data;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "First name, last name, email, and phone are required." },
        { status: 400 }
      );
    }

    // 1. Write to Google Sheet
    const credentials = JSON.parse(
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}"
    );

    const auth = new GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const token = await client.getAccessToken();

    const row = [
      new Date().toISOString(),
      firstName || "",
      lastName || "",
      email || "",
      phone || "",
      details || "",
    ];

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A:F:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          range: "Sheet1!A:F",
          majorDimension: "ROWS",
          values: [row],
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Sheets API error:", err);
      return NextResponse.json(
        { error: "Failed to save submission." },
        { status: 500 }
      );
    }

    // 2. Send email notification via Resend
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Portuguese Housekeeping Services <notifications@portuguesemaids.ca>",
        to: NOTIFY_EMAILS,
        subject: `New Call-Back Request: ${firstName} ${lastName}`,
        text: [
          `New request from portuguesemaids.ca`,
          ``,
          `Name: ${firstName} ${lastName}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Details: ${details || "None provided"}`,
          ``,
          `Submitted: ${new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })}`,
        ].join("\n"),
      });
    } catch (emailErr) {
      // Log but don't fail — the sheet entry was saved
      console.error("Email notification failed:", emailErr);
    }

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
