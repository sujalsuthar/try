export default function handler(req, res) {
  res.status(200).json({
    message: "Node.js API is running successfully on Vercel.",
    platform: "Vercel Serverless Function",
    timestamp: new Date().toISOString()
  });
}
