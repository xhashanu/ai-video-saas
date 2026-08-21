import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export const CreateVideoCommentaryPage = () => {
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [script, setScript] = useState('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    // Logic will be added later
    alert('Project created successfully and is now processing!');
    navigate('/dashboard');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Create Video Commentary</h1>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow border border-gray-100 dark:border-gray-700">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Project Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            placeholder="My Awesome Commentary"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Target Video URL</label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            placeholder="https://youtube.com/..."
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Commentary Script (or AI prompt)</label>
          <textarea
            rows={5}
            value={script}
            onChange={(e) => setScript(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            placeholder="Write your commentary script here..."
          ></textarea>
        </div>
        <button
          onClick={handleCreate}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
        >
          Create Project
        </button>
      </div>
    </div>
  );
};
