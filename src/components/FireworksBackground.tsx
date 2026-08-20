import React, { useEffect, useRef } from 'react';

const FireworksBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createFirework = () => {
      const firework = document.createElement('div');
      firework.className = 'firework';
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      firework.style.left = `${x}px`;
      firework.style.top = `${y}px`;
      
      const colors = ['#a855f7', '#06b6d4', '#ec4899', '#ffffff', '#eab308'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      firework.style.backgroundColor = color;
      firework.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;

      container.appendChild(firework);

      // Add sparks
      for (let i = 0; i < 12; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.backgroundColor = color;
        spark.style.setProperty('--x', `${(Math.random() - 0.5) * 100}px`);
        container.appendChild(spark);
        setTimeout(() => spark.remove(), 1500);
      }

      setTimeout(() => firework.remove(), 2000);
    };

    const interval = setInterval(createFirework, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none -z-20 bg-[#0a0a0a] overflow-hidden"
    />
  );
};

export default FireworksBackground;
