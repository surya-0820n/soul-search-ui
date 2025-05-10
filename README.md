# Soul Search UI

A modern, ChatGPT-like interface for the Soul Search API. This frontend application provides a clean and intuitive way to interact with the Soul Search knowledge base.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 💬 Real-time chat interface
- 🔄 Loading states and error handling
- 📱 Mobile-friendly design
- 🎯 TypeScript for type safety
- ⚡ Next.js for optimal performance

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- Soul Search API running locally or remotely

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/surya-0820n/soul-search-ui.git
   cd soul-search-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
soul-search-ui/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── ...config files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
