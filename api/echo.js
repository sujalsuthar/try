export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { name = "Guest" } = req.body || {};

  return res.status(200).json({
    greeting: `Hello ${name}, your Node.js API is working!`
  });
}
