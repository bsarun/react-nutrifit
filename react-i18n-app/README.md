# React i18n App

A modern React application built with TypeScript, featuring Redux Toolkit, Redux Saga, Styled Components, and internationalization (i18n) support.

## Features

- ⚛️ **React 18** with TypeScript
- 🏗️ **Vite** for fast development and building
- 🗃️ **Redux Toolkit** for state management
- 🔄 **Redux Saga** for handling side effects
- 💅 **Styled Components** for styling
- 🌍 **React i18next** for internationalization
- 🎨 **Modern UI** with glassmorphism design
- 📱 **Responsive design**

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **Redux Saga** - Side effect management
- **Styled Components** - CSS-in-JS styling
- **React i18next** - Internationalization
- **i18next-browser-languagedetector** - Language detection
- **i18next-http-backend** - Translation loading

## Project Structure

```
src/
├── components/          # React components
│   ├── AppHeader.tsx   # Header with language selector
│   ├── LanguageSelector.tsx # Language dropdown
│   ├── StyledComponents.ts # Styled components
│   └── UserList.tsx    # User list component
├── hooks/              # Custom hooks
│   ├── useAppDispatch.ts # Typed dispatch hook
│   └── useTypedSelector.ts # Typed selector hook
├── i18n/               # Internationalization config
│   └── index.ts        # i18n setup
├── store/              # Redux store
│   ├── slices/         # Redux slices
│   │   └── appSlice.ts # App state slice
│   ├── sagas/          # Redux sagas
│   │   └── appSaga.ts  # App sagas
│   └── index.ts        # Store configuration
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## Available Languages

- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-i18n-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Demo

### Redux Toolkit & Redux Saga
- Click "Fetch Users" to see Redux Saga in action
- Loading states and error handling
- Async data fetching with mock API

### Styled Components
- Modern glassmorphism design
- Responsive layout
- Hover effects and animations
- Themed components

### Internationalization
- Language selector in header
- Real-time language switching
- Persistent language preference
- Translation files in `/public/locales/`

### TypeScript
- Full type safety
- Custom typed hooks
- Proper interface definitions
- Type-only imports

## Customization

### Adding New Languages

1. Create translation files in `public/locales/{language-code}/translation.json`
2. Add the language to the `languages` array in `src/components/LanguageSelector.tsx`

### Adding New Translations

Edit the translation files in `public/locales/`:
- `en/translation.json` - English
- `es/translation.json` - Spanish  
- `fr/translation.json` - French

### Styling

Modify styled components in `src/components/StyledComponents.ts` to customize the appearance.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
