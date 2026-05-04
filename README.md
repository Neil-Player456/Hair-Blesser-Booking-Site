# Hair Blesser Booking Site

This project uses:
- React + Vite for the frontend
- Flask for the backend API

## Run locally

### 1) Install frontend dependencies

From the project root, use the `frontend` folder (where `package.json` and Vite live):

```bash
cd frontend
npm install
```

### 2) Install backend dependencies

Use either `pipenv` (recommended for this repo) or `pip`.

With pipenv:

```bash
pipenv install
```

With pip:

```bash
pip install flask flask-cors gunicorn requests
```

### 3) Start the backend

From the project root:

```bash
python backend/app.py
```

Optional environment variables (see **Deploy** below):

- `HOST` — bind address (default `127.0.0.1`; use `0.0.0.0` on a server)
- `PORT` — listen port (default `5000`)
- `FLASK_DEBUG` — set to `1` for debug mode (do not use in production)
- `CORS_ORIGINS` — comma-separated list of allowed frontend origins (omit for permissive CORS while developing; **set to your live site URL in production** when the frontend is on another domain)

### 4) Start the frontend

In a second terminal, from the project root:

```bash
cd frontend
npm run dev
```

## Deploy (frontend and backend separately)

The UI and API are independent: configure each host with environment variables.

### Backend only

Install dependencies (includes **gunicorn** for production):

```bash
pipenv install
```

Run with Gunicorn from the **repository root** (Linux/macOS or typical cloud containers):

```bash
pipenv run gunicorn -w 2 -b 0.0.0.0:${PORT:-5000} backend.app:app
```

On Windows locally, use `python backend/app.py` instead (Gunicorn is not supported on Windows).

Platforms usually set `PORT` for you. Set `CORS_ORIGINS` to your frontend origin(s), for example:

`https://your-site.pages.dev` or `https://app.example.com`

Health check: `GET /api/health`

### Frontend only

At **build time**, point the app at your deployed API (no trailing slash):

```bash
cd frontend
VITE_API_BASE_URL=https://your-api.example.com npm run build
```

On Windows Command Prompt, use `set VITE_API_BASE_URL=...` and then `npm run build` on a separate line, or run the build from PowerShell with the same one-line `VAR=value` form as in Git Bash.

Serve the `frontend/dist` folder from any static host. Copy `frontend/.env.example` to `frontend/.env` for local overrides if you like; Vite reads `VITE_*` variables when you run `npm run dev` or `npm run build`.
