import React from 'react';
import TextPill from '../atoms/TextPill';

interface PillsGroupProps {
  items: string[];
}

const PillsGroup: React.FC<PillsGroupProps> = (props) => {
  const { items } = props;

  return (
    <div className="flex gap-2">
      {items?.map((item, index) => {
        return (
          <TextPill
            key={index}
            bgColor={'var(--gradient-secondary)'}
            textSize={'.8rem'}
          >
            {item}
          </TextPill>
        );
      })}
    </div>
  );
};

export default PillsGroup;
