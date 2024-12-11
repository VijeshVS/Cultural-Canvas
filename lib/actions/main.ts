"use server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../db";

export async function peekUser(username: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
      include: {
        posts: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
            pictures: true,
            
          },
        },
        badges: true
      },
    });

    if (!user) {
      return {
        status: 404,
        data: user,
      };
    }

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

export async function updateLikes(postId: number, increment: boolean) {
  try {
    const post = await prisma.post.update({
      where: { id: postId },
      data: {
        likes: { increment: increment ? 1 : -1 }, // Increment or decrement based on the flag
      },
    });

    return { status: 200, data: post };
  } catch (error) {
    console.error("Error updating likes", error);
    return { status: 500, data: null };
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        username: true,
        state: true,
      },
    });

    return {
      status: 200,
      data: users,
    };
  } catch (e) {
    console.log(e);
    return {
      status: 500,
      data: [],
    };
  }
}

export async function getUser(token: string) {
  const decoded = jwt.decode(token) as { id: number };
  const id = decoded.id;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
      include: {
        posts: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
            pictures: true,
          },
        },
        badges: true,
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

export async function createPost(
  caption: string,
  imgUrl: string,
  hashTags: string,
  token: string
) {
  const decoded = jwt.decode(token) as { id: number };
  const id = decoded.id;

  try {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    const post = await prisma.post.create({
      data: {
        user_id: id,
        caption,
        state: user?.state as string,
        likes: 0,
        tags: hashTags,
      },
    });

    await prisma.picture.create({
      data: {
        post_id: post.id,
        caption: caption,
        image_url: imgUrl,
      },
    });

    await prisma.user.update({
      where: { id },
      data: {
        token: {
          increment: 20,
        },
      },
    });

    return {
      status: 200,
    };
  } catch (e) {
    console.log(e);
    return {
      status: 500,
    };
  }
}

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        pictures: true,
        user: {
          select: {
            username: true,
            name: true,
          },
        },
      },
    });

    return {
      status: 200,
      posts,
    };
  } catch {
    return {
      status: 500,
      posts: [],
    };
  }
}

export async function getTokenCount(token: string) {
  const { id } = jwt.decode(token) as JwtPayload;

  try {
    const res = await prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        token: true,
      },
    });

    if(!res) return 0;

    return res?.token;
  } catch {
    return 0;
  }
}

export async function deductToken(token: string, amount: number) {
  const { id } = jwt.decode(token) as JwtPayload;

  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        token: {
          decrement: amount,
        },
      },
    });

    return { status: 200 };
  } catch {
    return {
      status: 500,
    };
  }
}

export async function assignBadge(token: string, name: string) {
  try {
    const { id } = jwt.decode(token) as JwtPayload;

    const find = await prisma.badge.findFirst({ where: { name, user_id: id } });

    if (find) return { status: 404 };

    await prisma.badge.create({
      data: {
        name,
        user_id: id,
      },
    });
  } catch (e) {
    console.log(e);
    return {
      status: 500,
    };
  }
}
