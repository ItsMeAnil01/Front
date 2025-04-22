
import React from 'react';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img 
        src="/lovable-uploads/1a8ebe6a-73a9-46b3-990a-c570771e2743.png"
        alt="Health Oracle Logo" 
        className="h-12 w-12 object-contain" // Increased size by 50% (from h-8 w-8 to h-12 w-12)
      />
      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-xl font-bold leading-tight text-white">Health</span>
        <span className="text-xl font-bold leading-tight text-white">Oracle</span>
      </div>
    </div>
  );
};

export default Logo;

