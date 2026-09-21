# Cesi-Eats (POC)

A proof-of-concept for **Cesi-Eats**, a Uber Eats–style food delivery web application built as a student project at CESI. This repository contains an early prototype exploring the front-end UI (Vue 3) and a starter back-end (ASP.NET Core Razor Pages).

> ⚠️ **Status: old proof of concept.** This project was an early exploration and is not actively maintained. Expect scaffolding, unfinished features, and experimental code rather than a production-ready application.

## Overview

Cesi-Eats aims to reproduce the core experience of a food delivery platform: browsing restaurants, adding items to a cart, and managing a user account (login/registration). This repo captures the initial prototyping phase of that idea.

## Project structure

```
.
├── Cesi-Eats-Front/     # Front-end client (Vue 3 + TypeScript + Vite)
├── Cesi-Eats-Back/      # Back-end starter (ASP.NET Core / Razor Pages)
└── d-test/              # Small scratch/test files (HTML + JS)
```

### Front-end — `Cesi-Eats-Front`

Built with [Vue 3](https://vuejs.org/), TypeScript, and [Vite](https://vitejs.dev/), styled with [Tailwind CSS](https://tailwindcss.com/) and [PrimeVue](https://primevue.org/).

Current views/routes (`src/router`):

| Path            | View               | Description               |
|------------------|--------------------|----------------------------|
| `/`              | `HomeView`         | Landing page               |
| `/restaurants`   | `RestaurantView`   | Restaurant listing         |
| `/cart`          | `CartView`         | Shopping cart              |
| `/login`         | `LoginView`        | User login                 |
| `/sign`          | `RegisterView`     | User registration          |

#### Running the front-end

```bash
cd Cesi-Eats-Front
npm install
npm run dev
```

Other available scripts:

```bash
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
```

### Back-end — `Cesi-Eats-Back`

An ASP.NET Core (.NET 6) Razor Pages project (`Cesi-Eats-BackEnd`). It currently contains the default project scaffolding and is intended to serve as the starting point for the API/back-end of the application.

#### Running the back-end

Requires the [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0).

```bash
cd Cesi-Eats-Back/Cesi-Eats-BackEnd
dotnet restore
dotnet run
```

## Tech stack

- **Front-end:** Vue 3, TypeScript, Vite, Tailwind CSS, PrimeVue, Vue Router
- **Back-end:** ASP.NET Core 6 (Razor Pages, C#)

## Contributors

This prototype was built as a group project by several contributors, including Zein Rafiq and teammates from CESI.

## License

No license has been specified for this project. All rights reserved by the contributors unless stated otherwise.
