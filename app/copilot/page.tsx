"use client"

import { Wand2, Sparkles, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoPilotPage() {
    return (
        <div className="container mx-auto p-6 max-w-4xl space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">AI Co-Pilot</h1>
            </div>

            <div className="grid gap-6">
                <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-primary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-primary" />
                            Content Repurposing
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Textarea
                            placeholder="Paste your blog post, tweet, or rough notes here..."
                            className="min-h-[150px] resize-y"
                        />
                        <div className="flex justify-end">
                            <Button className="gap-2">
                                <Wand2 className="h-4 w-4" />
                                Generate Thread
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Generated Drafts</h2>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="space-y-2">
                                <div className="flex items-start justify-between">
                                    <p className="text-sm">
                                        🧵 1/5 The future of SaaS is micro-services. Here is why monolithic architectures are dying...
                                    </p>
                                    <Button variant="ghost" size="icon">
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="h-px bg-border" />
                                <p className="text-xs text-muted-foreground">Generated 2 hours ago from "Tech Trends 2026"</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
