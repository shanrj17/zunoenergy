import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, savings, state } = body

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            )
        }

        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'ZunoEnergy Calculator <no-reply@zunoenergy.com>',
            to: 'INFO@ZUNOENERGY.COM',
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

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error sending calculator lead:", error)
        return NextResponse.json(
            { error: "Failed to process lead" },
            { status: 500 }
        )
    }
}
