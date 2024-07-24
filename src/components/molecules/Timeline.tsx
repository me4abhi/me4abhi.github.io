import React from 'react';
import TimelineItem from './TimelineItem';
import PillsGroup from './PillsGroup';

const Timeline: React.FC = () => {
  return (
    <section className="w-full lg:relative lg:top-16" id="experience">
      <h1 className="font-bold text-white text-xl mb-1 mx-8 lg:hidden">
        Experience
      </h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-8 lg:mx-0">
        <TimelineItem
          date={'January 2024'}
          title={'Frontend Engineer • MapUp'}
          content={
            'Build and maintain critical components used to construct frontend products at MapUp. Work closely with cross-functional teams including developers, designers, and data analysts, to implement and advocate best practices in UI/UX and web accessibility.'
          }
          href="https://www.mapup.ai/"
        >
          <PillsGroup items={['JavaScript', 'Next.js', 'TailwindCSS', 'AWS']} />
        </TimelineItem>

        <TimelineItem
          date={'January 2023'}
          title={'SDE-I • Delta India'}
          content={
            'Implemented responsive UI components with React.js and TailwindCSS, created landing pages with Next.js, integrated third-party APIs, and developed WordPress sites.'
          }
          href="https://deltas.co.in/"
        >
          <PillsGroup
            items={['React.js', 'Redux Toolkit', 'SCSS', 'WordPress']}
          />
        </TimelineItem>

        <TimelineItem
          date={'November 2021'}
          title={'Developer, Mobile/XT • Publicis Sapient'}
          content={
            "Developed, maintained, and shipped production code for client websites. Clients included The Children's Place, Publicis Groupe, and more."
          }
          href="https://www.publicissapient.com/"
        >
          <PillsGroup items={['React.js', 'Redux', 'Flutter']} />
        </TimelineItem>

        <TimelineItem
          date={'January 2021 - June 2021'}
          title={'Internship • EME Technologies'}
          content={
            'Collaborated with other student designers to design wireframes and develop new features for client projects.'
          }
        >
          <PillsGroup items={['HTML/CSS', 'JavaScript', 'PHP', 'MySQL']} />
        </TimelineItem>
      </ol>
    </section>
  );
};

export default Timeline;
