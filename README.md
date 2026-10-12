# UrbanFit

Web application for browsing sports centers and managing activity reservations. The project is built with Angular and uses `json-server` as a local development API.

## Features

- Browse sports centers.
- View each center's name, activity, capacity, and coordinates.
- Retrieve and create reservations through HTTP services.
- Retrieve current temperature information for an activity or sports center.
- Reusable components for loading and error states.
- Layered architecture organized into domain, infrastructure, application, and presentation.

## Technologies

- Angular 22
- TypeScript 6
- Angular Material
- RxJS
- json-server
- Vitest

## Requirements

- Node.js compatible with Angular 22.
- npm 12 or a compatible version.

## Installation

Clone the repository, enter the project directory, and install the dependencies:

```bash
npm install
```

## Running the application

The application consumes sports centers and reservations from `server/db.json`. In one terminal, start the local API:

```bash
npx json-server --watch server/db.json
```

The API will be available at `http://localhost:3000` by default.

In another terminal, start Angular:

```bash
npm start
```

Open `http://localhost:4200` in your browser. You can also run the Angular development server directly:

```bash
npx ng serve
```

## Local API endpoints

| Resource | URL |
| --- | --- |
| Sports centers | `GET http://localhost:3000/sports-centers` |
| Sports center by ID | `GET http://localhost:3000/sports-centers/:id` |
| Reservations | `GET http://localhost:3000/reservations` |
| Reservation by ID | `GET http://localhost:3000/reservations/:id` |
| Create resource | `POST http://localhost:3000/<resource>` |
| Update resource | `PUT http://localhost:3000/<resource>/:id` |
| Delete resource | `DELETE http://localhost:3000/<resource>/:id` |

Initial data is stored in `server/db.json`.

## Project structure

```text
src/app/
├── shared/
│   ├── domain/             # Shared domain contracts
│   ├── infrastructure/    # Base API, assemblers, and responses
│   └── presentation/      # Shared components
├── sport-center/
│   ├── application/       # Feature state
│   ├── domain/            # SportCenter and Reservation entities
│   ├── infrastructure/    # Endpoints, services, and mappers
│   └── presentation/      # Reservation views
└── weather/
    ├── application/       # Feature state
    ├── domain/            # Weather entity
    ├── infrastructure/    # Weather provider integration
    └── presentation/      # Weather summary
```

Provider configuration is located in `environment/environment.development.ts`, including the local `json-server` API and the weather provider.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Start the Angular development server |
| `npm run build` | Create a production build |
| `npm run watch` | Rebuild automatically when files change |
| `npm test` | Run unit tests |

## Build

To generate the production files:

```bash
npm run build
```

Build artifacts are stored in the `dist/` directory.

## Testing

Run the unit tests with:

```bash
npm test
```

## License

This project is for academic use.
