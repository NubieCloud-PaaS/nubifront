'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
  { text: '$ nubi deploy --prod', type: 'command' as const },
  { text: '  Detecting framework... Next.js 16', type: 'info' as const },
  { text: '  Building application...', type: 'info' as const },
  { text: '  ████████████████████ 100%', type: 'progress' as const },
  { text: '  ✓ SSL certificate provisioned', type: 'success' as const },
  { text: '  ✓ DNS configured', type: 'success' as const },
  { text: '  ✓ Edge functions deployed', type: 'success' as const },
  { text: '  Ready! https://console.nubiecloud.io', type: 'link' as const },
  { text: '  Deployed in 4.2s', type: 'success' as const },
];

const typeColors = {
  command: 'text-blue-400',
  info: 'text-text-secondary',
  progress: 'text-blue-400',
  success: 'text-green-400',
  link: 'text-blue-300',
};

export default function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const animate = () => {
      setVisibleLines(0);
      let i = 0;
      const showNext = () => {
        i++;
        setVisibleLines(i);
        if (i < lines.length) {
          timeout = setTimeout(showNext, i === 3 ? 600 : 350);
        } else {
          timeout = setTimeout(animate, 4000);
        }
      };
      timeout = setTimeout(showNext, 500);
    };
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="glass-card rounded-xl overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <span className="text-xs text-text-tertiary font-mono ml-2">terminal — nubi deploy</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 font-mono text-sm leading-7 min-h-[280px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={`${i}-${visibleLines > i ? 'show' : 'hide'}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={typeColors[line.type]}
          >
            {line.text}
          </motion.div>
        ))}
        {visibleLines < lines.length && visibleLines > 0 && (
          <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-1" />
        )}
      </div>
    </div>
  );
}
