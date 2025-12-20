"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { supabase } from "@/lib/supabase"

export default function AuthPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [message, setMessage] = useState("")

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        try {
            if (isSignUp) {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                })
                if (error) throw error
                setMessage("Check your email for the confirmation link!")
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                })
                if (error) throw error
                router.push("/dashboard")
            }
        } catch (error) {
            if (error instanceof Error) {
                setMessage(error.message)
            } else {
                setMessage("An unexpected error occurred")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-10">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">
                        {isSignUp ? "Create an Account" : "Welcome Back"}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAuth} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Password</label>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {message && (
                            <p className="text-sm text-center text-muted-foreground">
                                {message}
                            </p>
                        )}
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading
                                ? "Loading..."
                                : isSignUp
                                    ? "Sign Up"
                                    : "Sign In"}
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="text-primary hover:underline"
                        >
                            {isSignUp
                                ? "Already have an account? Sign In"
                                : "Don't have an account? Sign Up"}
                        </button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
