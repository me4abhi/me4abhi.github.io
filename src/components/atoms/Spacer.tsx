import React from 'react';

interface SpacerProps {
  size: string;
}

const Spacer: React.FC<SpacerProps> = (props) => {
  const { size } = props;
  return <div style={{ height: size }}></div>;
};

export default Spacer;
