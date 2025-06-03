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
  const [languages, setLanguages] = useState<Record<string, number> | null>(null);
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

        const adjusted = decoded.replace(/!\[([^\]]*)\]\((?!http)([^)]+)\)/g, 
          `![$1](https://raw.githubusercontent.com/wcward3302/${projectName}/main/$2)`
        );
        setReadme(adjusted);

        const languageRes = await fetch(`https://api.github.com/repos/wcward3302/${projectName}/languages`);
        if (!languageRes.ok) throw new Error(`Languages fetch error: ${languageRes.status}`);
        const languageData = await languageRes.json();
        setLanguages(languageData);
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
      <div className="w-full flex flex-col items-center space-y-8">
      {loading && <p className="text-center">Loading project...</p>}
      {error && <p className="text-red-500 p-4 bg-red-900/20 rounded">{error}</p>}
      {repo && (
        <div className="space-y-6 w-full">
          <h1 className="text-3xl font-bold text-center">{repo.name}</h1>
          <p className="text-lg text-center">{repo.description || "No description provided."}</p>
          <div className="flex justify-center">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View on GitHub
            </a>
          </div>
          {languages && (
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Languages Used</h2>
              <ul className="space-y-2">
                {Object.entries(languages).map(([lang, bytes]) => (
                  <li key={lang} className="flex justify-between items-center">
                    <span className="font-medium">{lang}</span>
                    <span className="text-blue-500">
                      {(bytes / Object.values(languages).reduce((sum, val) => sum + val, 0) * 100).toFixed(1)}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {readme && (
        <div className="prose prose-invert max-w-none w-full">
          <h2 className="text-2xl font-bold mb-4">README</h2>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <ReactMarkdown>{readme}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
    </PageWrapper>
  );
}
