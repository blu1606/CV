# 🎯 MagiCV - AI-Powered CV Builder

> Transform your LinkedIn profile into tailored CVs with AI matching

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth%20%26%20DB-green)](https://supabase.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-OAuth-0077B5)](https://www.linkedin.com/)

## ✨ Features

- 🔐 **LinkedIn OAuth** - Sign in and sync your professional data
- 🤖 **AI Matching** - Analyze job descriptions and match your experience
- 📝 **Component Library** - Reusable CV components (experience, skills, projects)
- 🎨 **Multiple Templates** - Choose from professional CV designs
- 📊 **Match Scoring** - See how well your CV matches job requirements
- 🔄 **Real-time Sync** - Keep your data up-to-date with LinkedIn

## 🚀 Quick Start

### Prerequisites
- Node.js 18.18+ 
- npm 9+ or pnpm
- Supabase account
- LinkedIn OAuth credentials

### Installation

```bash
# Clone repository
git clone https://github.com/blu1606/CV.git
cd CV

# Install dependencies
npm install --legacy-peer-deps

# Setup environment variables
cp .env.example .env
# Edit .env with your credentials

# Run database migrations (see docs/QUICK_START.md)

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

- **[Quick Start Guide](./docs/QUICK_START.md)** - Complete setup walkthrough
- **[LinkedIn Auth Guide](./docs/LINKEDIN_AUTH_GUIDE.md)** - OAuth implementation details
- **[Data Integration](./docs/DATA_INTEGRATION.md)** - Database and data layer
- **[Architecture](./docs/architecture.md)** - System design and tech stack

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL via Supabase
- **Authentication:** Supabase Auth + LinkedIn OAuth
- **Styling:** Tailwind CSS 4.0
- **UI Components:** shadcn/ui + Radix UI
- **Deployment:** Vercel

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── components/        # Component library page
│   ├── editor/            # CV editor
│   └── settings/          # User settings
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/
│   ├── supabase/         # Supabase client & types
│   ├── linkedin/         # LinkedIn API integration
│   └── services/         # Data service layer
├── hooks/                # React hooks
├── docs/                 # Documentation
└── supabase/
    └── seed/             # Database seed scripts
```

## 🔐 Environment Variables

Required variables in `.env`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# LinkedIn OAuth
NEXT_PUBLIC_LINKEDIN_CLIENT_ID=your_client_id
LINKEDIN_CLIENT_SECRET=your_client_secret

# App Settings
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_USE_MOCK_DATA=false
```

## 🧪 Development

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📦 Database Setup

1. Create Supabase project
2. Run migrations in `supabase/migrations/`
3. (Optional) Run seed data in `supabase/seed/`
4. Configure LinkedIn OAuth redirect URLs

See [QUICK_START.md](./docs/QUICK_START.md) for detailed instructions.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file

## 🙋 Support

- 📖 [Documentation](./docs/)
- 🐛 [Issues](https://github.com/blu1606/CV/issues)
- 💬 [Discussions](https://github.com/blu1606/CV/discussions)

---

Made with ❤️ by [blu1606](https://github.com/blu1606)

## Scripts
- `npm run dev` – Start Next.js in dev mode
- `npm run build` – Build the app
- `npm run start` – Start the production server

## Links
- Space Grotesk: https://fonts.google.com/specimen/Space+Grotesk
- Instrument Serif: https://fonts.google.com/specimen/Instrument+Serif
