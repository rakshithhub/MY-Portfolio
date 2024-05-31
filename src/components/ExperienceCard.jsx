
const ExperienceCard = ({name, imgLink, cusStyle}) => {
  return (
    <>
        <div
        className={`flex flex-col shadow-lg  rounded-md hover:scale-105 duration-300 my-4 ${cusStyle} `}
      >
        <div className="h-44 mb-4">
          <img src={imgLink} alt="" className="h-full rounded-md w-full" />
        </div>
        <div className="mb-4">
          <h1 className="text-center text-2xl font-bold text-gray-400 underline uppercase">
            {name}
          </h1>
        </div>
      </div>
    </>
  )
}

export default ExperienceCard