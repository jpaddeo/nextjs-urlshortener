import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

import { hashb62 } from '@/lib/hash';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { longURL } = req.body;
  const existingURL = await prisma.url.findFirst({
    where: {
      longURL,
    },
  });
  if (existingURL) {
    res.status(200).json({ shortURL: existingURL.shortURL });
  } else {
    const newURL = await prisma.url.create({
      data: {
        longURL,
      },
    });
    const shortURL = hashb62(newURL.id);
    await prisma.url.update({
      where: {
        id: newURL.id,
      },
      data: {
        shortURL,
      },
    });
    res
      .status(200)
      .json({ longURL, shortURL: `http://localhost:3000/${shortURL}` });
  }
}
