🧭 magiCV – Minimal UX Specification (AI-First Version)
🎯 UX Philosophy
Core UX Goals

One-Click Flow: The user should go from login to a generated CV with a single primary action.

Clarity & Speed: No unnecessary menus, setup steps, or distractions.

Confidence Feedback: The system always provides visible progress and confidence indicators (e.g., Match Score).

Edit Only If Needed: Refinement is optional — users can export right away or tweak later.

Target Personas

Tech Nomad: Developers, engineers, or data professionals who want a fast, AI-optimized CV for a job description.

Creative Nomad: Designers, writers, or freelancers who value a visually compelling CV pulled from their creative portfolio.

🗺️ Information Architecture
Primary Screens (7 total)
Group	Screen	Main Purpose
Unauthenticated	Landing Page	Introduction and “Login with LinkedIn” CTA
Authentication	Onboarding & Data Sync	Displays “Syncing…” or “Sync Failed”
Authenticated App	Dashboard	Shows synced data and CTA “New CV”
	CV Editor	Two-panel interface: Preview + AI Tools / Match Score
	Component Library	Manage and edit professional data components
	Account Settings	Manage user profile and preferences
	Upgrade / Waitlist	Premium upgrade info or waitlist sign-up
Optional / Secondary States

Export PDF Modal

Error States (Sync Failed, Permission Denied, Empty Dashboard)

🔄 Simplified User Flows
1️⃣ One-Click Onboarding

User Action: Click “Login with LinkedIn”

System Behavior:

OAuth → Auto-sync → “Syncing your profile…”

If success → Dashboard displays user data

If failure → Error message “Sync Failed / Retry”

2️⃣ CV Generation Flow

Entry Point: Dashboard → “New CV”

User Action: Paste job description → Click “Generate CV”

System Behavior:

Displays “Building your draft…”

AI generates draft → Opens CV Editor

Editor shows live Match Score and “Export to PDF” button

Optional: User edits components via drag-and-drop or inline editing.

3️⃣ Export Flow

User Action: Click “Export to PDF”

System Behavior:

Shows “Generating your PDF…”

If success → Triggers browser download

If failure → Displays “Could not generate PDF. Please try again.”

4️⃣ Upgrade Flow (Optional)

Trigger: User attempts to create more than one CV on the free plan

System Behavior:

Displays “Upgrade to Premium” modal

Lists benefits (Unlimited CVs, Multiple Versions)

CTA “Join Waitlist” records user interest

🧩 UI Structure
Persistent Elements

Top Navigation: Logo – Dashboard – Library – Profile (dropdown).

Primary CTA: “New CV” button always visible and emphasized.

Dashboard

Layout:

Welcome header with user avatar

Job Description input area + “Generate CV” button

CV list (if any exist)

States:

Empty → only CTA visible

Populated → displays existing CV cards

CV Editor

Left Panel: Live CV preview

Right Panel: Component Library + AI suggestions + Match Score

Interactions:

Drag & drop or click-to-add components

Inline text edits

Real-time Match Score updates

Component Library

View: Simple list of components in cards with Edit/Delete actions

Controls: Search bar only — no tagging or filters in MVP

Upgrade / Waitlist

Modal Design: One clean modal with benefits summary and a single CTA (“Join Waitlist”)

No extra navigation or side actions

🎨 Visual & System Design

Design System: Built with shadcn/ui + Tailwind CSS

Core Components: Button, Card, Textarea, Modal, Dropdown

Visual Style: Minimalistic with clear contrast for CTAs and system states

Animation: Subtle and purposeful — used for state feedback (hover, load, transitions)

Responsiveness:

Mobile: Tabs replace side panels

Desktop: Two-panel layout retained

Accessibility: Follows WCAG 2.1 AA compliance

⚡ Performance & Handoff

Performance Goal: <100ms perceived response for core actions

Mockup Generation: To be created using AI UI tools (e.g., Vercel v0, Lovable.ai)

Next Step: Use this spec to generate mockups and proceed to front-end architecture setup