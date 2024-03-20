import { Project } from './Project';
import { ProjectProps } from './types';

const Projects = ({ projects }: { projects: ProjectProps[] }) => {
  return (
    <div className="flex h-screen p-8  ">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export { Projects };
