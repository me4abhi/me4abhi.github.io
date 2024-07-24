import React from 'react';

interface SpacerProps {
  size: string;
  styles?: string;
}

const Spacer: React.FC<SpacerProps> = (props) => {
  const { size, styles } = props;
  return <div style={{ height: size }} className={styles}></div>;
};

export default Spacer;
