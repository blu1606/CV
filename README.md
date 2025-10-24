# magiCV - AI-Powered Resume Generator

A modern, AI-first resume generator that creates optimized CVs in seconds. Built with Next.js, TypeScript, and shadcn/ui.

## ✨ Features

- **One-Click CV Generation** - Paste a job description and get a tailored CV instantly
- **Real-time Match Score** - See how well your CV matches job requirements
- **LinkedIn Integration** - Import your profile data seamlessly
- **Drag & Drop Editor** - Intuitive CV editing with real-time preview
- **Multiple Export Formats** - PDF, Word, and JSON export options
- **Component Library** - Reusable CV components for faster creation
- **AI-Powered Suggestions** - Smart recommendations for better matches
- **Responsive Design** - Works perfectly on desktop and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- PostgreSQL database
- LinkedIn Developer Account
- OpenAI API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/magicv-app.git
   cd magicv-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # API Configuration
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   
   # LinkedIn OAuth
   NEXT_PUBLIC_LINKEDIN_CLIENT_ID=your_linkedin_client_id
   LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
   
   # OpenAI API
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   
   # Database
   DATABASE_URL=postgresql://username:password@localhost:5432/magicv_db
   ```

4. **Set up the database**
   ```bash
   # Create database
   createdb magicv_db
   
   # Run migrations (when backend is set up)
   pnpm db:migrate
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture

### Frontend (This Repository)
- **Framework**: Next.js 14 with App Router
- **UI Library**: shadcn/ui + Tailwind CSS
- **State Management**: React hooks + Context
- **Type Safety**: TypeScript
- **Icons**: Lucide React

### Backend (Separate Repository)
- **API**: Node.js + Express
- **Database**: PostgreSQL
- **Authentication**: JWT + LinkedIn OAuth
- **AI Integration**: OpenAI API
- **File Storage**: AWS S3
- **Payments**: Stripe

## 📁 Project Structure

```
magicv-app/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── editor/            # CV editor
│   ├── library/           # Component library
│   ├── settings/          # User settings
│   └── upgrade/           # Subscription upgrade
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── *.tsx             # Page components
├── lib/                  # Utility libraries
│   ├── ai-service.ts     # AI integration
│   ├── api-service.ts    # Backend API client
│   ├── pdf-service.ts    # PDF generation
│   ├── drag-drop.ts      # Drag & drop utilities
│   └── error-handler.ts  # Error handling
├── hooks/                # Custom React hooks
├── styles/               # Global styles
└── public/               # Static assets
```

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Dependencies
pnpm add <package>     # Add dependency
pnpm add -D <package>  # Add dev dependency
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with Next.js rules
- **Prettier**: Code formatting
- **Tailwind**: Utility-first CSS

### Component Guidelines

1. **Use shadcn/ui components** when possible
2. **Follow the established patterns** for new components
3. **Include TypeScript interfaces** for all props
4. **Use proper error boundaries** and loading states
5. **Make components responsive** by default

## 🔌 API Integration

### LinkedIn OAuth Setup

1. **Create LinkedIn App**
   - Go to [LinkedIn Developer Portal](https://www.linkedin.com/developers/)
   - Create a new app
   - Add redirect URI: `http://localhost:3000/onboarding`
   - Get Client ID and Client Secret

2. **Configure Environment**
   ```env
   NEXT_PUBLIC_LINKEDIN_CLIENT_ID=your_client_id
   LINKEDIN_CLIENT_SECRET=your_client_secret
   ```

### OpenAI Integration

1. **Get API Key**
   - Sign up at [OpenAI](https://platform.openai.com/)
   - Generate API key
   - Add to environment variables

2. **Configure Usage**
   ```env
   NEXT_PUBLIC_OPENAI_API_KEY=your_api_key
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project to Vercel
   - Connect GitHub repository

2. **Configure Environment Variables**
   - Add all required environment variables
   - Set production API URLs

3. **Deploy**
   - Automatic deployment on push to main
   - Preview deployments for pull requests

### Other Platforms

- **Netlify**: Similar to Vercel
- **Railway**: Full-stack deployment
- **AWS Amplify**: Enterprise deployment

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Optimized with code splitting
- **Images**: Next.js Image optimization

## 🔒 Security

- **Authentication**: JWT tokens with refresh
- **Authorization**: Role-based access control
- **Data Validation**: Zod schemas
- **CSRF Protection**: Built-in Next.js protection
- **XSS Prevention**: React's built-in escaping

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Workflow

1. **Create issue** for new features/bugs
2. **Assign yourself** to the issue
3. **Create feature branch** from main
4. **Implement changes** with tests
5. **Create pull request** with description
6. **Request review** from team members
7. **Merge after approval**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [OpenAI](https://openai.com/) for AI capabilities
- [LinkedIn](https://www.linkedin.com/) for profile integration

## 📞 Support

- **Documentation**: [docs.magicv.app](https://docs.magicv.app)
- **Issues**: [GitHub Issues](https://github.com/your-username/magicv-app/issues)
- **Discord**: [Join our community](https://discord.gg/magicv)
- **Email**: support@magicv.app

---

**Built with ❤️ by the magiCV team**

