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
      <main className="max-w-4xl mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">
          Repositories for {username}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white bg-opacity-10 rounded-xl p-4 hover:shadow-lg transition"
            >
              <Link href={`/projects/${repo.name}`} passHref>
                <p className="text-lg font-semibold hover:underline">
                  {repo.name}
                </p>
              </Link>
              <p className="text-sm text-gray-300 mt-2">
                {repo.description || "No description provided."}
              </p>
            </div>
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}
