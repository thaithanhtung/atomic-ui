# Clik Atomic UI

A modern React and Next.js based UI component library built with Tailwind CSS. Perfect for modern developers and creative teams.

## ✨ Features

- 🚀 **Fast & Lightweight** - Optimized for performance with minimal bundle size impact
- 📱 **Responsive Design** - All components are mobile-first and fully responsive  
- 🎨 **Customizable** - Easy to customize with CSS variables and Tailwind CSS
- ♿ **Accessible** - Built with accessibility in mind following WCAG guidelines
- 📘 **TypeScript** - Full TypeScript support with comprehensive type definitions
- ✨ **Modern Animations** - Smooth animations and effects
- 🛠️ **CLI Tool** - Easy component installation with interactive CLI
- 📖 **Interactive Docs** - Live playground and comprehensive documentation
- 🔧 **Developer Guide** - Step-by-step guide for adding new components (dev mode only)

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thaithanhtung/atomic-ui.git
cd atomic-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Using the CLI

Clik Atomic UI comes with a powerful CLI tool to easily add components to your project.

### List all components
```bash
npx atomic-ui-cli list
```

### Add a component
```bash
npx atomic-ui-cli add gradient-button
```

The CLI will ask you:
- **Language**: TypeScript (.tsx) or JavaScript (.jsx)
- **Directory**: `src/components/atomic-ui` (Next.js App Router) or `components/atomic-ui` (Project root)

### Example CLI Output
```bash
┌  Welcome to Clik Atomic UI CLI
│
◇  Select the language of the component:
│  TypeScript (.tsx)
│
◇  Where do you want to place the components?
│  src/components/atomic-ui (Next.js App Router)
│
◇  📦 Saved: /path/to/project/src/components/atomic-ui/gradient-button.tsx
│
└  ✨ Component added successfully!
```

## 🧩 Available Components

### Gradient Button
An animated gradient border button with customizable colors and duration.

```tsx
import { GradientButton } from "@/components/atomic-ui/gradient-button";

<GradientButton>
  Click me!
</GradientButton>

// With variants
<GradientButton className="bg-red-500 hover:bg-red-600">
  Red Button
</GradientButton>
```

### Shiny Card
A card component with shimmer effect animation on hover.

```tsx
import { ShinyCard } from "@/components/atomic-ui/shiny-card";

<ShinyCard className="p-6">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-muted-foreground">
    This card has a beautiful shimmer effect on hover.
  </p>
</ShinyCard>
```

## 📚 Documentation

Visit our documentation pages:

- **[Docs](/docs)** - Installation guides and CLI usage
- **[Components](/components)** - Interactive component showcase
- **[Playground](/playground)** - Real-time component testing and customization
- **[Dev Guide](/dev-guide)** - Developer guide (development mode only)

## 🎨 Customization

All components are built with Tailwind CSS and can be easily customized by:

### 1. CSS Variables
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}
```

### 2. Tailwind Classes
```tsx
<GradientButton className="bg-purple-500 hover:bg-purple-600">
  Custom Color
</GradientButton>
```

### 3. Component Props
Components accept standard React props and can be extended with custom props.

## 🛠️ Development

### Project Structure

```
atomic-ui/
├── src/
│   ├── components/
│   │   ├── atomic-ui/          # Main UI components
│   │   ├── layout/             # Layout components (Navbar, Footer)
│   │   ├── common/             # Common components (ThemeToggle)
│   │   └── ui/                 # Base UI components
│   ├── app/
│   │   ├── components/         # Components showcase page
│   │   ├── docs/              # Documentation page
│   │   ├── playground/        # Interactive playground
│   │   └── dev-guide/         # Developer guide (dev only)
│   ├── registry/              # Component registry for web
│   ├── cli/                   # CLI tool source
│   ├── types/                 # TypeScript declarations
│   └── lib/                   # Utility functions
├── registry-cli.json          # CLI component registry
├── registry.json             # shadcn/ui compatible registry
└── public/                   # Static assets
```

### Adding New Components

#### Method 1: Using Dev Guide (Recommended)
1. Run `npm run dev`
2. Visit `/dev-guide` for step-by-step instructions
3. Follow the interactive guide with copy-paste code examples

#### Method 2: Manual Process
1. Create component in `src/components/atomic-ui/my-component.tsx`
2. Create demo in `src/components/atomic-ui/my-component-demo.tsx`
3. Update `src/registry/components-registry.tsx`
4. Update `registry-cli.json`
5. Test locally and push to GitHub

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm run format` - Format code with Prettier

### Development Features

- **Hot Reload** - Instant updates during development
- **TypeScript** - Full type safety and IntelliSense
- **ESLint + Prettier** - Code quality and formatting
- **Raw Loader** - Import component source code as strings
- **Dev Guide** - Interactive development guide (dev mode only)

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Environment Variables
The project automatically detects environment:
- `NODE_ENV=development` - Shows Dev Guide, full debugging
- `NODE_ENV=production` - Optimized build, Dev Guide hidden

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingComponent`)
3. Create your component following the Dev Guide
4. Test thoroughly in playground
5. Update documentation
6. Commit your changes (`git commit -m 'feat: add AmazingComponent'`)
7. Push to the branch (`git push origin feature/AmazingComponent`)
8. Open a Pull Request

### Component Guidelines
- Follow TypeScript best practices
- Include proper prop types and documentation
- Create interactive demos
- Test across different screen sizes
- Follow accessibility guidelines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help:

- 📖 **Documentation**: Visit our [docs page](/docs)
- 🐛 **Issues**: Open an issue on [GitHub](https://github.com/thaithanhtung/atomic-ui/issues)
- 💬 **Discord**: Join our [Discord community](https://discord.gg/your-discord)
- 📧 **Email**: Contact us at your-email@example.com

## 🙏 Acknowledgments

- 🎨 **Inspired by**: [Nurui](https://github.com/afsar-dev/Nurui)
- ⚡ **Built with**: [Next.js](https://nextjs.org/)
- 🎨 **Styled with**: [Tailwind CSS](https://tailwindcss.com/)
- 🔧 **Icons**: [Lucide React](https://lucide.dev/)
- 🎭 **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 📊 Stats

- **Components**: 2+ (and growing)
- **Bundle Size**: Optimized for minimal impact
- **TypeScript**: 100% type coverage
- **Tests**: Comprehensive component testing
- **Documentation**: Interactive playground + guides

---

**Made with ❤️ by [Tung Thai](https://github.com/thaithanhtung)**