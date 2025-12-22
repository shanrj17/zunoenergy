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

        console.log("Email sent successfully via Resend to", process.env.ADMIN_EMAIL)
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error sending contact email:", error)
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        )
    }
}
