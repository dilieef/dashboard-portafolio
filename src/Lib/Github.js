const GITHUB_USERNAME = "dilieef";
const BASE_URL = "https://api.github.com";

async function githubFetch(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            Accept: "application/vnd.github+json",
        },
        next: { revalidate: 3600 }, // Cache de 1 hora
    });

    if (!response.ok) return null;
    return response.json();
}

export async function getGithubProfile(username = GITHUB_USERNAME) {
    return githubFetch(`/users/${username}`);
}

export async function getGithubRepos(username = GITHUB_USERNAME) {
    const data = await githubFetch(
        `/users/${username}/repos?sort=updated&per_page=6`
    );
    return data ?? [];
}