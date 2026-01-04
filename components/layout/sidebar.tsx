"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    Calendar,
    BarChart2,
    Users,
    MessageSquare,
    Wand2,
    Settings,
    Menu,
} from "lucide-react"

const sidebarItems = [
    {
        title: "Scheduler",
        href: "/scheduler",
        icon: Calendar,
    },
    {
        title: "Analytics",
        href: "/analytics",
        icon: BarChart2,
    },
    {
        title: "CRM",
        href: "/crm",
        icon: Users,
    },
    {
        title: "Engagement",
        href: "/engagement",
        icon: MessageSquare,
    },
    {
        title: "Co-Pilot",
        href: "/copilot",
        icon: Wand2,
    },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="hidden border-r bg-muted/40 md:block w-64 min-h-screen">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 bg-background">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <span className="">Master Unlocks</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {sidebarItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                    pathname === item.href
                                        ? "bg-muted text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Link
                        href="/settings"
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
                            pathname === "/settings"
                                ? "bg-muted text-primary"
                                : ""
                        )}
                    >
                        <Settings className="h-4 w-4" />
                        Settings
                    </Link>
                </div>
            </div>
        </div>
    )
}
