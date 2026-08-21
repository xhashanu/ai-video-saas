import React from 'react';
import { Link } from 'wasp/client/router';
import { useQuery } from 'wasp/client/operations';
import { getVideoProjects } from 'wasp/client/operations';

export const DashboardPage = () => {
  const { data: projects, isLoading } = useQuery(getVideoProjects);

  return (
    <div className="p-8 max-w-7xl mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Hello, what would you like to create today?</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Text Story</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            Create text-based stories, complete with gameplay elements and crisp AI voiceovers.
          </p>
          <Link to="/create/text-story" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-sm">
            Create
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Video Commentary</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            Convert scripts into screen-ready video commentaries with a simulated voiceover.
          </p>
          <Link to="/create/video-commentary" className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Create
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-2 text-purple-600 dark:text-purple-400">Video Ranking</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            Combine videos and rank them — perfect for top lists and viral reviews.
          </p>
          <Link to="/create/video-ranking" className="block text-center bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm">
            Create
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-2 text-teal-600 dark:text-teal-400">Auto Clipping</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
            Automatically find highlights from long-form videos and convert them into shorts.
          </p>
          <Link to="/create/auto-clipping" className="block text-center bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors text-sm">
            Create
          </Link>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Your Recent Projects</h2>
      {isLoading ? (
        <p>Loading projects...</p>
      ) : projects?.length === 0 ? (
        <p className="text-gray-500">You haven't created any videos yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects?.map((p) => (
            <div key={p.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg truncate">{p.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Type: {p.type}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  p.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 
                  p.status === 'PROCESSING' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-gray-100 text-gray-800'
                }`}>
                  {p.status}
                </span>
                {p.finalVideoUrl && (
                  <a href={p.finalVideoUrl} target="_blank" rel="noreferrer" className="text-indigo-600 text-sm hover:underline">
                    View
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
