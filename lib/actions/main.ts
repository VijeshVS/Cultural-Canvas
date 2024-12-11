"use server";
import jwt from "jsonwebtoken";
import { prisma } from "../db";

export async function peekUser(username: string){
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
                name: true
              }
            },
            pictures: true
          }
        }
      }
    });

    if(!user) {
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
                name: true
              }
            },
            pictures: true
          }
        }
      }
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
            name: true
          }
        }
      }
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
