# Irzam Tour & Travel

## Overview

**Irzam Tour & Travel** is a travel booking website that provides seamless trip planning, guided tours, and exclusive travel packages. It aims to simplify travel arrangements by offering an intuitive user experience and a secure booking process.

## Features

- **Destination Listings** – Explore various travel destinations with detailed information.
- **Tour Packages** – Browse and book customizable tour packages.
- **Online Booking System** – Secure and user-friendly booking with multiple payment options.
- **User Dashboard** – Manage bookings, payments, and itineraries.
- **Blog & Travel Guides** – Get insights, tips, and travel recommendations.
- **Multi-language Support** – Enhance accessibility for global travelers.

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS, React
- **Backend:** Node.js, Express.js, Strapi CMS
- **Database:** PostgreSQL
- **Authentication:** Firebase Auth / NextAuth.js
- **Payments:** Stripe / Razorpay
- **Deployment:** Vercel (Frontend), DigitalOcean / Railway (Backend)
- **Search & Optimization:** Meilisearch for fast content retrieval, SEO best practices

## Development Timeline

- **Project Kickoff:** February 25, 2025
- **MVP Completion:** March 31, 2025
- **Beta Testing:** April 15, 2025
- **Official Launch:** May 1, 2025

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (Latest LTS version)
- npm or yarn
- PostgreSQL (For local database setup)

### Steps to Setup Locally

```sh
# Clone the repository
git clone https://github.com/nazrulislambhat/irzam.git
cd irzam

# Install dependencies
npm install  # or yarn install

# Set up environment variables
cp .env.example .env
# Update the .env file with your local database and API keys

# Run database migrations (if applicable)
npx prisma migrate dev  # If using Prisma

# Start the development server
npm run dev  # or yarn dev
```

## Contribution

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

🚀 **Irzam Tour & Travel – Your Gateway to the World!**

# Typography System  

| Element       | Mobile (em) | Tablet (em) | Desktop (em) |
|--------------|------------|-------------|--------------|
| **H1**       | 1.8em      | 2.2em       | 2.5em        |
| **H2**       | 1.6em      | 1.9em       | 2.2em        |
| **H3**       | 1.4em      | 1.7em       | 1.9em        |
| **H4**       | 1.2em      | 1.5em       | 1.7em        |
| **Body Text** | 1em        | 1.1em       | 1.2em        |
| **Small Text** | 0.875em  | 0.95em      | 1em          |
| **Button Text** | 1em     | 1.1em       | 1.2em        |

---

## Spacing System (Paddings & Margins)

| Component          | Mobile (em) | Tablet (em) | Desktop (em) |
|--------------------|------------|-------------|--------------|
| **Section Padding** | 1.5em     | 2em         | 2.5em        |
| **Section Margin**  | 1.5em     | 2em         | 2.5em        |
| **Container Padding** | 1em     | 1.5em       | 2em          |
| **Card Padding**   | 1em        | 1.2em       | 1.5em        |
| **Card Margin**    | 1em        | 1.2em       | 1.5em        |
| **Button Padding** | 0.8em 1.5em | 1em 2em | 1.2em 2.5em |
| **Form Field Padding** | 0.8em   | 1em         | 1.2em        |

---

## Component Gaps (Spacing between Components)

| Component Relationship     | Mobile (em) | Tablet (em) | Desktop (em) |
|---------------------------|------------|-------------|--------------|
| **Between Sections**      | 2em        | 2.5em       | 3em          |
| **Between Headings & Text** | 1em      | 1.2em       | 1.5em        |
| **Between Text Blocks**    | 0.8em      | 1em         | 1.2em        |
| **Between Cards**         | 1.2em      | 1.5em       | 2em          |
| **Navbar Item Spacing**    | 1em        | 1.5em       | 2em          |

---

## Fonts

| Font         | Usage                            |
|-------------|----------------------------------|
| **Montserrat** | Headings (H1, H2, H3, H4)    |
| **Poppins**    | Body Text, Small Text, Buttons |

---

## Colors  

| Color Name   | Hex Code  | Usage                                         |
|-------------|----------|-----------------------------------------------|
| **White**   | `#ffffff`  | Backgrounds, Text on Dark Backgrounds        |
| **Primary** | `#011ef5`  | Primary Buttons, Links, Highlights           |
| **Secondary** | `#cbff8c` | Secondary Highlights, Accent Elements        |
| **Tomato**  | `#fb4d3d`  | Alerts, Error Messages, Call-to-Actions      |
| **Yellow**  | `#fffd82`  | Highlights, Warnings, Notices                |
| **Dark**    | `#011936`  | Primary Text, Backgrounds, Navbar            |

