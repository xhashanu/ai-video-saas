const fs = require('fs');
const files = [
  'CreateAutoClippingPage.tsx',
  'CreateTextStoryPage.tsx',
  'CreateVideoCommentaryPage.tsx',
  'CreateVideoRankingPage.tsx',
  'AiImageGeneratorPage.tsx',
  'AiVideoGeneratorPage.tsx',
  'FreeCoursePage.tsx',
  'GenerateVoiceoverPage.tsx',
  'LibraryPage.tsx',
  'SimpleEditorPage.tsx',
  'SplitScreenPage.tsx',
  'TutorialPage.tsx',
  'VideoDownloaderPage.tsx',
  'VideoStoryPage.tsx',
  'VideoTranscriberPage.tsx'
];

for (const file of files) {
  const path = `app/src/video-gen/${file}`;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    if (!content.includes('SidebarLayout')) {
      content = content.replace("import React", "import React from 'react';\nimport { SidebarLayout } from './SidebarLayout';\n//");
      
      // Basic wrapper for dummy files
      if (content.includes('<div className="p-8">')) {
         content = content.replace('<div className="p-8">', '<SidebarLayout><div className="p-8">');
         content = content.replace('</div>;', '</div></SidebarLayout>;');
      } else if (content.includes('<div className="p-8 max-w-4xl')) {
         content = content.replace('<div className="p-8 max-w-4xl', '<SidebarLayout><div className="p-8 max-w-4xl');
         content = content.replace(/<\/div>\n  \);\n};\n$/, '</div></SidebarLayout>\n  );\n};\n');
         content = content.replace(/<\/div>\n  \);\n}$/, '</div></SidebarLayout>\n  );\n}');
      }
      fs.writeFileSync(path, content);
    }
  }
}
