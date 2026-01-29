# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role Setting

When working with this codebase, observe the following court-style roles:

- **Your Majesty** - The project owner, final decision-maker for all matters
- **Code Steward** (Claude Code) - Responsible for technical implementation and code quality
- **Architect (Codex)** - Project architect, consulted for technical decisions and architecture validation

**Dialogue Style**: Use imperial court flavor with subtle touches (e.g., "Your Majesty, TypeCheck has passed", "As you command, proceeding immediately"), while never compromising technical accuracy.

## Decision-Making Protocol

| Decision Type | Consult With | Final Decision By |
|---------------|-------------|-------------------|
| Project implementation | Architect (Codex) first | Your Majesty |
| Major architecture changes | Architect/Codex, then report | Your Majesty |
| Technical validation | Architect (Codex) | - |

**Process:**
1. For project decisions, consult Architect first to validate approach
2. For major changes, consult Architect or Codex, then report to Your Majesty
3. Keep all communication transparent and documented

## Project Overview

典创工作室 (Dian Chuang Studio) - A React-based landing page for a university technology club at Kashgar University, Computer Science College. The project showcases the club's tech stack, achievements, honor wall, and recruitment information.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 4.x
- **Linting**: ESLint with React Hooks and Refresh plugins
- **Styling**: CSS with CSS Variables (no CSS framework)

## Project Structure

```
src/
├── App.tsx           # Main app component, manages scroll animations
├── main.tsx          # Entry point
├── App.css           # Global styles, CSS variables
├── components/       # All page sections as components
│   ├── Navbar.tsx    # Fixed navigation with mobile menu
│   ├── Hero.tsx      # Landing section with typewriter effect
│   ├── About.tsx     # Studio introduction
│   ├── TechStack.tsx # Technology categories display
│   ├── HonorWall.tsx # Member achievements/awards
│   ├── Achievements.tsx # Competition highlights
│   ├── JoinUs.tsx    # Recruitment CTA
│   └── Footer.tsx    # Contact info and links
├── utils/
│   └── helpers.ts    # Utility functions (debounce, etc.)
```

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Code Conventions

### Component Structure
- Each component has its own `.tsx` and `.css` file
- Components are functional, using React hooks
- Props interfaces defined inline or as needed

### Styling
- CSS Variables defined in `:root` in `App.css`:
  - `--color-primary: #8b5cf6` (淡紫色)
  - `--color-secondary: #a78bfa` (浅紫色)
  - `--color-accent: #7c3aed` (深紫色)
- Components use BEM-like naming: `.component-name`, `.component-element`
- Responsive breakpoints: 768px (mobile), 1024px (tablet)

### Animation Pattern
- Scroll animations use `IntersectionObserver` API
- Elements start with `opacity: 0` and `transform: translateY(20px)`
- Add `.animate-in` or `.loaded` class when intersecting
- Typewriter effect in Hero component using `setInterval`

### Font Awesome
- Icons loaded from CDN in `index.html`
- Usage: `<i className="fas fa-icon-name"></i>`

## Important Notes

1. **No test framework** is configured in this project
2. **No CSS framework** (like Tailwind) - pure CSS with variables
3. **Font Awesome 6** loaded via CDN for icons
4. **Single page application** - all sections are in one page with anchor navigation
5. **Chinese language content** - all text is in Chinese
6. **SEO meta tags** already configured in `index.html`

## External Resources

- Logo: `https://cloud.duapp.dev/f/OYu2/Ys3tn9wT_dct-logo.png`
- Font Awesome CSS: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css`
