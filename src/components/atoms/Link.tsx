import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  url: string;
}

const Link: React.FC<LinkProps> = ({ children, url }) => {
  return <a href={url}>{children}</a>;
};

export default Link;
