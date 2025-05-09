import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) { // request = search input, api response = results
  // note: need to use NextApiRequest & NextApiResponse instead of NextRequest/NextResponse since this is in src/pages (Pages Router), not src/app (App Router)
  // rest of the code is same as BookSearch.tsx
  const { query } = req.query;
  
  const API_KEY = process.env.API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books' });
  }
}