"use client"

import { CRMTable } from "@/components/crm/crm-table"

export default function CRMPage() {
    return (
        <div className="container mx-auto p-6 max-w-6xl space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Lead CRM</h1>
            </div>

            <CRMTable />
        </div>
    )
}
