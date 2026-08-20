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
      const y = window.innerHeight; // Start from bottom
      const targetY = Math.random() * (window.innerHeight * 0.6); // Fly to top half
      
      firework.style.left = `${x}px`;
      firework.style.top = `${y}px`;
      
      // Fire/Flame colors
      const colors = ['#f97316', '#ea580c', '#fbbf24', '#ef4444', '#dc2626'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      firework.style.backgroundColor = color;
      firework.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}`;

      container.appendChild(firework);

      // Animate flight
      const flightDuration = 1000 + Math.random() * 1000;
      const animation = firework.animate([
        { top: `${y}px`, opacity: 1 },
        { top: `${targetY}px`, opacity: 1 }
      ], {
        duration: flightDuration,
        easing: 'ease-out'
      });

      animation.onfinish = () => {
        firework.remove();
        // Explosion/Flame burst
        for (let i = 0; i < 20; i++) {
          const spark = document.createElement('div');
          spark.className = 'spark';
          spark.style.left = `${x}px`;
          spark.style.top = `${targetY}px`;
          spark.style.backgroundColor = color;
          spark.style.width = '4px';
          spark.style.height = '4px';
          spark.style.filter = 'blur(1px)';
          spark.style.setProperty('--x', `${(Math.random() - 0.5) * 200}px`);
          container.appendChild(spark);
          
          spark.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${(Math.random() - 0.5) * 200}px, ${-(Math.random() * 150)}px) scale(0)`, opacity: 0 }
          ], {
            duration: 1000 + Math.random() * 1000,
            easing: 'ease-out'
          }).onfinish = () => spark.remove();
        }
      };
    };

    const interval = setInterval(createFirework, 400); // More frequent
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
