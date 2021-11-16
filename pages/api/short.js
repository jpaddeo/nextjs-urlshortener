import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substr(2, 7);

  try {
    const existing = await prisma.link.findUnique({
      where: {
        url,
      },
    });
    if (existing) {
      await prisma.$disconnect();
      return res.status(200).send(existing);
    }
    const data = await prisma.link.create({
      data: { url, shortUrl, clicks: 0 },
    });
    await prisma.$disconnect();
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
};
