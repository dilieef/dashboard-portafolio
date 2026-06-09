export async function getGithubProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
        return null;
    }

    return response.json();
}

export async function getGithubRepos(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=3`
    );

    if (!response.ok) {
        return [];
    }

    return response.json();
}