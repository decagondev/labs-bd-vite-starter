# 🚀 Vite + React + TypeScript BD Labs Starter

## 📋 Overview

This is a GitHub Template Repository for quickly starting new React + TypeScript projects using Vite. You can generate a new repository with the same directory structure and files in just a few clicks.

## Creation Video
### Watch this [Video](https://bloomtech-1.wistia.com/medias/g5javs2omr) of creating this starter

## 🚀 Using This Template

### 1. Generate a New Repository

1. Click the green **Use this template** button at the top of the repository page.
2. Choose **Create a new repository** from the dropdown.
3. Fill in the repository name, description, and visibility.
4. Click **Create repository from template**.

### 2. Clone Your New Repository

After creating the repository, clone it to your local machine:

```bash
git clone https://github.com/yourusername/your-new-project-name.git
cd your-new-project-name
```

### 3. Install Dependencies

```bash
# Using npm
npm install

# Using Yarn
yarn install
```

### 4. Start Development Server

```bash
# Using npm
npm run dev

# Using Yarn
yarn dev
```

The application will be available at `http://localhost:3000`

## 🗂️ Project Structure

```
project-root/
├── public/              # Static assets
│   └── vite.svg         # Default Vite logo
├── src/                 # Source code
│   ├── components/      # React components
│   │   └── StarterCard.tsx
│   ├── main.tsx         # React application entry point
│   └── App.tsx          # Main application component
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

The `components` folder contains the `StarterCard` component, which you can use as a starting point for your UI development.

## ✨ Features

- 🏎️ Fast development server with Vite
- 🛡️ TypeScript support for type checking
- 🔍 Basic ESLint configuration
- ⚛️ React 18 integration
- 🧩 Minimal boilerplate setup

## 🔬 ESLint Configuration

For advanced linting with type-aware rules:

```typescript
// eslint.config.js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  // Additional configuration...
})
```

## 🛠️ Technologies

- 🚀 Vite
- ⚛️ React
- 📘 TypeScript
- 🔍 ESLint

## 🔮 Planned Additions

- 🌐 Axios for API integration
- 🧪 Enhanced testing setup
- 📊 State management patterns

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create a feature branch
3. 💾 Commit changes
4. 📤 Push to the branch
5. 🔀 Open a Pull Request

## 📄 License

Distributed under the MIT License.

## 💡 Tips for Using This Template

- Replace the default `vite.svg` in the `public/` directory with your project's logo
- Update `package.json` with your project details
- Modify `README.md` to reflect your specific project
- Customize ESLint and TypeScript configurations as needed
- Explore and build upon the `StarterCard` component in the `components` folder
