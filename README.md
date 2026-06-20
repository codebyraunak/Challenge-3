# EcoAware AI - Carbon Footprint Platform (Hackathon Challenge)

## 1. Chosen Vertical
**Carbon Footprint Awareness Platform**

## 2. Approach & Logic
EcoAware AI is built as an interactive, educational, and accessible web application designed to help users understand and reduce their environmental impact. The logic centers around:
- **Carbon Footprint Calculator**: A daily estimation tool that factors in transportation (miles driven) and dietary habits to output a quick CO₂ footprint in kg.
- **Dynamic EcoChat Assistant**: A conversational AI interface that parses user queries regarding sustainability (e.g., "recycle", "car", "diet") and provides actionable tips.
- **Premium UI/UX**: Utilizing a nature-inspired Dark Mode (Greens/Teals) with Glassmorphism to create a modern, engaging experience.

## 3. How the Solution Works
- The application uses React and Vite for a fast, responsive single-page application.
- **Calculator Logic**: Employs industry-standard mock formulas (e.g., ~0.4 kg CO₂ per mile driven; daily averages based on diet types) to instantly calculate impact on the client-side.
- **State Management**: React state links the calculator to the header, instantly updating the user's "Daily Footprint" badge globally upon calculation.

## 4. Assumptions Made
- **API Availability**: For the scope of this hackathon, the AI response engine and calculation algorithms are mocked on the frontend. This prioritizes speed, avoids exposing sensitive API keys, and ensures the repository size remains well under the 10 MB limit.
- **Averages**: Diet and transport calculations use generic US averages for demonstration purposes.

## 5. Evaluation Focus Fulfillment
- **Code Quality**: Built with Vite + React + TypeScript. Modular component structure (`EcoChat`, `CarbonCalculator`) with strict typing.
- **Security**: No sensitive data or API keys are stored in the client. Safe input handling.
- **Efficiency**: Very small bundle size (< 1MB), no bloated UI libraries (using Vanilla CSS), repo size minimal.
- **Testing**: Includes a Vitest suite (`src/components/*.test.tsx`) covering logic and component rendering with a 100% pass rate.
- **Accessibility**: Keyboard navigable, semantic HTML (`<section>`, `<header>`, `<form>`), proper `aria-labels` on inputs and live regions (`aria-live="polite"`).

## Setup & Run
```bash
npm install
npm run dev
npm run test
```

## Live Deployment
This project is continuously deployed to GitHub pages for live evaluation.
