// app/api/getResults.js

export default async function handler(req, res) {
    if (req.method !== 'GET') {
      return res.status(405).end(); // Method Not Allowed
    }
  
    const { userEmail } = req.query;
  
    try {
      const response = await fetch(`https://drs-api.vercel.app/api/result/${encodeURIComponent(userEmail)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other necessary headers here
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        return res.status(200).json(data);
      } else {
        return res.status(response.status).json({ message: 'Failed to fetch data' });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  