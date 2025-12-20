"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

// Mock tips for now, will integrate Gemini later
const mockTips = [
    "Switch to LED bulbs to save up to $15/month.",
    "Install a smart thermostat to optimize heating/cooling.",
    "Unplug electronics when not in use to reduce phantom load.",
]

export function GeminiTips() {
    const [tips, setTips] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setTips(mockTips)
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    AI Personalized Tips
                </CardTitle>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="space-y-2">
                        <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                        <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
                        <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
                    </div>
                ) : (
                    <ul className="list-inside list-disc space-y-2 text-sm">
                        {tips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
    )
}
