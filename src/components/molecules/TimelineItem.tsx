import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  content: string;
  href?: string;
  children: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  const { date, title, content, href, children } = props;

  return (
    <>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gradient-white">
          {date}
        </time>
        <h3 className="text-lg font-semibold text-gradient-white">{title}</h3>
        <p className="mb-4 text-base font-normal text-gradient-white">
          {content}
        </p>
        {href?.length && (
          <a
            href={href}
            className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white rounded-lg hover:bg-white-gradient"
          >
            Visit
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        )}
        <div className="mt-4 text-white">{children}</div>
      </li>
    </>
  );
};

export default TimelineItem;
