'use client';

import { useEffect, useState } from 'react';


interface Repo {
  id: number;
  name: string;
}

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const username = 'wcward3302';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }
        
        const data: Repo[] = await res.json();
        setRepos(data);
        
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <main>
      <h1>Repositories for {username}</h1>
        <div>
          {repos.map((repo) => (
            <div key={repo.id}>
                <a key={repo.id} href={repo.html_url}>
                    {repo.name}
                </a>
            </div>
          ))}
        </div>
    </main>
  );
}
