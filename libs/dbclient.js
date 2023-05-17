import { PrismaClient } from '@prisma/client';
import CONFIG from '@/libs/config';

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (CONFIG.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
