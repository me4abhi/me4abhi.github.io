import React from 'react';

interface TextDiscProps {
  text: string;
  textSize: string;
  size: string;
  bgColor?: string;
  styles?: string;
}

const TextDisc: React.FC<TextDiscProps> = (props) => {
  const {
    text,
    textSize = '1rem',
    size = '20px',
    bgColor = 'var(--gradient-primary)',
    styles,
  } = props;

  return (
    <div
      style={{
        height: size,
        width: size,
        fontSize: textSize,
        background: bgColor,
      }}
      className={`flex items-center justify-center rounded-full ${styles}`}
    >
      {text}
    </div>
  );
};

export default TextDisc;
