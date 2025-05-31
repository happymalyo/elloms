# Elloms - AI-Powered Social Media Management Platform

Elloms is a SaaS platform that combines generative AI and automation for social media content creation and publishing.

## Features

- AI-powered content generation (LinkedIn posts, images)
- Automated social media publishing
- User content and data management

## Tech Stack

- Frontend: Remix.js (TypeScript)
- Backend AI: FastAPI (Python)
- Backend Automation: Node.js (TypeScript)
- Database: PostgreSQL (Supabase)
- Infrastructure: Docker + GitHub Actions

## Project Structure

```
elloms/
├── apps/
│   ├── frontend/          # Remix.js
│   ├── backend-ai/        # FastAPI
│   └── backend-automation/ # Node.js
├── infra/
│   ├── docker-compose.yml
│   └── Dockerfiles/
└── .github/workflows/     # CI/CD
```

## Getting Started

1. Install Docker and Docker Compose
2. Clone this repository
3. Run `docker-compose up` in the infra directory
4. Visit `http://localhost:3000` for the frontend

## Development

Each service can be run independently:

- Frontend: `cd apps/frontend && npm run dev`
- Backend AI: `cd apps/backend-ai && uvicorn main:app --reload`
- Backend Automation: `cd apps/backend-automation && npm run dev`

## License

MIT
