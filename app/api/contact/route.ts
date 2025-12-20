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

        // In a real application, you would send an email here or save to a database.
        // For this demo, we'll log it to the console.
        console.log("--- NEW CONTACT FORM SUBMISSION ---")
        console.log("Name:", name || "Anonymous")
        console.log("Email:", email || "Not provided")
        console.log("Message:", message)
        console.log("-----------------------------------")

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error processing contact form:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
