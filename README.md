# Ticket Management System

This is a full-stack ticket management application built with Next.js, Prisma, and Lucia for authentication.

## ✨ Features

This project provides a comprehensive set of features for a modern ticket management system:

- **Secure User Authentication:**
  - **Sign-up:** New users can create an account securely.
  - **Sign-in:** Existing users can log in to access their tickets and profile.
  - **Password Management:**
    - **Change Password:** Authenticated users can change their password from their profile.
    - **Forgot/Reset Password:** Users can request a password reset link via email, which is sent using **Resend** and **React Email**.

- **Complete Ticket Lifecycle Management (CRUD):**
  - **Create Tickets:** Users can create new tickets with a title, description, and priority.
  - **Read Tickets:** View a list of all tickets with pagination, or view a single ticket's details.
  - **Update Tickets:** Edit existing tickets to change their status, priority, or content.
  - **Delete Tickets:** Remove tickets that are no longer needed.

- **Interactive Ticket Collaboration:**
  - **Commenting System:** Users can add comments to tickets to provide updates or discuss the issue.
  - **Ticket Status Updates:** Change the status of a ticket (e.g., Open, In Progress, Closed) to track its progress.

- **Advanced Ticket Filtering and Sorting:**
  - **Search:** A debounced search input allows for quick filtering of tickets by title.
  - **Sort:** Sort tickets by creation date or priority to easily find what you're looking for.

- **Personalized User Experience:**
  - **User Profile:** Manage your account information.
  - **Dark Mode:** A theme switcher allows users to toggle between light and dark modes for comfortable viewing.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [Lucia](https://lucia-auth.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Data Fetching:** [React Query](https://tanstack.com/query/latest)
- **Emails:** [Resend](https://resend.com/), [React Email](https://react.email/)
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Database:** (Please specify your database, e.g., PostgreSQL, MySQL)
- **Validation:** [Zod](https://zod.dev/)

## 📦 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm, yarn, or pnpm
- A running database instance supported by Prisma.
- A Resend account and API key for sending emails.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Mohamed-Y0/TicketBounty
    cd next-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up your environment variables:**
    Create a `.env` file in the root of the project and add your database connection string and Resend API key.

    For example:

    ```env
    DATABASE_URL="your-database-connection-string"
    RESEND_API_KEY="your-resend-api-key"
    ```

4.  **Push the database schema:**
    This will sync your Prisma schema with your database.

    ```bash
    npx prisma db push
    ```

5.  **Seed the database (optional):**
    If you want to populate the database with initial data:
    ```bash
    npm run prisma-seed
    ```

### Running the Development Server

To start the application in development mode, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

In the `package.json` file, you can find several scripts:

- `dev`: Starts the development server.
- `build`: Creates a production build of the application.
- `start`: Starts the production server.
- `lint`: Runs the linter to check for code quality issues.
- `type`: Runs the TypeScript compiler to check for type errors.
- `prisma-seed`: Seeds the database with initial data.
- `email`: Starts the React Email development server.

## 🌐 Deployment

This project includes a `netlify.toml` file, making it ready for deployment on [Netlify](https://www.netlify.com/). You can also deploy it to other platforms that support Next.js.
