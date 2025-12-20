"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function generateEnergyInsights(data: any) {
    if (!process.env.GEMINI_API_KEY) {
        // Fallback if no key is present
        return {
            insights: [
                "Since your home uses cooling often, upgrading to a smart thermostat can reduce wasted runtime by 15%.",
                "Based on typical usage, air sealing is the most effective way to stop energy loss in this home type."
            ]
        }
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" })

        const prompt = `
      Analyze this home energy profile and provide exactly 2 short, highly specific, "fix it first" recommendations.
      Structure each insight strictly as: [Cause/Context] -> [Action] -> [Outcome].
      Example tone: "Because your home is older (1975), sealing attic leaks prevents heated air loss and immediately lowers winter bills."
      
      Return ONLY a JSON object with a single key "insights" containing an array of 2 strings.
      Do NOT use markdown.
      
      Profile:
      - Location: ${data.state}
      - Home Type: ${data.homeType} (${data.yearBuilt})
      - Usage: ${data.hoursPerDay} hours/day
      - Selected Improvements: ${data.selectedMoves.join(", ")}
    `

        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()

        // Clean up markdown code blocks if present
        const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim()

        return JSON.parse(jsonStr)
    } catch (error) {
        console.error("AI Error:", error)
        return {
            insights: [
                "Reducing energy consumption lowers your carbon footprint significantly.",
                "Energy-efficient homes often have higher resale values.",
                "Small behavioral changes add up to major annual savings."
            ]
        }
    }
}
