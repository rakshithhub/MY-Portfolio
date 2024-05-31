const ProjectCard = ({imageLink, proName, demoLink, codeLink}) => {
  return (
    <>
      <div
        className="flex flex-col shadow-lg shadow-gray-500 rounded-md hover:scale-105 duration-300 my-4"
      >
        <div className="h-44 mb-4">
          <img src={imageLink} alt="" className="h-full rounded-md w-full" />
        </div>
        <div className="mb-4">
          <h1 className="text-center text-2xl font-bold text-gray-400 underline capitalize">
            {proName}
          </h1>
        </div>
        <div className="mb-2 flex justify-evenly">
          <a
            href={demoLink}
            className="text-xl font-bold text-cyan-400"
            target="_blank"
          >
            Demo
          </a>
          <a
            href={codeLink}
            className="text-xl font-bold text-cyan-400"
            target="_blank"
          >
            Code
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
