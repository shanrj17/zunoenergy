import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, message } = body

        // Validate required fields
        if (!message || message.trim().length === 0) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            )
        }

        // Send email via Resend
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'onboarding@resend.dev', // Default testing domain that always works
            to: process.env.ADMIN_EMAIL as string, // Your personal Gmail (configured in Vercel)
            subject: 'New Contact Message — ZunoEnergy',
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name || "Anonymous"}</p>
                <p><strong>Email:</strong> ${email || "Not provided"}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <hr />
                <h3>Message:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        // Log for debug (server-side only)
        console.log("Email sent successfully via Resend to INFO@ZUNOENERGY.COM")

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error sending contact email:", error)
        // Return 200 to user to not break UX, but log error
        // Or return 500 if strict
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        )
    }
}
