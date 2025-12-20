"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error("Something went wrong. Please try again.")
            }

            setIsSuccess(true)
            setFormData({ name: "", email: "", message: "" })
        } catch (err) {
            setError("Failed to send message. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="bg-white min-h-screen">
            {/* HEADER / NAV HINT */}
            <div className="pt-8 px-6 lg:px-8 max-w-[800px] mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
            </div>

            <main className="px-6 py-12 lg:px-8 max-w-[800px] mx-auto">
                {isSuccess ? (
                    // SUCCESS STATE
                    <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                        <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Message received.</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-[500px] mx-auto leading-relaxed">
                            Thanks for taking the time to write. Every message is read personally, and feedback like this helps make ZunoEnergy clearer and more useful.
                        </p>
                        <Button variant="outline" asChild>
                            <Link href="/">Back to homepage</Link>
                        </Button>
                    </div>
                ) : (
                    // FORM STATE
                    <>
                        <div className="text-center mb-16">
                            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Contact & Feedback</h1>
                            <div className="text-lg text-gray-600 leading-relaxed max-w-[600px] mx-auto space-y-4">
                                <p>
                                    ZunoEnergy is built to be clear, useful, and honest.
                                </p>
                                <p>
                                    If something feels confusing, inaccurate, or could be better, I genuinely want to hear from you.
                                </p>
                                <p className="text-gray-500 text-base">
                                    This isn’t a sales inbox. Every message is read personally, and thoughtful feedback helps improve the platform for everyone.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-10 shadow-xl shadow-gray-900/5 max-w-[600px] mx-auto">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-gray-700 font-medium">Your name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Your name (optional)"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="h-11 bg-gray-50 border-gray-200 focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-gray-700 font-medium">Your email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Your email (only if you’d like a reply)"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="h-11 bg-gray-50 border-gray-200 focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-gray-700 font-medium">What would you like to share?</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="A question, suggestion, correction, or anything you think could be improved."
                                        rows={6}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="bg-gray-50 border-gray-200 focus:bg-white resize-none transition-all text-base p-4"
                                    />
                                </div>

                                {error && (
                                    <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg text-center font-medium">
                                        {error}
                                    </p>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 text-base font-semibold bg-gray-900 hover:bg-gray-800"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>

                                <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                                    No marketing emails. No sales follow-up.<br />
                                    Your message is used only to respond or to quietly improve ZunoEnergy.
                                </p>
                            </form>
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}
