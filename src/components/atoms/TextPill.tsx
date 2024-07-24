import React from 'react';

interface TextPillProps {
  children: string;
  bgColor: string;
  textSize: string;
}

const TextPill: React.FC<TextPillProps> = (props) => {
  const { children, bgColor, textSize } = props;

  return (
    <span
      style={{ background: bgColor, fontSize: textSize }}
      className="px-2 py-1 rounded-xl flex items-center justify-center text-center"
    >
      {children}
    </span>
  );
};

export default TextPill;
