# Master Unlocks

A premium SaaS tool for Threads power users. Unlock your growth potential with advanced scheduling, analytics, and engagement automation.

## Features (Planned)
- **Smart Scheduler**: Queue threads and visualize them on a calendar.
- **Deep Analytics**: Track follower growth and engagement metrics.
- **CRM System**: Manage leads and interactions directly.
- **Auto-Pilot**: Engagement automation and content repurposing.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment

To deploy this project:
1. Push to GitHub.
2. Import to Vercel.
3. **CRITICAL**: Add the following Environment Variables in Vercel Settings:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
