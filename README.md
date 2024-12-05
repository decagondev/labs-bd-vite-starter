Sure, here's an updated version of the README with a section for setting up the API key:

# 🚀 Vite + React + TypeScript BD Labs Starter

## 📋 Overview
This is a GitHub Template Repository for quickly starting new React + TypeScript projects using Vite. You can generate a new repository with the same directory structure and files in just a few clicks.

## Creation Video
### 📹 Watch this Video of creating this starter (Click on the image to go to the video)
<a href="https://bloomtech-1.wistia.com/medias/g5javs2omr" target="_blank">![image](https://github.com/user-attachments/assets/dafb827c-0d57-4b7e-bb02-c25331817ac7)</a>

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

### 4. Set up Environment Variables
0. Get a Groq API Key
  - Set up a groq cloud account if you have not already got one at [Groq Cloud](https://groq.com/groqcloud/)
  - Go to the [dev console keys area](https://console.groq.com/keys)
  - Click the `Create API Key` button and chose a name for your key.
  - Copy your new key
1. Copy the `.env.sample` file to `.env`:
   ```bash
   cp .env.sample .env
   ```
2. Open the `.env` file and replace `YOUR_API_KEY_HERE` with your actual API key.

### 5. Start Development Server
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
│   ├── assets/          # Assets (images, fonts, etc.)
│   │   └── logo.svg
│   ├── components/      # React components
│   │   ├── Approach.tsx
│   │   ├── pages/
│   │   │   └── LandingPage.tsx
│   │   │   └── ChatBot.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── LandingPage.tsx # New landing page component
│   │   ├── NavBar.tsx
│   │   ├── Pricing.tsx
│   │   ├── PricingCard.tsx
│   │   ├── RandomImage.tsx
│   │   └── Team.tsx
│   ├── App.css          # Application styles
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.tsx         # React application entry point
├── .env.sample          # Sample environment variables
├── .gitignore           # Git ignore file
├── index.html           # HTML entry point
├── package-lock.json    # Automatically generated dependency lock file
├── package.json         # Project dependencies and metadata
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

The `components` folder now includes a `ChatBot.tsx` component for the chatbot functionality and a `LandingPage.tsx` component for the landing page.

## ✨ Features
- 🏎️ Fast development server with Vite
- 🛡️ TypeScript support for type checking
- 🔍 Basic ESLint configuration
- ⚛️ React 18 integration
- 🧩 Minimal boilerplate setup
- 💬 Chatbot functionality
- 📖 Landing page component

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
- 💬 Chatbot functionality
- 📖 Landing page component

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
- Explore and build upon the `ChatBot` and `LandingPage` components in the `components/pages` folder
