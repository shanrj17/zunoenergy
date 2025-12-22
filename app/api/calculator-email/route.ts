import { NextResponse } from "next/server"
import { Resend } from 'resend'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, savings, state } = body

        console.log(`[Calculator API] Processing lead from: ${email}`)

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            )
        }

        // Check Env Vars
        const apiKey = process.env.RESEND_API_KEY
        if (!apiKey) {
            console.error("[Calculator API] CRITICAL: RESEND_API_KEY is missing")
            return NextResponse.json({ error: "Server Config Error: Missing API Key" }, { status: 500 })
        }

        const adminEmail = process.env.ADMIN_EMAIL
        if (!adminEmail) {
            console.error("[Calculator API] CRITICAL: ADMIN_EMAIL is missing")
            return NextResponse.json({ error: "Server Config Error: Missing Admin Email" }, { status: 500 })
        }

        const resend = new Resend(apiKey);
        console.log(`[Calculator API] Sending lead to ${adminEmail}...`)

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: adminEmail,
            subject: 'New Free Plan Request — ZunoEnergy',
            html: `
                <h2>New Calculator Lead</h2>
                <p><strong>User Email:</strong> ${email}</p>
                <p><strong>Estimated Savings:</strong> $${savings}</p>
                <p><strong>State:</strong> ${state}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <p><em>This is an internal notification only. No auto-reply was sent to the user.</em></p>
            `
        });

        if (data.error) {
            console.error("[Calculator API] Resend API Error:", data.error)
            return NextResponse.json({ error: `Email Provider Error: ${data.error.message}` }, { status: 500 })
        }

        console.log("[Calculator API] Success:", data)
        return NextResponse.json({ success: true })

    } catch (error: any) {
        console.error("[Calculator API] Unexpected Error:", error)
        return NextResponse.json(
            { error: "Internal Server Error: " + error.message },
            { status: 500 }
        )
    }
}
