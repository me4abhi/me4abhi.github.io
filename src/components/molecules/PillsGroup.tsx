import React from 'react';
import TextPill from '../atoms/TextPill';

interface PillsGroupProps {
  items: string[];
}

const PillsGroup: React.FC<PillsGroupProps> = (props) => {
  const { items } = props;

  return items?.map((item, index) => {
    return (
      <TextPill key={index} bgColor={'red'}>
        {item}
      </TextPill>
    );
  });
};

export default PillsGroup;
