import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Icon replacement: CSS-styled colored boxes with symbols ──────────────────
// Data URIs and SVGs are blocked by Gmail/Outlook — using styled table cells instead.

function iconBox(char: string): string {
  return `<table cellpadding="0" cellspacing="0" style="display:inline-table;"><tr><td style="width:32px;height:32px;background:#1a3fa0;border-radius:6px;text-align:center;vertical-align:middle;color:#ffffff;font-size:15px;font-weight:700;font-family:Arial,sans-serif;line-height:32px;">${char}</td></tr></table>`;
}

function serviceBox(char: string, label: string): string {
  return `<td style="text-align:center;padding:8px 6px;width:25%;">
    <table cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td style="width:40px;height:40px;background:#eef3fb;border:2px solid #1a3fa0;border-radius:8px;text-align:center;vertical-align:middle;color:#1a3fa0;font-size:17px;font-weight:900;font-family:Arial,sans-serif;line-height:40px;">${char}</td></tr></table>
    <div style="font-size:10px;font-weight:700;color:#334155;margin-top:5px;line-height:1.4;">${label}</div>
  </td>`;
}

// ─── Shared layout helpers ────────────────────────────────────────────────────

function logoHeader(): string {
  return `<tr>
    <td style="background:#ffffff;padding:20px 40px 16px;text-align:center;border-bottom:3px solid #1a3fa0;">
      <img
        src="https://ik.imagekit.io/peh3xvmh1/Gama%20Next%20Horizontal%20(5)%20(1).png"
        alt="Gamanext Software Solutions"
        width="200"
        style="display:block;margin:0 auto;max-width:200px;height:auto;border:0;"
      />
    </td>
  </tr>`;
}

function detailsRow(char: string, label: string, value: string): string {
  return `<tr>
    <td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;background:#eef3fb;width:46px;text-align:center;vertical-align:middle;">
      ${iconBox(char)}
    </td>
    <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;background:#eef3fb;width:155px;vertical-align:middle;">
      <span style="font-size:13px;font-weight:700;color:#1a3fa0;">${label}</span>
    </td>
    <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#ffffff;vertical-align:middle;">
      <span style="font-size:13px;color:#1e293b;">${value}</span>
    </td>
  </tr>`;
}

function detailsTable(
  name: string,
  email: string,
  phone: string | undefined,
  company: string | undefined,
  subject: string | undefined,
  message: string
): string {
  return `<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;border-collapse:collapse;">
    <thead>
      <tr>
        <td colspan="3" style="padding:13px 16px;background:#ffffff;border-bottom:2px solid #1a3fa0;">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle;">${iconBox("&#9776;")}</td>
            <td style="vertical-align:middle;padding-left:10px;">
              <span style="font-size:15px;font-weight:700;color:#1a3fa0;">Submitted Details</span>
            </td>
            <td style="vertical-align:middle;padding-left:14px;width:999px;">
              <div style="height:2px;background:#e2e8f0;border-radius:2px;"></div>
            </td>
          </tr></table>
        </td>
      </tr>
    </thead>
    <tbody>
      ${detailsRow("N", "Your Name", `<strong>${name}</strong>`)}
      ${detailsRow("@", "Email Address", `<a href="mailto:${email}" style="color:#1a3fa0;text-decoration:none;font-weight:600;">${email}</a>`)}
      ${detailsRow("#", "Phone Number", phone ? phone : `<span style="color:#94a3b8;">Not provided</span>`)}
      ${detailsRow("B", "Company Name", company ? company : `<span style="color:#94a3b8;">Not provided</span>`)}
      ${detailsRow("S", "Subject", subject || "General Inquiry")}
      ${detailsRow("M", "Your Message", `<span style="white-space:pre-wrap;line-height:1.7;">${message}</span>`)}
    </tbody>
  </table>`;
}

function servicesAndFooter(year: number): string {
  return `<!-- SERVICES -->
  <tr>
    <td style="background:#ffffff;padding:20px 40px 16px;border-top:1px solid #e2e8f0;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        ${serviceBox("&lt;/&gt;", "Custom<br>Software")}
        ${serviceBox("&#9635;", "Mobile App<br>Development")}
        ${serviceBox("&#9729;", "Cloud<br>Solutions")}
        ${serviceBox("&#9783;", "IT Consulting<br>&amp; Support")}
      </tr></table>
    </td>
  </tr>

  <!-- CONTACT BAR -->
  <tr>
    <td style="background:#1a3fa0;padding:13px 16px;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td style="text-align:center;color:#ffffff !important;font-size:11px;padding:0 6px;border-right:1px solid rgba(255,255,255,0.3);">www.gamanext.com</td>
        <td style="text-align:center;color:#ffffff !important;font-size:11px;padding:0 6px;border-right:1px solid rgba(255,255,255,0.3);">info@gamanext.com</td>
        <td style="text-align:center;color:#ffffff !important;font-size:11px;padding:0 6px;border-right:1px solid rgba(255,255,255,0.3);">+91 62812 88314</td>
        <td style="text-align:center;color:#ffffff !important;font-size:11px;padding:0 6px;">India</td>
      </tr></table>
    </td>
  </tr>

  <!-- COPYRIGHT -->
  <tr>
    <td style="background:#1a3fa0;padding:8px 20px 14px;text-align:center;border-top:1px solid rgba(255,255,255,0.15);">
      <p style="margin:0;color:rgba(255,255,255,0.65);font-size:11px;">&copy; ${year} Gamanext Software Solutions. All rights reserved.</p>
    </td>
  </tr>`;
}

// ─── Admin notification email ─────────────────────────────────────────────────

function buildAdminEmail(
  name: string,
  email: string,
  phone: string | undefined,
  company: string | undefined,
  subject: string | undefined,
  message: string,
  year: number
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>New Inquiry - Gamanext</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:24px 12px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

      ${logoHeader()}

      <!-- HERO -->
      <tr>
        <td style="background:#1a3fa0;padding:28px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle;width:74px;">
              <table cellpadding="0" cellspacing="0"><tr><td style="width:60px;height:60px;background:rgba(255,255,255,0.18);border-radius:50%;text-align:center;vertical-align:middle;color:#ffffff;font-size:26px;font-weight:900;font-family:Arial,sans-serif;">&#9993;</td></tr></table>
            </td>
            <td style="vertical-align:middle;padding-left:18px;">
              <h1 style="margin:0 0 5px;color:#ffffff;font-size:22px;font-weight:800;font-family:'Segoe UI',Arial,sans-serif;">New Inquiry Received!</h1>
              <p style="margin:0 0 4px;color:rgba(255,255,255,0.9);font-size:13px;font-weight:600;">Someone submitted the contact form on gamanext.com.</p>
              <p style="margin:0;color:rgba(255,255,255,0.7);font-size:12px;">Reply directly to this email to respond to ${name}.</p>
            </td>
            <td style="vertical-align:middle;width:70px;text-align:right;">
              <div style="font-size:42px;color:rgba(255,255,255,0.6);line-height:1;">&#9993;</div>
            </td>
          </tr></table>
        </td>
      </tr>

      <!-- INTRO -->
      <tr>
        <td style="background:#ffffff;padding:24px 40px 16px;">
          <p style="margin:0 0 6px;font-size:15px;color:#1e293b;font-family:'Segoe UI',Arial,sans-serif;">Hi <strong>Team Gamanext</strong>,</p>
          <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;font-family:'Segoe UI',Arial,sans-serif;">
            A new inquiry was received from <strong style="color:#1a3fa0;">${name}</strong> via the website contact form.
            Please review and respond within <strong style="color:#1a3fa0;">24 business hours</strong>.
          </p>
        </td>
      </tr>

      <!-- DETAILS TABLE -->
      <tr><td style="background:#ffffff;padding:0 40px 24px;">${detailsTable(name, email, phone, company, subject, message)}</td></tr>

      <!-- CTA -->
      <tr>
        <td style="background:#f8fafc;padding:18px 40px 22px;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle;">
              <p style="margin:0 0 8px;font-size:13px;color:#64748b;line-height:1.5;font-family:'Segoe UI',Arial,sans-serif;">If urgent, reply directly to this email to contact ${name}.</p>
              <p style="margin:0;font-size:13px;color:#475569;font-family:'Segoe UI',Arial,sans-serif;">Best Regards,<br><strong style="color:#1a3fa0;">Gamanext Contact System</strong><br><span style="color:#94a3b8;font-size:12px;">Automated notification</span></p>
            </td>
            <td style="vertical-align:middle;text-align:right;padding-left:20px;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Your inquiry at Gamanext')}" style="display:inline-block;background:#1a3fa0;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:13px 22px;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;white-space:nowrap;">Reply to ${name} &#8594;</a>
            </td>
          </tr></table>
        </td>
      </tr>

      ${servicesAndFooter(year)}

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

// ─── Customer confirmation email ──────────────────────────────────────────────

function buildConfirmationEmail(
  name: string,
  email: string,
  phone: string | undefined,
  company: string | undefined,
  subject: string | undefined,
  message: string,
  year: number
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>We received your message - Gamanext</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:24px 12px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

      ${logoHeader()}

      <!-- HERO -->
      <tr>
        <td style="background:#1a3fa0;padding:28px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle;width:80px;">
              <table cellpadding="0" cellspacing="0"><tr><td style="width:66px;height:66px;background:rgba(255,255,255,0.18);border-radius:50%;text-align:center;vertical-align:middle;color:#ffffff;font-size:28px;font-family:Arial,sans-serif;">&#10148;</td></tr></table>
            </td>
            <td style="vertical-align:middle;padding-left:18px;">
              <h1 style="margin:0 0 6px;color:#ffffff;font-size:26px;font-weight:800;font-family:'Segoe UI',Arial,sans-serif;">Thank You!</h1>
              <p style="margin:0 0 5px;color:rgba(255,255,255,0.95);font-size:14px;font-weight:600;font-family:'Segoe UI',Arial,sans-serif;">We've received your message successfully.</p>
              <p style="margin:0;color:rgba(255,255,255,0.75);font-size:12px;line-height:1.6;font-family:'Segoe UI',Arial,sans-serif;">Our team will review your request and get back to you as soon as possible.</p>
            </td>
            <td style="vertical-align:middle;width:76px;text-align:right;">
              <table cellpadding="0" cellspacing="0" style="margin-left:auto;"><tr>
                <td style="position:relative;">
                  <div style="font-size:40px;color:rgba(255,255,255,0.75);line-height:1;">&#9993;</div>
                  <table cellpadding="0" cellspacing="0" style="margin-top:-10px;margin-left:auto;"><tr>
                    <td style="width:22px;height:22px;background:#22c55e;border-radius:50%;text-align:center;vertical-align:middle;color:#ffffff;font-size:13px;font-weight:700;font-family:Arial,sans-serif;">&#10003;</td>
                  </tr></table>
                </td>
              </tr></table>
            </td>
          </tr></table>
        </td>
      </tr>

      <!-- INTRO -->
      <tr>
        <td style="background:#ffffff;padding:26px 40px 18px;">
          <p style="margin:0 0 8px;font-size:15px;font-weight:600;color:#1e293b;font-family:'Segoe UI',Arial,sans-serif;">Hi there,</p>
          <p style="margin:0;font-size:14px;color:#475569;line-height:1.8;font-family:'Segoe UI',Arial,sans-serif;">
            Thank you for reaching out to <strong style="color:#1a3fa0;">Gamanext Software Solutions</strong>.<br>
            We have received your enquiry and our team will respond to you within <strong style="color:#1a3fa0;">24 business hours</strong>.
          </p>
        </td>
      </tr>

      <!-- DETAILS TABLE -->
      <tr><td style="background:#ffffff;padding:0 40px 26px;">${detailsTable(name, email, phone, company, subject, message)}</td></tr>

      <!-- VISIT WEBSITE CTA -->
      <tr>
        <td style="background:#eef3fb;padding:18px 40px;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle;">
              <table cellpadding="0" cellspacing="0"><tr>
                <td style="vertical-align:middle;">
                  <table cellpadding="0" cellspacing="0"><tr><td style="width:42px;height:42px;background:#dbeafe;border-radius:50%;text-align:center;vertical-align:middle;color:#1a3fa0;font-size:18px;font-weight:700;font-family:Arial,sans-serif;">W</td></tr></table>
                </td>
                <td style="vertical-align:middle;padding-left:12px;">
                  <span style="font-size:13px;color:#475569;line-height:1.5;font-family:'Segoe UI',Arial,sans-serif;">Explore our services and solutions<br>on our website.</span>
                </td>
              </tr></table>
            </td>
            <td style="text-align:right;white-space:nowrap;padding-left:16px;">
              <a href="https://www.gamanext.com" style="display:inline-block;background:#1a3fa0;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:13px 22px;border-radius:8px;font-family:'Segoe UI',Arial,sans-serif;">Visit Our Website &#8594;</a>
            </td>
          </tr></table>
        </td>
      </tr>

      <!-- SIGNATURE -->
      <tr>
        <td style="background:#ffffff;padding:22px 40px 20px;">
          <p style="margin:0 0 8px;font-size:13px;color:#64748b;line-height:1.7;font-family:'Segoe UI',Arial,sans-serif;">
            If your request is urgent, feel free to reply to this email or contact us directly.
          </p>
          <p style="margin:0;font-size:13px;color:#475569;font-family:'Segoe UI',Arial,sans-serif;">
            Best Regards,<br>
            <strong style="color:#1a3fa0;">Team Gamanext</strong><br>
            <span style="color:#94a3b8;font-size:12px;">Software Solutions</span>
          </p>
        </td>
      </tr>

      ${servicesAndFooter(year)}

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

// ─── API Route ────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const year = new Date().getFullYear();
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || smtpUser || "info@gamanext.com";

    const adminSubject = subject
      ? `[Gamanext] New Inquiry: ${subject}`
      : `[Gamanext] New Inquiry from ${name}`;

    const confirmSubject = `We've received your message - Gamanext Software Solutions`;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });

      // ── 1. Send admin notification ──────────────────────────────────────────
      try {
        await transporter.sendMail({
          from: `"Gamanext Website" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: adminSubject,
          html: buildAdminEmail(name, email, phone, company, subject, message, year),
        });
        console.log(`[Gamanext] Admin notification sent to ${receiverEmail}`);
      } catch (adminErr: any) {
        console.error("[Gamanext] Admin email FAILED:", adminErr?.message);
      }

      // ── 2. Send confirmation to form submitter ──────────────────────────────
      //    Runs independently — admin failure does not block this.
      try {
        await transporter.sendMail({
          from: `"Gamanext Software Solutions" <${smtpUser}>`,
          to: email,                 // ← the email entered in the contact form
          subject: confirmSubject,
          html: buildConfirmationEmail(name, email, phone, company, subject, message, year),
        });
        console.log(`[Gamanext] Confirmation email sent to ${email}`);
      } catch (confirmErr: any) {
        console.error(`[Gamanext] Confirmation email to ${email} FAILED:`, confirmErr?.message);
      }

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    } else {
      // Dev mode — no SMTP configured
      console.log("=========================================");
      console.log("[Gamanext] CONTACT FORM SUBMISSION (SMTP not configured)");
      console.log(`Name:    ${name}`);
      console.log(`Email:   ${email}`);
      console.log(`Phone:   ${phone || "N/A"}`);
      console.log(`Subject: ${subject || "N/A"}`);
      console.log(`Company: ${company || "N/A"}`);
      console.log(`Message: ${message}`);
      console.log("Add SMTP_USER & SMTP_PASS to .env to send live emails.");
      console.log("=========================================");

      return NextResponse.json({
        success: true,
        message:
          "Your message has been received! (Configure SMTP in .env for live email delivery).",
      });
    }
  } catch (error: any) {
    console.error("[Gamanext] Contact Form API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to submit contact form. Please try again." },
      { status: 500 }
    );
  }
}
