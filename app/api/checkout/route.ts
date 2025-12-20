import { NextResponse } from "next/server"
// import Stripe from "stripe"

export async function POST(request: Request) {
    // Temporarily disabled for launch — to be re-enabled later
    return NextResponse.json(
        { error: "Donation feature is temporarily disabled." },
        { status: 503 }
    )

    /*
    try {
        const body = await request.json()
        const { amount } = body

        if (!amount || amount < 1) {
            return NextResponse.json({ error: "Invalid donation amount" }, { status: 400 })
        }

        // Initialize Stripe
        const stripeKey = process.env.STRIPE_SECRET_KEY
        if (!stripeKey) {
            console.error("Stripe secret key is missing")
            return NextResponse.json({ error: "Payment service is unavailable" }, { status: 500 })
        }

        const stripe = new Stripe(stripeKey, {
            apiVersion: "2025-01-27.acacia", // Use the latest or a pinned version
        })

        // Base URL for redirection
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

        // Create Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Support ZunoEnergy",
                            description: "Voluntary contribution to keep the platform free.",
                            // Optional: Add images if you have them hosted
                            // images: [`${baseUrl}/logo.png`], 
                        },
                        unit_amount: Math.round(amount * 100), // Convert to cents
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${baseUrl}/donate/thank-you`,
            cancel_url: `${baseUrl}/donate`,
            metadata: {
                type: "donation",
            },
        })

        return NextResponse.json({ url: session.url })

    } catch (error: any) {
        console.error("Stripe Error:", error)
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        )
    }
    */
}
