import { NextResponse } from "next/server"
import { Resend } from 'resend'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, message } = body

        console.log(`[Contact API] Processing submission from: ${email}`)

        // Validate required fields
        if (!message || message.trim().length === 0) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            )
        }

        // Check Env Vars Server-Side
        const apiKey = process.env.RESEND_API_KEY
        if (!apiKey) {
            console.error("[Contact API] CRITICAL: RESEND_API_KEY is missing")
            return NextResponse.json({ error: "Server Configuration Error: Missing API Key" }, { status: 500 })
        }

        const adminEmail = process.env.ADMIN_EMAIL
        if (!adminEmail) {
            console.error("[Contact API] CRITICAL: ADMIN_EMAIL is missing")
            return NextResponse.json({ error: "Server Configuration Error: Missing Admin Email" }, { status: 500 })
        }

        // Send email via Resend
        const resend = new Resend(apiKey);
        console.log(`[Contact API] Attempting to send to ${adminEmail}...`)

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: adminEmail,
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

        if (data.error) {
            console.error("[Contact API] Resend API Error:", data.error)
            return NextResponse.json({ error: `Email Provider Error: ${data.error.message}` }, { status: 500 })
        }

        console.log("[Contact API] Success:", data)
        return NextResponse.json({ success: true })

    } catch (error: any) {
        console.error("[Contact API] Unexpected Error:", error)
        return NextResponse.json(
            { error: "Internal Server Error: " + error.message },
            { status: 500 }
        )
    }
}
