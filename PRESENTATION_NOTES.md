# Vercel Deployment - Full Process (From VS Code to Live Website)

## Slide 1 - Title
- Deployment of Web Application using Vercel
- From VS Code to Live Website
- Presented by: Sujal Suthar

## Slide 2 - What is Deployment?
Deployment means making a website or application available on the internet so users can access it.

Before deployment:
- Website runs only on local computer

After deployment:
- Website runs on internet server
- Anyone can access it using a URL

Example:
- https://yourproject.vercel.app

## Slide 3 - What is Vercel?
Vercel is a cloud platform used to deploy websites and web applications.

Mainly used for:
- React
- Next.js
- Node.js
- Frontend applications

Features:
- Free hosting
- Fast global CDN
- Automatic deployments
- GitHub integration
- Custom domains

Website:
- https://vercel.com

## Slide 4 - Tools Required
1. VS Code
2. Node.js installed
3. GitHub account
4. Vercel account
5. Internet connection

## Slide 5 - Step 1: Install Node.js
Download from:
- https://nodejs.org

Verify installation:

```bash
node -v
npm -v
```

If versions appear, installation is successful.

## Slide 6 - Step 2: Install VS Code
Download from:
- https://code.visualstudio.com

Steps:
1. Install VS Code
2. Open your project folder
3. Run the project locally

Example:

```bash
npm start
```

or

```bash
npm run dev
```

## Slide 7 - Step 3: Create GitHub Account
Go to:
- https://github.com

Steps:
1. Sign up
2. Create a new repository
3. Name your repository (example: my-project)

## Slide 8 - Step 4: Upload Code to GitHub
Open VS Code terminal and run:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/projectname.git
git branch -M main
git push -u origin main
```

## Slide 9 - Step 5: Create Vercel Account
Go to:
- https://vercel.com

Steps:
1. Sign up
2. Login using GitHub
3. Allow access to repositories

Now Vercel can read your GitHub projects.

## Slide 10 - Step 6: Import Project into Vercel
In Vercel dashboard:
1. Click Add New Project
2. Click Import Git Repository
3. Select your repository

## Slide 11 - Step 7: Configure Project
Vercel auto-detects frameworks like:
- React
- Next.js
- Node.js
- Vue

Configuration fields:
- Project Name
- Framework Preset
- Build Command
- Output Directory

Example values for this demo project:

```bash
npm run build --prefix client
```

Output directory:

```text
client/dist
```

## Slide 12 - Step 8: Deploy Project
Click Deploy.

Vercel will:
1. Install dependencies
2. Build the project
3. Deploy it to server

Deployment usually takes 1-2 minutes.

## Slide 13 - Step 9: Access Live Website
After deployment, Vercel gives a URL like:
- https://myproject.vercel.app

Anyone can open this link and use the website.

## Slide 14 - Automatic Deployment
When you push code to GitHub:

```bash
git push
```

Vercel automatically redeploys the project.
This is called Continuous Deployment.

## Slide 15 - Advantages of Vercel
- Free hosting
- Very fast deployment
- Global CDN
- Easy GitHub integration
- Automatic updates
- Supports modern frameworks

## Slide 16 - Conclusion
Vercel makes deployment simple and fast.

Steps summary:
1. Create project in VS Code
2. Upload code to GitHub
3. Import repository into Vercel
4. Configure project
5. Deploy and get live URL

Now the website is available globally.

## Slide 17 - Thank You
Thank You
Questions?
