'use client';

import Link from 'next/link';
import PageWrapper from './../pagewrapper';
import { useEffect, useState } from 'react';


interface Repo {
  html_url: string | undefined;
  description: string;
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
    <PageWrapper>
      <div className="w-full flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-bold mb-8">
          Repositories for {username}
        </h1>
        <div className="grid gap-6 w-full">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="p-6 bg-gray-800/20 dark:bg-gray-800/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/projects/${repo.name}`} passHref>
                <p className="text-xl font-semibold special-text hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer">
                  {repo.name}
                </p>
              </Link>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {repo.description || "No description provided."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
