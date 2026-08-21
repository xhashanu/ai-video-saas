import React from 'react';
import { Link } from 'wasp/client/router';
import { SidebarLayout } from './SidebarLayout';

export const DashboardPage = () => {
  return (
    <SidebarLayout>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 mt-8">
          <h1 className="text-3xl font-bold mb-8">Hello, what would you like to create today?</h1>
          
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow transition font-medium">
              ⚡ Quick Editor
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow transition font-medium">
              🎬 Full Editor
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow transition font-medium">
              🤖 AI Videos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ToolCard 
            title="Video Ranking" 
            description="Combine videos and rank them — perfect for top lists and viral reviews."
            imagePlaceholder="📊"
            linkTo="/create/video-ranking"
            buttonText="Start Ranking"
          />
          <ToolCard 
            title="Auto Clipping" 
            description="AI finds viral moments and cuts them into short clips"
            imagePlaceholder="✂️"
            linkTo="/create/auto-clipping"
            buttonText="Clip It Now"
          />
          <ToolCard 
            title="Video Commentary" 
            description="Convert scripts into screen"
            imagePlaceholder="💬"
            linkTo="/create/video-commentary"
            buttonText="Create Video Commentary"
          />
          <ToolCard 
            title="Text Story" 
            description="Create text-based stories, complete with gameplay elements and crisp AI voiceovers."
            imagePlaceholder="📝"
            linkTo="/create/text-story"
            buttonText="Create Text Story"
          />
          <ToolCard 
            title="Generate AI Voiceover" 
            description="Create humanlike AI voices in seconds, generate any voice with stunning accuracy and expression."
            imagePlaceholder="🎙️"
            linkTo="/create/generate-voiceover"
            buttonText="Create Voiceover"
          />
          <ToolCard 
            title="Generate Image" 
            description="Create a clip in seconds with the power of our AI tools"
            imagePlaceholder="🖼️"
            linkTo="/create/ai-image-generator"
            buttonText="Generate Image"
          />
          <ToolCard 
            title="Video Transcriber" 
            description="Instantly turn any video into a readable script with timestamps"
            imagePlaceholder="📝"
            linkTo="/create/video-transcriber"
            buttonText="Create Transcriptions"
          />
        </div>
      </div>
    </SidebarLayout>
  );
};

const ToolCard = ({ title, description, imagePlaceholder, linkTo, buttonText }: any) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col hover:shadow-md transition">
    <div className="h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-4xl border-b border-gray-200 dark:border-gray-600">
      {imagePlaceholder}
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 mb-6">{description}</p>
      <Link to={linkTo} className="block text-center w-full bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-semibold py-2 px-4 rounded-lg transition-colors">
        {buttonText}
      </Link>
    </div>
  </div>
);
