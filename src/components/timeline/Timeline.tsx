import 'animate.css';

import { GiSandsOfTime, GiBookCover, GiSuitcase, GiIdea } from 'react-icons/gi';

import { TimelineItemProps } from './types';
import { TimelineItem } from './TimeItem';

const TITLE = {
  history: 'Historia',
  education: 'Educacion',
  jobs: 'Trabajos',
  projects: 'Proyectos',
};

const ICON = {
  history: <GiSandsOfTime size={40} />,
  education: <GiBookCover size={40} />,
  jobs: <GiSuitcase size={40} />,
  projects: <GiIdea size={40} />,
};

const Timeline = ({
  items,
  current,
}: {
  items: TimelineItemProps[];
  current: 'history' | 'education' | 'jobs' | 'projects';
}) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-1xl font-mono text-black tracking-wide mb-4 ">
            {TITLE[current]}
          </h2>

          <div className="flex justify-center">
            <div className=" rounded-full  w-auto p-2 bg-black ">
              {ICON[current]}
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-4">
          {items.map((item, index) => (
            <TimelineItem
              key={item.id}
              id={item.id}
              pill={item.pill}
              dateStart={item.dateStart}
              dateEnd={item.dateEnd}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
