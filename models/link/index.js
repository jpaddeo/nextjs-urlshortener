import { prisma } from '@/libs/dbclient';

const link = {
  list: async () => {},
  get: async (shortUrl) => {
    const data = await prisma.link.findUnique({
      where: { shortUrl },
    });

    if (!data) return null;
    return data;
  },
  getByUserId: async (userId) => {
    const data = await prisma.link.findMany({
      where: { userId },
      orderBy: [{ clicks: 'desc' }],
    });
    return data;
  },
  create: async (url, shortUrl, userId) => {
    const linkData = await prisma.link.upsert({
      where: {
        url,
      },
      update: {},
      create: {
        url,
        shortUrl,
        userId,
      },
    });

    await prisma.user.update({
      where: { id: userId },
      data: {
        links: {
          connect: {
            id: linkData.id,
          },
        },
      },
    });
    return linkData;
  },
  incrementClick: async (pLink) => {
    const response = await prisma.link.update({
      where: { shortUrl: pLink.shortUrl },
      data: { clicks: { increment: 1 } },
    });
    return response;
  },
};
export default link;
