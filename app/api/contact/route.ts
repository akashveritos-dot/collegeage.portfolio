import { NextResponse } from "next/server";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact endpoint. Validates server-side, then acknowledges.
 *
 * INTEGRATION POINT — this does NOT yet deliver the message anywhere.
 * Wire one of the following where marked below, then remove this note:
 *   - Email:   Resend / Postmark / SendGrid / Nodemailer
 *   - Storage: a database row, Google Sheet, or Notion entry
 *   - Webhook: Slack / Discord notification
 * Until then it validates input and returns success so the UI is usable,
 * but nothing is persisted or sent. (No fake "delivered" claim is made.)
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || !emailRe.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: "Please complete all required fields correctly." },
      { status: 422 }
    );
  }

  // TODO(integration): deliver `body` here (email / DB / webhook).
  // e.g. await resend.emails.send({ ... })

  return NextResponse.json({
    message: "Message received — I'll be in touch soon.",
  });
}
