# Vercel Deployment Demo (React + Node.js)

This project is made for explaining the full Vercel deployment flow:

1. Build a project in VS Code
2. Push code to GitHub
3. Import repository into Vercel
4. Deploy and get a live URL

## Project Structure

- client: React frontend (Vite)
- api: Node.js serverless API functions for Vercel
- vercel.json: SPA and API routing config

## Run Locally

1) Install frontend dependencies:

```bash
npm run install:client
```

2) Start frontend dev server:

```bash
npm run dev
```

Open:

- http://localhost:5173

## Test Node.js API

When deployed on Vercel, these endpoints work:

- GET /api/health
- POST /api/echo

Example POST body:

```json
{
  "name": "Sujal"
}
```

## Deploy to Vercel (GitHub Method)

1. Create a GitHub repository and push this code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/projectname.git
git branch -M main
git push -u origin main
```

2. Open Vercel dashboard and select Add New Project.
3. Import your GitHub repository.
4. Set framework as Vite (auto-detected in most cases).
5. Build command:

```bash
npm run build --prefix client
```

6. Output directory:

```bash
client/dist
```

7. Click Deploy.

After success, Vercel gives a URL like:

- https://your-project-name.vercel.app

## Automatic Deployment

After first deployment, every push to GitHub main branch triggers automatic redeployment.

```bash
git add .
git commit -m "Update app"
git push
```

## Slide Mapping

This repository matches your presentation topics:

- What is deployment
- What is Vercel
- Required tools
- GitHub push flow
- Import and configure project in Vercel
- Deploy and access live URL
- Continuous deployment
