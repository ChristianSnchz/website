import { useEffect, useState } from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

import { GiSandsOfTime } from 'react-icons/gi';

type TimelineItem = {
  id: number;
  dateStart: string;
  dateEnd: string;
  title: string;
  description: string;
  pill?: 'Educacion' | 'Trabajo' | 'Proyecto';
  icon?: string;
  index: number;
};

const TimelineItem = ({
  title,
  description,
  index,
  pill,
  icon,
  dateStart,
  dateEnd,
}: TimelineItem) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9, // El elemento se considerará visible cuando al menos el 20% esté en el viewport
  });

  const alignRight = index % 2 === 0;

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`flex justify-between   ${
        isVisible
          ? alignRight
            ? 'flex-row-reverse animate__animated animate__fadeInRight'
            : 'animate__animated animate__fadeInLeft '
          : 'opacity-0'
      } `}
    >
      <div
        className={`w-1/2 flex justify-between   ${
          alignRight
            ? 'border-l-4  justify-end'
            : 'border-r-4 ml-1 flex-row-reverse '
        } border-indigo-500`}
      >
        <div className={`flex justify-center mx-7 flex-col `}>
          {dateEnd === 'current' ? (
            <div className=" rounded-lg relative ">
              <span className="absolute top-0 right-0  flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#73FFE0]"></span>
              </span>
              <p className="text-xs text-black font-mono p-2">Actualmente</p>
            </div>
          ) : (
            <p className="text-xs text-gray-500 font-mono p-2">{dateEnd}</p>
          )}

          <p className="text-black text-center "> | </p>
          <p className="text-xs text-gray-500 font-mono p-2">{dateStart}</p>
        </div>

        <div className="flex items-center ">
          <div className="flex p-8 ">
            <img
              style={{ width: 60, height: 60, borderRadius: 80 }}
              src={icon}
            />
          </div>
          <div className="ml-6">
            <h3 className="text-md font-mono leading-6 text-gray-900 mb-2">
              {title}
            </h3>
            <div
              className={`${
                pill === 'Educacion' ? 'bg-cyan-800' : 'bg-orange-600'
              } p-3 w-min rounded-full`}
            >
              <p className="text-xs font-mono font-bold">{pill}</p>
            </div>
            <p className="mt-4 text-xs  text-gray-500 w-44  font-mono">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ current }: { current: string }) => {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);

  useEffect(() => {
    // Mock data for the timeline items
    const items = [
      {
        id: 7,
        dateStart: '2021-11-20',
        dateEnd: 'current',
        pill: 'Trabajo',
        title: 'Reserve',
        icon: '/reserve.webp',
        description: 'Software Developer',
      },
      {
        id: 6,
        dateStart: '2021-11-20',
        dateEnd: '2022-06-20',
        pill: 'Trabajo',
        title: 'Buenbit',
        icon: '/buenbit.png',
        description: 'Software Developer',
      },
      {
        id: 5,
        dateStart: '2017-01-20',
        dateEnd: '2017-11-20',
        pill: 'Trabajo',
        title: 'Santander Tecnologia',
        icon: '/santander.png',
        description: 'Software Developer',
      },
      {
        id: 4,
        dateStart: '2020-01-20',
        dateEnd: '2021-12-20',
        pill: 'Trabajo',
        title: 'Axoft',
        icon: '/tango.jpeg',
        description: 'Software Developer',
      },
      {
        id: 3,
        dateStart: '2018-01-20',
        dateEnd: '2020-12-20',
        pill: 'Trabajo',
        title: 'Cala Spa - Avila Viajes',
        icon: '/calaspa.png',
        description: 'Desarrollador Web Cala Spa',
      },
      {
        id: 2,
        dateStart: '2014-06-12',
        dateEnd: '2020-06-12',
        pill: 'Educacion',
        title: 'Ingenieria de sistemas',
        icon: '/ula.png',
        description: 'Inicie la carrera En la ULA ubicada en Merida-Venezuela',
      },
      {
        id: 1,
        dateStart: '2014-06-12',
        dateEnd: '2020-06-12',
        title: 'Ingles',
        pill: 'Educacion',
        icon: '/logocevam.png',
        description: 'Nivel Conversacional',
      },
    ];

    setTimelineItems(items);
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-1xl font-mono text-black tracking-wide mb-4 ">
            Historia
          </h2>

          <div className="flex justify-center">
            <div className=" rounded-full  w-auto p-2 bg-black ">
              <GiSandsOfTime size={40} />
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-4">
          {timelineItems.map((item, index) => (
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
