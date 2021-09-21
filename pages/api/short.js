import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substr(2, 5);

  try {
    const data = await prisma.link.create({
      data: { url, shortUrl, accessCount: 0 },
    });
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};
