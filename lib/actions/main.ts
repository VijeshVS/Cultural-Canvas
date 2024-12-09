"use server";
import jwt from "jsonwebtoken";
import { prisma } from "../db";

export async function getUser(token: string) {
  const decoded = jwt.decode(token) as { id: number };
  const id = decoded.id;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    return {
      status: 200,
      data: user,
    };
  } catch (e) {
    console.log(e);
    return {
      status: 500,
      data: {},
    };
  }
}
