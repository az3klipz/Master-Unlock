"use client"

import * as React from "react"
import { Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { defaultRules, AutoReplyRule } from "@/lib/engagement-data"

export default function EngagementPage() {
    const [rules, setRules] = React.useState<AutoReplyRule[]>(defaultRules)

    const toggleRule = (id: string) => {
        setRules(rules.map(rule =>
            rule.id === id ? { ...rule, isActive: !rule.isActive } : rule
        ))
    }

    const deleteRule = (id: string) => {
        setRules(rules.filter(rule => rule.id !== id))
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Engagement Bot</h1>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    New Rule
                </Button>
            </div>

            <div className="grid gap-4">
                {rules.map((rule) => (
                    <Card key={rule.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-medium">
                                Keyword: <span className="text-primary">"{rule.keyword}"</span>
                            </CardTitle>
                            <Switch
                                checked={rule.isActive}
                                onCheckedChange={() => toggleRule(rule.id)}
                            />
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                                Reply: {rule.replyTemplate}
                            </p>
                            <div className="flex justify-end">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                    onClick={() => deleteRule(rule.id)}
                                >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
