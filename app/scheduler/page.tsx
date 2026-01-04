import { PostCalendar } from "@/components/scheduler/post-calendar"
import { PostComposer } from "@/components/scheduler/post-composer"

export default function SchedulerPage() {
    return (
        <div className="container mx-auto p-6 max-w-6xl">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold tracking-tight">Thread Scheduler</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                {/* Left Column: Calendar & Queue (1/3 width) */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <PostCalendar />
                </div>

                {/* Right Column: Composer (2/3 width) */}
                <div className="lg:col-span-2">
                    <PostComposer />
                </div>
            </div>
        </div>
    )
}
