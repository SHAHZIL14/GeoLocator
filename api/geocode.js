// api/geocode.js
// This file only ever runs on Vercel's server — it never ships to the browser.
// process.env.RAPIDAPI_KEY is read here, from Vercel's Environment Variables
// (or from a local .env file when running `vercel dev`).

export default async function handler(req, res) {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Missing lat or lon query parameter.' });
  }

  const apiKey = process.env.APIKEY;
  const apiHost = process.env.APIHOST;

  if (!apiKey) {
    // This means the env var isn't set on Vercel (or in your local .env) —
    // not a frontend bug, check your Environment Variables settings.
    return res.status(500).json({ error: 'Server is missing RAPIDAPI_KEY configuration.' });
  }

  try {
    const url = `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${lat},${lon}&language=en`;

    const apiRes = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
      }
    });

    if (!apiRes.ok) {
      return res.status(apiRes.status).json({ error: 'Geocoding provider returned an error.' });
    }

    const data = await apiRes.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Unexpected server error while geocoding.' });
  }
}