import React from 'react';

interface TextPillProps {
  children: string;
  bgColor: string;
}

const TextPill: React.FC<TextPillProps> = (props) => {
  const { children, bgColor } = props;

  return (
    <span style={{ backgroundColor: bgColor }} className="p-2 rounded-xl">
      {children}
    </span>
  );
};

export default TextPill;
