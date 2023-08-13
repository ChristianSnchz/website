import { useState, useMemo } from 'react';
import { Menu } from './components/Menu';
import Timeline from './components/timeline/Timeline';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Tecnologies from './components/Tecnologies';
import { TimelineItemProps } from './components/timeline/types';
import { Projects } from './components/projects/Projects';

const menuOptions = [
  {
    label: 'Historia',
    value: 'history',
  },
  {
    label: 'Educacion',
    value: 'education',
  },
  {
    label: 'Trabajos',
    value: 'jobs',
  },
  {
    label: 'Proyectos',
    value: 'projects',
  },
  {
    label: 'Tecnologias',
    value: 'technologies',
  },
];

const AllItems: TimelineItemProps[] = [
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

type MenuOption =
  | 'history'
  | 'education'
  | 'jobs'
  | 'technologies'
  | 'projects';

const App = () => {
  const [menuCurrent, setMenuCurrent] = useState<MenuOption>('history');

  const [showMenu, setShowMenu] = useState(false);

  const items = useMemo(() => {
    if (menuCurrent === 'history') {
      return AllItems;
    }

    if (menuCurrent === 'education') {
      const currentEducation: TimelineItemProps[] = [
        {
          id: 7,
          dateStart: '2021-11-20',
          dateEnd: 'current',
          pill: 'Educacion',
          title: 'UADE Ingenieria en informatica',
          icon: '/uade.png',
          description: 'Estudiante activo',
        },
      ];

      const education = AllItems.filter((item) => item.pill === 'Educacion');
      education.unshift(...currentEducation);

      return education;
    }

    if (menuCurrent === 'jobs') {
      return AllItems.filter((item) => item.pill === 'Trabajo');
    }

    return [];
  }, [menuCurrent]);

  return (
    <div
      className={`flex flex-col w-screen h-screen ${
        showMenu ? 'bg-black' : 'bg-white'
      } `}
    >
      <div className="flex md:flex-col justify-between ">
        <div className="flex p-8 flex-row justify-between ">
          <div>
            <h1
              className={`text-base  md:text-3xl font-mono   text-left flex ${
                showMenu ? 'text-white' : 'text-black'
              } `}
            >
              Christian Sanchez. <div className="cursor-blink">|</div>
            </h1>
            <h2
              className={`text-xs md:text-1xl font-mono  text-left mt-2 ${
                showMenu ? 'text-white' : 'text-black'
              }`}
            >
              {`simple developer =)`}
            </h2>
          </div>

          <div className="hidden md:flex flex-row gap-4">
            <a href="https://github.com/ChristianSnchz" target="_blank">
              <FaGithub size={40} />
            </a>

            <a
              href="https://www.linkedin.com/in/christian-s-09419114a/"
              target="_blank"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>

        <Menu
          current={menuCurrent}
          onChange={(value) => setMenuCurrent(value as MenuOption)}
          options={menuOptions}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
        />
      </div>

      <div className={`${showMenu ? 'hidden' : ''}`}>
        {menuCurrent === 'history' ||
        menuCurrent === 'education' ||
        menuCurrent === 'jobs' ? (
          <Timeline current={menuCurrent} items={items} />
        ) : null}

        {menuCurrent === 'technologies' && <Tecnologies />}

        {menuCurrent === 'projects' && (
          <Projects
            projects={[
              {
                id: `${Math.random()}`,
                title: 'Rolleet',
                description:
                  'Rolleet es una innovadora aplicación diseñada específicamente para entusiastas de automotores, empresas relacionadas con la industria automotriz y aficionados a la publicidad especializada. Esta plataforma única reúne lo mejor de dos mundos: eventos de automotores y la promoción de servicios asociados a vehículos, todo ello en un entorno digital interactivo.',
                icon: '/rolleet.png',
                url: 'https://rolleet.app/',
              },
            ]}
          />
        )}
      </div>

      <div
        className={`${
          showMenu
            ? 'flex flex-col animate__animated animate__fadeInUp'
            : 'hidden'
        }`}
      >
        {menuOptions.map((item) => (
          <div
            key={item.value}
            onClick={() => {
              setMenuCurrent(item.value as MenuOption);
              setShowMenu(false);
            }}
            className="flex flex-col  justify-center p-4 mx-4 "
          >
            <p className="text-white text-sm font-mono font-bold">
              {item.label}
            </p>
          </div>
        ))}
        <div className="p-8 gap-6 flex">
          <a href="https://github.com/ChristianSnchz" target="_blank">
            <FaGithub size={40} color="white" />
          </a>

          <a
            href="https://www.linkedin.com/in/christian-s-09419114a/"
            target="_blank"
          >
            <FaLinkedin size={40} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
