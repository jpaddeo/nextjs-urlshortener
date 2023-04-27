import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

import { cache } from '@/lib/cache';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { shortURL } = req.body;
  const cachedURL = await cache.get(shortURL);
  if (cachedURL) {
    res.status(301).redirect(cachedURL);
  } else {
    const dbURL = await prisma.url.findFirst({
      where: {
        shortURL: shortURL as string,
      },
    });
    if (dbURL) {
      await cache.set(shortURL as string, dbURL.longURL);
      res.status(301).redirect(dbURL.longURL);
    } else {
      res.status(404).send(`${shortURL} not found`);
    }
  }
}
