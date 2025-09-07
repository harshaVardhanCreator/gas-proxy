// api/proxy.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Only POST allowed' });
      return;
    }
  
    try {
      const gasUrl = 'https://script.google.com/macros/s/AKfycbwZxoEvSt_lN9dibGWXyvTz-9YwbCP7dxu_PMDxZtPbMpkYLXN4au4__k-W97MjluDk/exec'; // 🔁 Replace this
  
      const gasRes = await fetch(gasUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body)
      });
  
      const result = await gasRes.json();
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: 'Proxy failed', details: err.toString() });
    }
  }
  