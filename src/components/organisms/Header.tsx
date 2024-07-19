import React from 'react';
import Logo from '../atoms/Logo';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <h2 className="text-gradient text-5xl font-bold">Abhinav</h2>
      <Logo />
      <h2 className="text-gradient text-5xl font-bold my-8">Engineer</h2>
    </div>
  );
};

export default Header;
