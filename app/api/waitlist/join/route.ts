import { NextResponse } from "next/server";
import WaitlistEntry from "@/models/WaitlistEntry";
import dbConnect from "@/lib/dbConnect";
import { sendConfirmationEmail } from "@/lib/email";

export async function POST(req: Request) {
  await dbConnect();
  const { name, email } = await req.json();

  // Input validation
  if (!name || !email) {
    return NextResponse.json(
      { success: false, message: "Missing fields" },
      { status: 400 }
    );
  }

  try {
    // Check if email already exists
    const existing = await WaitlistEntry.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "Email already joined" },
        { status: 400 }
      );
    }

    // Create new entry
    await WaitlistEntry.create({ name, email });

    // Try to send confirmation email and debug on error
    let emailError = null;
    try {
      await sendConfirmationEmail({ name, email });
    } catch (err) {
      emailError = err;
      // LOG the error for debugging
      console.error("Email send error:", err);
    }

    // Emit real-time update
    try {
      if (globalThis.io) {
        globalThis.io.emit("waitlist:update", { type: "joined" });
      }
    } catch (e) {
      console.error("Socket emit error", e);
    }

    // Return success (but include emailError if email failed)
    return NextResponse.json({
      success: true,
      emailSent: !emailError,
      emailError: emailError ? String(emailError) : null,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Error joining waitlist" },
      { status: 500 }
    );
  }
}