# 🎫 TicketBounty

TicketBounty is a modern ticket-management application built with **Next.js 16** and **React 19**.
The project emphasizes clean architecture, strong tooling, and a responsive, accessible UI.

---

## ✨ Features

- ⚡ Next.js 16 (App Router)
- ⚛️ React 19 with the new compiler
- 🎨 TailwindCSS 4 for modern, scalable styling
- 🌗 Theme switching with next-themes
- 🗂️ Prisma ORM for database management
- 🧱 Radix UI + Lucide Icons for accessible components
- 🧼 Strict formatting with ESLint & Prettier
- 🚀 Fast dev environment using TypeScript + tsx

---

## 🛠️ Tech Stack

| Category           | Technologies                                                                 |
| ------------------ | ---------------------------------------------------------------------------- |
| **Framework**      | Next.js 16, React 19                                                         |
| **Language**       | TypeScript                                                                   |
| **Styling**        | TailwindCSS 4, Tailwind Merge, class-variance-authority, tw-animate-css      |
| **UI Components**  | Radix UI, Lucide Icons                                                       |
| **Theming**        | next-themes                                                                  |
| **Database & ORM** | Prisma ORM, @prisma/client                                                   |
| **Tooling**        | ESLint, Prettier, eslint-config-next, tsx                                    |
| **Other**          | clsx, @radix-ui/react-slot, @radix-ui/react-label, @radix-ui/react-separator |

---

## 📦 Installation

```bash
git clone https://github.com/your-username/ticketbounty.git
cd ticketbounty
npm install
```

---

## 🔧 Environment Variables

Create a `.env` file:

```
DATABASE_URL="your_database_connection_string"
```

---

## 🗃️ Prisma Setup

```bash
npm run postinstall      # Generates Prisma Client
npx prisma migrate dev   # Runs migrations
npm run prisma-seed      # Seeds the DB
```

---

## ▶️ Running the Project

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

---

## 📁 Scripts

| Script        | Description             |
| ------------- | ----------------------- |
| `dev`         | Start dev server        |
| `build`       | Build for production    |
| `start`       | Start production server |
| `lint`        | Run ESLint              |
| `lint:fix`    | Auto-fix lint issues    |
| `type`        | Type-check only         |
| `postinstall` | Prisma generate         |
| `prisma-seed` | Seed database           |

---
