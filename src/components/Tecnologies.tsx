import 'animate.css';

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
    { label: 'Flutter', icon: 'flutter.png', learning: false },
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

const Card = ({
  tecnologie,
}: {
  tecnologie: keyof typeof technologiesData;
}) => {
  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden w-1/3 animate__animated animate__fadeIn  ">
      <div className="md:flex h-full ">
        <div className="md:flex-shrink-0 bg-black text-white text-center py-4 px-8  ">
          <p className="font-bold text-lg ">{tecnologie}</p>
        </div>
        <div className="p-8  w-full animate__animated animate__backInDown">
          <p className="font-bold text-xl mb-4 text-black">Tecnologías</p>
          <ul className="list-disc  flex flex-col ">
            {technologiesData[tecnologie].map((technology) => (
              <div
                key={technology.label}
                className="flex justify-between my-2  "
              >
                <li className="text-black">{technology.label}</li>
                <img
                  className="inline-block h-8 w-8 rounded-lg ml-2"
                  src={`/icons/${technology.icon}`}
                  alt={technology.label}
                />
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
    <div className="w-full h-screen p-8 flex flex-col  ">
      <div className="flex flex-row w-full justify-around gap-16 mb-16">
        <Card tecnologie="Front-End" />
        <Card tecnologie="Back-End" />
      </div>

      <div className="flex flex-row w-full justify-around gap-4">
        <Card tecnologie="DB" />
        <Card tecnologie="Infra" />
      </div>
    </div>
  );
};
export default Tecnologies;
