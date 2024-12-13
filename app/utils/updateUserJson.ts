export async function createPost(
	caption: string,
	imageLink: string,
	hashtags: string,
	username: string,
	token: string
) {
	const response = await fetch("/api/createPost", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`, // Optional if auth is implemented
		},
		body: JSON.stringify({ caption, imageLink, hashtags, username }),
	});

	return response.json();
}
