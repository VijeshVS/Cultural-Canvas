import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Load the user.json file
const filePath = path.resolve(process.cwd(), "user.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { caption, imageLink, hashtags, username } = body;

    if (!caption || !imageLink || !username) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Read and parse the existing user.json file
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Find the user by username
    const user = data.find((u: { username: string }) => u.username === username);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Add the new post to the user's posts
    const newPost = {
      likes: 0,
      caption,
      hashtags: hashtags.split(",").map((tag: string) => tag.trim()),
      image_url: imageLink,
    };
    user.posts.push(newPost);

    // Write the updated data back to user.json
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: "Post added" });
  } catch (error) {
    console.error("Error in createPost:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
