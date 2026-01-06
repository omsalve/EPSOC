import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_TO = process.env.CONTACT_RECIPIENT_EMAIL || '';
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL || 'noreply@epsoc.local';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, category, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!CONTACT_TO) {
      return NextResponse.json(
        { error: 'Contact recipient email is not configured on the server.' },
        { status: 500 }
      );
    }

    const subject = `[EPSOC Contact] ${category || 'General'} — ${name}`;

    const html = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; color: #111;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${category ? `<p><strong>Category:</strong> ${category}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      html,
      reply_to: email,
    } as any);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error sending contact email', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
