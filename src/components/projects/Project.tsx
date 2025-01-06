import { ProjectProps } from './types';

const Project = ({ icon, title, description, url }: ProjectProps) => {
  return (
    <div className="flex flex-col mr-4 shadow-xl h-max p-8 gap-6 items-center rounded-lg border r md:w-1/3">
      <div className="w-24 h-24 mr-2 rounded-full   ">
        <img
          src={icon}
          alt="Project Icon"
          className="w-24 h-24 object-contain"
        />
      </div>
      <div className="bg-white  rounded-md p-4 h-max">
        <div className="flex items-center mb-4">
          <h2 className="text-lg  text-black font-mono">{title}</h2>
        </div>
        <p className="text-gray-600 mb-4 text-sm ">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline font-bold text-sm"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export { Project };
