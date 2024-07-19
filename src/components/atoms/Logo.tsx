import React from 'react';

interface LogoProps {
  children?: React.ReactNode;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="w-20 h-20 bg-primary-gradient flex items-center justify-center rounded-full my-4">
      <h1 className="text-5xl font-barriecito">AS</h1>
    </div>
  );
};

export default Logo;
