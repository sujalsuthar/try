import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchHealth() {
      try {
        const response = await fetch("/api/health");
        if (!response.ok) {
          throw new Error("Failed to fetch API response");
        }
        const data = await response.json();
        setApiData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHealth();
  }, []);

  return (
    <main className="container">
      <h1>React + Node.js on Vercel</h1>
      <p className="subtitle">
        This demo shows a React frontend calling a Node.js serverless API.
      </p>

      <section className="card">
        <h2>API Status</h2>
        {loading && <p>Checking API...</p>}
        {error && <p className="error">Error: {error}</p>}
        {apiData && (
          <div className="status">
            <p>
              <strong>Message:</strong> {apiData.message}
            </p>
            <p>
              <strong>Platform:</strong> {apiData.platform}
            </p>
            <p>
              <strong>Timestamp:</strong> {apiData.timestamp}
            </p>
          </div>
        )}
      </section>

    </main>
  );
}

export default App;
