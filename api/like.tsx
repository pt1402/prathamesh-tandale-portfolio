import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Atomic increment to prevent race conditions
    const newLikes = await kv.incr('portfolio:likes');
    return res.status(200).json({ likes: newLikes });
  } catch (error) {
    console.error('Error incrementing likes:', error);
    return res.status(500).json({ error: 'Failed to increment likes' });
  }
}
