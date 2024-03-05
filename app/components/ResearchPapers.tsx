"use client"
import { useEffect, useState } from 'react';

export default function ResearchPapers() {

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
        <>

            {/* Heading */}
            <div id="experience" className="pt-24">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Research Papers
                    </h2>
                    <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-300 lg:w-2/3 mx-auto">
                        A collection of my academic works over the years
                    </h3>
                </div>
            </div>
            {/* END Heading */}

            <div className=" pt-14 px-5 lg:px-20">

                {/* Responsive Table Container */}
                <div className="overflow-auto min-w-full border border-gray-200 drop-shadow-2xl-xl rounded-lg bg-white bg-opacity-25">
                    {/* Table */}
                    <table className="min-w-full whitespace-nowrap align-middle text-xs text-sm">
                        {/* Table Header */}
                        <thead>
                            <tr>
                                <th className="px-2 py-2 md:px-8 md:py-4 text-left font-semibold bg-gray-900/25 text-gray-50">
                                    Title
                                </th>

                                <th className="px-1 py-2 md:px-3 md:py-4 text-left font-semibold bg-gray-900/25 text-gray-50">
                                    Authors
                                </th>
                                <th className="px-1 py-2 md:px-3 md:py-4 text-left font-semibold bg-gray-900/25 text-gray-50">
                                    Year
                                </th>
                                <th className="px-1 py-2 md:px-3 md:py-4 text-center font-semibold bg-gray-900/25 text-gray-50">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        {/* END Table Header */}

                        {/* Table Body */}
                        <tbody>
                            {articles.map((article, index) => (
                                <tr key={index} className="even:bg-gray-50 even:bg-gray-700/25 text-gray-50">
                                    <td className="py-2 px-2 md:py-3 md:px-8 text-left">{article.title}</td>
                                    <td className="p-1 md:p-3 text-gray-400">{article.authors}</td>
                                    <td className="p-1 md:p-3">{article.year}</td>
                                    <td className="p-1 md:p-3 text-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center space-x-2 rounded-lg border px-1 py-1 md:px-2 md:py-1 text-xs text-sm font-semibold leading-5 hover:shadow-sm focus:ring active:shadow-none border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600 hover:text-gray-200 focus:ring-gray-600 focus:ring-opacity-40 active:border-gray-700"
                                            onClick={() => window.open(`${article.link}`, '_blank')}
                                        >
                                            Visit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        {/* END Table Body */}
                    </table>
                    {/* END Table */}
                </div>
                {/* END Responsive Table Container */}
            </div>

        </>
    );
}
