# Elite Beauty Studio

A web application for a beauty salon featuring a public website, an appointment booking flow, and an AI-powered booking assistant.

This repository contains a complete frontend and backend implementation intended for demonstration, learning, and extension.

---

## Overview

The application provides:

- A public-facing website with marketing pages
- A multi-step appointment booking flow
- An AI chat widget that helps users understand services and navigate to booking

The AI assistant is designed to guide users only and does not perform real bookings or store personal data.

---

## Main Features

- Public pages: home, services, team, gallery, contact
- Guided booking flow with service, date, and time selection
- Floating AI chat assistant available on public pages
- Responsive layout for mobile, tablet, and desktop
- Type-safe data models shared across the app

---

## AI Assistant Behavior

The chatbot:

- Explains only the services defined in the application data
- Guides users to the booking page when they want to book
- Does not confirm appointments
- Does not accept or store personal information
- Does not invent services, prices, or availability

Responses support basic markdown formatting such as paragraphs and bullet lists.

---

## Tech Stack

- React
- TypeScript
- React Router (server actions)
- Tailwind CSS
- Node.js
- Groq API for language model inference

---

## Development

Install dependencies:

```bash
npm install
````

Run the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Environment Variables

Create a `.env` file with the following:

```env
GROQ_API_KEY=your_api_key_here
```
