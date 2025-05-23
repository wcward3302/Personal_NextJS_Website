'use client';

import { useEffect, useState } from 'react';
import PageWrapper from './../../pagewrapper';
import ReactMarkdown from 'react-markdown';

interface Repo {
  html_url: string;
  description: string;
  id: number;
  name: string;
}

export default function ProjectPage() {
  const [repo, setRepo] = useState<Repo | null>(null);
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const projectName = decodeURIComponent(pathParts[pathParts.length - 1]);

    const fetchRepoAndReadme = async () => {
      try {
        const repoRes = await fetch(`https://api.github.com/repos/wcward3302/${projectName}`);
        if (!repoRes.ok) throw new Error(`Repo fetch error: ${repoRes.status}`);
        const repoData = await repoRes.json();
        setRepo(repoData);

        const readmeRes = await fetch(`https://api.github.com/repos/wcward3302/${projectName}/readme`);
        if (!readmeRes.ok) throw new Error(`README fetch error: ${readmeRes.status}`);
        const readmeData = await readmeRes.json();
        const decoded = atob(readmeData.content);

        // Manually rewrite image URLs
        const adjusted = decoded.replace(/!\[([^\]]*)\]\((?!http)([^)]+)\)/g, 
          `![$1](https://raw.githubusercontent.com/wcward3302/${projectName}/main/$2)`
        );

        setReadme(adjusted);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoAndReadme();
  }, []);

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto p-6 text-white">
        {loading && <p>Loading project...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {repo && (
          <>
            <h1 className="text-3xl font-bold mb-4">{repo.name}</h1>
            <p className="mb-2 text-gray-300">{repo.description || "No description provided."}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View on GitHub
            </a>
          </>
        )}

        {readme && (
          <div className="prose prose-invert mt-10">
            <h2>README</h2>
            <div className="prose prose-neutral max-w-none bg-white text-black p-6 rounded-md shadow-sm border border-gray-200">
              <ReactMarkdown>{readme}</ReactMarkdown>
            </div>


              
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
