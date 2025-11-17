# 🎫 TicketBounty

TicketBounty is a modern ticket-management application built with **Next.js 16** and **React 19**.
The project emphasizes clean architecture, strong tooling, and a responsive, accessible UI.

---

## ✨ Key Features

### 🎫 Ticket Management

- **CRUD Operations**: Full support for creating, reading, updating, and deleting tickets
- **Rich Text Content**: Support for detailed ticket descriptions
- **Bounty System**: Monetary values with proper currency handling (stored in cents)
- **Deadline Tracking**: Date picker for setting ticket deadlines

### 🎨 UI/UX

- **Interactive Forms**: Form validation with Zod schema validation
- **Loading States**: Proper loading indicators and suspense boundaries
- **Toast Notifications**: User feedback for actions

### 🛠 Technical Implementation

- **Type Safety**: Full TypeScript support throughout the application
- **Server Actions**: Efficient form handling with server actions
- **Reusable Components**: Modular UI components (Card, Form, Buttons, etc.)
- **Currency Handling**: Utility functions for handling monetary values
- **Form Management**: Custom form components with error handling

### 📊 Data Management

- **Prisma ORM**: Type-safe database queries
- **Data Validation**: Server-side validation with Zod
- **Optimistic Updates**: Smooth UI updates during data mutations
- **Route Protection**: Proper error handling and 404 pages

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
