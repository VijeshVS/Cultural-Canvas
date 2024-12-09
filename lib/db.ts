import PrismaClientManager from "./pgConnect";

export const prisma = PrismaClientManager.getInstance().getPrismaClient();
