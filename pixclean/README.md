# PixClean - AI Background Remover

A modern web application for removing image backgrounds using advanced AI technology.

## Features

- ⚡ Lightning-fast background removal
- 🎯 High-precision edge detection
- 🌙 Dark/Light theme support
- 📱 Responsive design
- 🔧 Built with Next.js 16 and React 19

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Components:** Radix UI, Lucide Icons
- **Theming:** next-themes
- **Language:** TypeScript

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pixclean/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── login/             # Login page
│   ├── (landing)/         # Route group for landing
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components
│   └── web/               # Web-specific components
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
