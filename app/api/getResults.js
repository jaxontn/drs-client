// app/api/getResults.js

export default async function handler(req, res) {
    if (req.method === 'GET') {
      const { email } = req.query;
  
      try {
        const response = await fetch(`https://drs-api.vercel.app/api/result/${encodeURIComponent(email)}`);
        const data = await response.json();
  
        if (response.ok) {
          return res.status(200).json(data);
        } else {
          return res.status(response.status).json({ error: 'Failed to fetch data' });
        }
      } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      return res.status(405).end(); // Method Not Allowed
    }
  }
  