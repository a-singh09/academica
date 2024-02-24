"use client"

import { useEffect, useState } from 'react';

interface Article {
  title: string;
  link: string;
  citation_id: string;
  authors: string;
  cited_by: {
    value: string | null;
  };
  year: string;
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link} target="_blank">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
