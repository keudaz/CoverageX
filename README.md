# Todo App (React + Node + MySQL)

## Requirements
- Docker & docker-compose installed
- Ports 3000 (frontend), 4000 (backend), 3306 (mysql) available

## Run locally (docker)
1. Clone repository
2. From repo root: 
   docker-compose up --build

3. Wait for DB to initialize (~10s), backend to start, frontend served at:
   - Frontend UI: http://localhost:3000
   - Backend API: http://localhost:4000

## Running backend tests
You can run backend tests locally if you have Node and DB available:
(1) Ensure MySQL is running and reachable using env variables in `docker-compose.yml`
(2) cd backend
(3) npm ci
(4) npm test

## Notes
- Only latest 5 tasks are served by `GET /api/tasks`.
- Marking a task as completed does a soft update (`completed = 1`), so it's hidden from the UI.

