# Modern Full-Stack Portfolio | Engineering Showcase

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Cypress](https://img.shields.io/badge/Cypress-13-17202C?style=for-the-badge&logo=cypress)](https://www.cypress.io/)

A high-performance, accessible, and multilingual professional portfolio engineering showcase. This repository demonstrates advanced usage of the **Next.js 15 App Router**, state management solutions, and AI-driven automation.

## 🚀 Vision & Objectives
The goal of this project is to demonstrate a "Middle-Level" engineering standard, focusing on:
- **Clean Architecture**: Separation of concerns between UI components, business logic, and internationalization layers.
- **Performance Excellence**: Utilizing Next.js Server Components, Turbopack, and optimized asset delivery.
- **Scalability**: A modular project structure capable of supporting additional features and micro-frontends.

## 🛠️ Architectural Tech Stack

### Core Framework
- **Next.js 15 (App Router)**: Leveraged for its advanced routing capabilities, Server-Side Rendering (SSR), and Incremental Static Regeneration (ISR).
- **TypeScript**: Strict type-checking and interface definitions for robust, predictable code.

### UI & UX Engineering
- **Tailwind CSS 4.0**: Utilizing the latest CSS engine for rapid, maintainable design systems and custom theme orchestration.
- **Framer Motion**: Orchestrated animations (exit/entry transitions, staggered scroll reveals) to enhance user engagement.
- **Next-Themes**: Centralized theme management with standard-compliant color tokens for light/dark modes.

### Globalization & Logic
- **i18next / react-i18next**: Enterprise-grade localization framework supporting English, German, and Ukrainian with dynamic switching.
- **Zod**: Runtime schema validation for forms and API responses.

### Quality Assurance
- **Cypress**: Integration and Component testing to ensure delivery of high-quality, bug-free features.

## 📂 Engineering Case Studies

### 1. AI E-invoice Agent — Orchestrator Design
- **Concept**: A "Root Agent" developed during an internship at **fintom8**.
- **Tech**: Integrated **Google GECX** and **MCP (Model Context Protocol)** servers.
- **Challenge**: Coordinating multi-agent workflows to validate complex EN 16931 e-invoice standards.
- **Recognition**: Successfully presented at the **Google AI Student Hackathon** in Warsaw.

### 2. Full-Stack Nail Studio — Rapid Delivery
- **Concept**: End-to-end commerce solution with booking and CRM capabilities.
- **Tech Stack**: Next.js, PostgreSQL via Prisma, Supabase Auth, and React Hook Form.
- **Metric**: Delivered a production-ready MVP in **3 days** through AI-assisted engineering and modular component design.

### 3. Cheese with Love Ecosystem — Cross-Platform Interoperability
- **Concept**: A comprehensive community platform combined with a specialized mobile companion.
- **Tech**: Next.js Web App + **React Native** Mobile Application.
- **Logic**: Shared types and branding across web and mobile via a unified design system.

## 🏗️ Project Structure

```bash
├── app/                  # App Router: Pages, Layouts, and Templates
│   ├── components/       # Atomic and Molecular components
│   ├── lib/              # Shared utility functions and i18n config
│   ├── projects/         # Individual project detail pages
│   └── template.tsx      # Global view transitions
├── cypress/              # End-to-End and Component tests
├── public/               # Optimized assets and media
└── next.config.ts        # Advanced Next.js configuration
```

## ⚙️ Development Lifecycle

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Testing (Cypress)
```bash
npx cypress open
```

---
**Maryna Khrystyianyn** | *Full-Stack Developer*  
[LinkedIn](your-linkedin-link) • [GitHub](https://github.com/Maryna-Khrystyianyn) • [Portfolio](https://portfolio-next-js-mu-wheat.vercel.app/)