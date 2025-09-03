# My UI

A modern React and Next.js based UI component library built with Tailwind CSS. Perfect for modern developers and creative teams.

## Features

- 🚀 **Fast & Lightweight** - Optimized for performance with minimal bundle size impact
- 📱 **Responsive Design** - All components are mobile-first and fully responsive  
- 🎨 **Customizable** - Easy to customize with CSS variables and Tailwind CSS
- ♿ **Accessible** - Built with accessibility in mind following WCAG guidelines
- 📘 **TypeScript** - Full TypeScript support with comprehensive type definitions
- ✨ **Modern Animations** - Smooth animations powered by Framer Motion and GSAP

## Installation

### Prerequisites

Make sure you have the following installed:
- Node.js 18+ 
- npm, yarn, or pnpm

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/my-ui.git
cd my-ui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Using the CLI

My UI comes with a CLI tool to easily add components to your project.

### List all components
```bash
npx my-ui list
```

### Add a component
```bash
npx my-ui add gradient-button
```

### Add multiple components
```bash
npx my-ui add gradient-button shiny-card
```

## Available Components

### Gradient Button
A beautiful gradient button with hover effects and multiple variants.

```tsx
import { GradientButton } from "@/components/my-ui/gradient-button";

<GradientButton variant="default" size="md">
  Click me
</GradientButton>
```

### Shiny Card
An elegant card component with shimmer animation on hover.

```tsx
import { ShinyCard } from "@/components/my-ui/shiny-card";

<ShinyCard className="p-6">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</ShinyCard>
```

## Customization

All components are built with Tailwind CSS and can be easily customized by:

1. **CSS Variables** - Override default colors and spacing
2. **Tailwind Classes** - Add or modify classes directly
3. **Component Props** - Use built-in variant and size props

## Development

### Project Structure

```
my-ui/
├── src/
│   ├── components/
│   │   ├── my-ui/          # Custom components
│   │   ├── ui/             # Base UI components  
│   │   ├── layout/         # Layout components
│   │   └── common/         # Common components
│   ├── registry/           # Component registry
│   ├── lib/               # Utility functions
│   └── app/               # Next.js app directory
├── public/                # Static assets
└── docs/                  # Documentation
```

### Adding New Components

1. Create your component in `src/components/my-ui/`
2. Add a demo component showing usage
3. Register the component in `src/registry/components-registry.tsx`
4. Add documentation

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm run format` - Format code with Prettier

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help, please:

- Open an issue on [GitHub](https://github.com/your-username/my-ui/issues)
- Join our [Discord community](https://discord.gg/your-discord)
- Email us at your-email@example.com

## Acknowledgments

- Inspired by [Nurui](https://github.com/afsar-dev/Nurui)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://greensock.com/gsap/)