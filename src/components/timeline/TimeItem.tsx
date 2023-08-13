import { useEffect, useState } from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

import { TimelineProps } from './types';

const TimelineItem = ({
  title,
  description,
  index,
  pill,
  icon,
  dateStart,
  dateEnd,
}: TimelineProps) => {
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
      className={`flex  ${
        isVisible
          ? alignRight
            ? 'md:flex-row-reverse animate__animated animate__fadeInRight'
            : 'animate__animated animate__fadeInLeft '
          : 'opacity-0'
      } `}
    >
      <div
        className={`flex md:w-1/2  justify-between shadow-2xl rounded-md  py-4   ${
          alignRight ? 'border-l-4' : 'border-r-4 md:ml-1 md:flex-row-reverse '
        } border-indigo-500`}
      >
        <div className={`flex justify-center md:mx-7 flex-col  `}>
          {dateEnd === 'current' ? (
            <div className="relative ">
              <span className="absolute top-0 right-0  flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#73FFE0]"></span>
              </span>
              <p className="text-[10px] md:text-xs text-black font-mono p-2">
                Actualmente
              </p>
            </div>
          ) : (
            <p className="text-[10px] md:text-xs text-gray-500 font-mono p-2">
              {dateEnd}
            </p>
          )}

          <p className="text-black text-center "> | </p>
          <p className=" text-[10px] md:text-xs text-gray-500 font-mono p-2">
            {dateStart}
          </p>
        </div>

        <div className="flex items-center justify-end w-3/3    ">
          <div className=" w-14 h-14 md:w-32 md:h-32 md:p-8  ">
            <img
              style={{
                borderRadius: 80,
                width: '100%',
                height: '100%',
              }}
              src={icon}
              className="w-full h-full"
            />
          </div>

          <div className=" ml-6  ">
            <h3 className=" text-xs md:text-md font-mono leading-6 text-gray-900 mb-2 md:mr-6">
              {title}
            </h3>
            <div
              className={`${
                pill === 'Educacion' ? 'bg-cyan-800' : 'bg-orange-600'
              }  p-2 md:p-3 w-min rounded-full`}
            >
              <p className=" text-[10px] md:text-xs  font-bold">{pill}</p>
            </div>
            <p className="mt-4 text-[10px] md:text-xs   text-gray-500 w-44  font-mono">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TimelineItem };
