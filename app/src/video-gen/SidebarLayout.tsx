import React from 'react';
import { Link } from 'wasp/client/router';

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col h-screen sticky top-0 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-indigo-600">❖</span> Viblo
          </h2>
        </div>
        
        <nav className="flex-1 px-4 pb-4 space-y-1">
          <Link to="/dashboard" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">🏠 Home</Link>
          <Link to="/library" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">📁 Library</Link>
          <Link to="/tutorial" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">📺 Tutorial</Link>
          <Link to="/free-course" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">🎓 Free Course</Link>

          <div className="pt-6 pb-2">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">All Tools</p>
          </div>
          
          <Link to="/create/text-story" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">📝 Text Story</Link>
          <Link to="/create/video-story" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">🎬 Video Story</Link>
          <Link to="/create/video-commentary" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">💬 Video Commentary</Link>
          <Link to="/create/split-screen" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">🪟 Split Screen</Link>
          <Link to="/create/video-ranking" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">📊 Video Ranking</Link>
          <Link to="/create/auto-clipping" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">✂️ Auto Clipping</Link>
          <Link to="/create/simple-editor" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">✏️ Simple Editor</Link>
          <Link to="/create/generate-voiceover" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">🎙️ Generate A Voiceover</Link>
          <Link to="/create/video-transcriber" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">📝 Video Transcriber</Link>
          <Link to="/create/ai-image-generator" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">🖼️ AI Image Generator</Link>
          <Link to="/create/ai-video-generator" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">🎥 AI Video Generator</Link>
          <Link to="/create/video-downloader" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">⬇️ Video Downloader</Link>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-4 space-y-1">
            <a href="#" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">❓ Help Center</a>
            <a href="#" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">👾 Discord</a>
            <a href="#" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">🤝 Affiliate</a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border rounded-full text-sm font-medium">Credit ⌄</button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">A</div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
