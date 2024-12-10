import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertToRawGitHubURL = (url: string): string => {
  try {
    const githubPrefix = "https://github.com/";
    const rawPrefix = "https://raw.githubusercontent.com/";

    if (url.startsWith(githubPrefix)) {
      const parts = url.replace(githubPrefix, "").split("/");
      if (parts.length >= 5 && parts[2] === "blob") {
        const [username, repo, , branch, ...pathParts] = parts;
        return `${rawPrefix}${username}/${repo}/${branch}/${pathParts.join(
          "/"
        )}`;
      }
    }
    return url; // Return the original URL if it's not a valid GitHub link
  } catch (error) {
    console.error("Error converting GitHub URL:", error);
    return url;
  }
};