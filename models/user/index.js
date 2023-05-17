import { prisma } from '@/libs/dbclient';

const user = {
  list: async () => {},
  get: async (email) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        links: true,
      },
    });
    return user;
  },
  create: async ({ name, email, picture }) => {
    const user = await prisma.user.create({
      data: { name, email, picture },
    });
    return user;
  },
};
export default user;
