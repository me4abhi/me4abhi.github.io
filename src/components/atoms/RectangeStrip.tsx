import React from 'react';

export interface RectangeStripProps {
  height?: string;
  width?: string;
  bgColor?: string;
  styles?: string;
}

const RectangeStrip: React.FC<RectangeStripProps> = (props) => {
  const { height = '100px', width = '100vw', bgColor = 'lightgray' } = props;

  return (
    <div
      style={{
        height: height,
        width: width,
        backgroundColor: bgColor,
      }}
      className={props.styles}
    />
  );
};

export default RectangeStrip;
