import { NextApiRequest, NextApiResponse } from 'next';

import { redirectURL } from '@/lib/urls';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { shortURL } = req.query;
  const redURL = await redirectURL(shortURL as string);
  if (redURL) {
    res
      .status(200)
      .json({ shortURL: `http://localhost:3000/${shortURL}`, url: redURL });
  } else {
    res.status(404).send(`${shortURL} not found`);
  }
}
