import { PrismaClient } from '@prisma/client';

export default function ShortId() {
  return (
    <>
      <p>ShortId Redirect</p>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient();
  const { shortId } = params;

  const data = await prisma.link.findUnique({ where: { shortUrl: shortId } });
  if (!data) {
    return { redirect: { destination: '/' } };
  }
  const updatedData = await prisma.link.update({
    where: { shortUrl: shortId },
    data: { accessCount: { increment: 1 } },
  });
  return { redirect: { destination: updatedData.url } };
}
