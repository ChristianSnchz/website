import 'animate.css';

import { AiOutlineDatabase, AiOutlineCloudServer } from 'react-icons/ai';
import { BsWindowStack, BsServer } from 'react-icons/bs';

const technologiesData = {
  'Front-End': [
    { label: 'JavaScript', icon: 'js.png', learning: false },
    { label: 'React', icon: 'react.png', learning: false },
    { label: 'React-Native', icon: 'react.png', learning: false },
    { label: 'Next.js', icon: 'nextjs.png', learning: false },
    { label: 'TailwindCSS', icon: 'tailwindcss.png', learning: false },
    {
      label: 'Styled-Components',
      icon: 'styled-components.png',
      learning: false,
    },
    { label: 'Flutter', icon: 'flutter.png', learning: true },
    { label: 'TypeScript', icon: 'typescript.png', learning: false },
    { label: 'Zustand', icon: 'zustand.png', learning: false },
    { label: 'Jest', icon: 'jest.png', learning: false },
  ],
  'Back-End': [
    { label: 'Node.js', icon: 'node.png', learning: false },
    { label: 'NestJs', icon: 'nestjs.svg', learning: false },
    { label: 'FastAPI', icon: 'fastapi.png', learning: false },
    { label: 'Python', icon: 'python.png', learning: true },
    { label: 'GraphQL', icon: 'graphql.png', learning: false },
  ],
  DB: [
    { label: 'MongoDB', icon: 'mongo.png', learning: false },
    { label: 'Postgres', icon: 'postgress.png', learning: false },
  ],
  Infra: [
    { label: 'Docker', icon: 'docker.webp', learning: true },
    { label: 'Kubernetes', icon: 'k8s.png', learning: true },
    { label: 'AWS', icon: 'aws.png', learning: true },
    { label: 'Digital Ocean', icon: 'digitalo.png', learning: true },
  ],
};

const ICONS = {
  'Front-End': <BsWindowStack size={50} color="black" />,
  'Back-End': <AiOutlineCloudServer size={50} color="black" />,
  DB: <AiOutlineDatabase size={50} color="black" />,
  Infra: <BsServer size={50} color="black" />,
};

const Card = ({
  tecnologie,
}: {
  tecnologie: keyof typeof technologiesData;
}) => {
  return (
    <div className=" bg-white rounded-xl  shadow-lg overflow-hidden md:w-2/3 animate__animated animate__fadeIn  ">
      <div className="md:flex h-full ">
        <div className="md:flex-shrink-0  rounded-lg shadow-xl bg-gray-100 text-white text-center py-4 px-8 ">
          <p className="font-mono text-sm md:text-base mb-2 text-black">
            {tecnologie}
          </p>
          {ICONS[tecnologie]}
        </div>
        <div className="py-8 px-8  w-full animate__animated animate__backInDown ">
          <ul className="list-disc  flex flex-col ">
            {technologiesData[tecnologie].map((technology) => (
              <div
                key={technology.label}
                className="flex justify-between my-2 items-center    "
              >
                <li className="text-black font-mono text-[12px] md:text-sm ">
                  {technology.label}
                </li>
                <div className="flex items-center">
                  {technology.learning && (
                    <div className="rounded-lg relative ">
                      <span className="absolute top-0 right-0  flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#73FFE0]"></span>
                      </span>
                      <p className="text-[10px] text-black font-mono p-2">
                        (Aprendiendo)
                      </p>
                    </div>
                  )}

                  <img
                    className="inline-block  w-8 rounded-lg ml-2"
                    src={`/icons/${technology.icon}`}
                    alt={technology.label}
                  />
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Tecnologies = () => {
  return (
    <div className="w-full h-screen py-8 px-12 pb-28 flex flex-col   ">
      <div className="flex flex-col md:flex-row w-full justify-around gap-10 mb-10">
        <Card tecnologie="Front-End" />
        <Card tecnologie="Back-End" />
      </div>

      <div className="flex flex-col md:flex-row w-full justify-around gap-10 pb-10">
        <Card tecnologie="DB" />
        <Card tecnologie="Infra" />
      </div>
    </div>
  );
};
export default Tecnologies;
