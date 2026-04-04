# Pyrebound website

A static marketing site built with Astro, Tailwind CSS v4, and pnpm.

## Tech Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- [Embla Carousel](https://www.embla-carousel.com) — carousel/slider
- [astro-icon](https://github.com/natemoo-re/astro-icon) — icon integration
- [pnpm](https://pnpm.io) — package manager
- [ESLint](https://eslint.org) + [Prettier](https://prettier.io) — linting and formatting

## Project Structure

```
pyrebound-website/
├── public/
│   ├── favicon.png
│   ├── fonts/
│   ├── funding/
│   ├── games/
│   ├── logo/
│   └── scripts/
│       └── main.js            # Client-side JS (theme, carousel)
└── src/
    ├── pages/
    │   └── index.astro        # Main page
    ├── styles/
    │   └── style.css
    └── ui/
        ├── components/        # Astro UI components
        │   ├── BrandCard.astro
        │   ├── Contact.astro
        │   ├── ContactForm.astro
        │   ├── Footer.astro
        │   ├── Funding.astro
        │   ├── Header.astro
        │   ├── Hero.astro
        │   ├── Projects.astro
        │   ├── ThemeSwitcher.astro
        │   └── ...
        ├── layouts/
        │   └── Layout.astro
        └── styles/
            └── global.css     # Tailwind v4 design tokens
```

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

## Available Scripts

| Script              | Description                      |
| ------------------- | -------------------------------- |
| `pnpm dev`          | Start development server         |
| `pnpm build`        | Build for production             |
| `pnpm preview`      | Preview production build         |
| `pnpm lint`         | Run ESLint                       |
| `pnpm lint:fix`     | Run ESLint with auto-fix         |
| `pnpm format`       | Format all files with Prettier   |
| `pnpm format:check` | Check formatting without writing |
| `pnpm typecheck`    | Run Astro type checker           |
