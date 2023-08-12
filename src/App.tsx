import { useState } from 'react';
import { Menu } from './components/Menu';
import Timeline from './components/Timeline';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Tecnologies from './components/Tecnologies';

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

function App() {
  const [menuCurrent, setMenuCurrent] = useState('history');

  return (
    <div className="flex flex-col w-screen h-screen ">
      <div className=" flex p-8 flex-row justify-between ">
        <div>
          <h1 className="text-3xl font-mono text-black  text-left flex ">
            Christian Sanchez. <div className="cursor-blink">|</div>
          </h1>
          <h2 className="text-1xl font-mono text-black  text-left mt-2">
            {`simple developer =)`}
          </h2>
        </div>

        <div className="flex flex-row gap-4">
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
        onChange={(value) => setMenuCurrent(value)}
        options={menuOptions}
      />

      {menuCurrent === 'history' ||
      menuCurrent === 'education' ||
      menuCurrent === 'jobs' ? (
        <Timeline current={menuCurrent} />
      ) : null}

      {menuCurrent === 'technologies' && <Tecnologies />}
    </div>
  );
}

export default App;
