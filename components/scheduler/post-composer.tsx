"use client"

import * as React from "react"
import { Send, Image, Hash, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function PostComposer() {
    const [content, setContent] = React.useState("")
    const [characterCount, setCharacterCount] = React.useState(0)

    const MAX_CHARS = 500

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value
        if (text.length <= MAX_CHARS) {
            setContent(text)
            setCharacterCount(text.length)
        }
    }

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Compose Thread</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
                <div className="relative flex-1">
                    <Textarea
                        placeholder="What's new?"
                        className="min-h-[200px] h-full resize-none text-lg p-4 border-none focus-visible:ring-0 bg-transparent"
                        value={content}
                        onChange={handleContentChange}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                        {characterCount}/{MAX_CHARS}
                    </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" title="Add Image">
                            <Image className="h-5 w-5 text-muted-foreground" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Add Hashtag">
                            <Hash className="h-5 w-5 text-muted-foreground" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Add Emoji">
                            <Smile className="h-5 w-5 text-muted-foreground" />
                        </Button>
                    </div>

                    <div className="flex gap-2">
                        <Input type="datetime-local" className="w-auto" />
                        <Button className="gap-2">
                            <Send className="h-4 w-4" />
                            Schedule
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
