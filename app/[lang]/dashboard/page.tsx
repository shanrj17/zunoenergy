"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { User } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export default function DashboardPage() {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) {
                router.push("/auth")
            } else {
                setUser(session.user)
            }
            setLoading(false)
        }
        checkUser()
    }, [router])

    if (loading) {
        return <div className="container py-10">Loading...</div>
    }

    if (!user) {
        return null
    }

    return (
        <div className="container py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back, {user.email}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Saved Calculations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            No saved calculations yet.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Solar Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            No solar projects saved.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
