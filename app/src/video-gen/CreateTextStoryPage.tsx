import React, { useState } from 'react';
import { useAction } from 'wasp/client/operations';
import { generateScript, createVideoProject } from 'wasp/client/operations';
import { useNavigate } from 'react-router';

export const CreateTextStoryPage = () => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [script, setScript] = useState('');
  const [topic, setTopic] = useState('');
  const [voiceId, setVoiceId] = useState('voice-1');
  const [backgroundUrl, setBackgroundUrl] = useState('minecraft-parkour.mp4');

  const generateScriptFn = useAction(generateScript);
  const createVideoProjectFn = useAction(createVideoProject);
  const navigate = useNavigate();

  const handleGenerateScript = async () => {
    try {
      const res = await generateScriptFn({ topic, tone: 'Casual', length: '30s' });
      setScript(res.script);
    } catch (err: any) {
      alert('Error generating script: ' + err.message);
    }
  };

  const handleCreateProject = async () => {
    try {
      await createVideoProjectFn({
        title: title || 'My Text Story',
        type: 'TEXT_STORY',
        script,
        voiceId,
        backgroundUrl,
      });
      alert('Project created successfully and is now processing!');
      navigate('/dashboard');
    } catch (err: any) {
      alert('Error creating project: ' + err.message);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Create Text Story</h1>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map(s => (
            <div key={s} className={`h-2 w-12 rounded-full ${step >= s ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow border border-gray-100 dark:border-gray-700">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">1. Contact & Template</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Project Name</label>
              <input 
                type="text" 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder="e.g. Minecraft Story 1" 
                className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <button onClick={() => setStep(2)} className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700">Next →</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">2. Script</h2>
            <div className="flex gap-4 mb-4">
              <input 
                type="text" 
                value={topic} 
                onChange={e => setTopic(e.target.value)} 
                placeholder="Topic for AI generation" 
                className="flex-1 border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <button 
                onClick={handleGenerateScript}
                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
              >
                Generate Script
              </button>
            </div>
            <textarea
              value={script}
              onChange={e => setScript(e.target.value)}
              rows={8}
              className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 font-mono text-sm"
              placeholder="Your script here..."
            />
            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="text-gray-500 hover:text-gray-700">← Back</button>
              <button onClick={() => setStep(3)} className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700">Next →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">3. Voices</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Select Voice</label>
              <select 
                value={voiceId} 
                onChange={e => setVoiceId(e.target.value)}
                className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="voice-1">Adam (ElevenLabs)</option>
                <option value="voice-2">Rachel (ElevenLabs)</option>
                <option value="voice-3">Josh (ElevenLabs)</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="text-gray-500 hover:text-gray-700">← Back</button>
              <button onClick={() => setStep(4)} className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700">Next →</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">4. Background Video</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Select Background</label>
              <select 
                value={backgroundUrl} 
                onChange={e => setBackgroundUrl(e.target.value)}
                className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="minecraft-parkour.mp4">Minecraft Parkour</option>
                <option value="gta-v-racing.mp4">GTA V Racing</option>
                <option value="subway-surfers.mp4">Subway Surfers</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(3)} className="text-gray-500 hover:text-gray-700">← Back</button>
              <button 
                onClick={handleCreateProject} 
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 font-bold"
              >
                Create Video Project
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
