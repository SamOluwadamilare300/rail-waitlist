import nodemailer from "nodemailer";

export async function sendConfirmationEmail({ name, email }: { name: string, email: string }) {
  const transporter = nodemailer.createTransport({
    // Configure your SMTP
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Rail" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "You've joined the Rail waitlist!",
    html: `<p>Hi ${name},<br/><br/>Thank you for joining the Rail waitlist! We'll keep you posted on next steps.<br/><br/>Best,<br/>Rail Team</p>`,
  });
}