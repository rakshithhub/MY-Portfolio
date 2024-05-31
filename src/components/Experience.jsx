import ExperienceCard from "./ExperienceCard"


const Experience = () => {
    const skills = [
        {
            id: 1,
            name: "html",
            imgLink: "../../src/assets/myImages/html.webp",
            cusStyle: "shadow-orange-400"
        },
        {
            id: 2,
            name: "css3",
            imgLink: "../../src/assets/myImages/CSS3.svg",
            cusStyle: "shadow-blue-400"
        },
        {
            id: 3,
            name: "javascript",
            imgLink: "../../src/assets/myImages/javascript.svg",
            cusStyle: "shadow-yellow-400"
        },
        {
            id: 4,
            name: "bootstrap5",
            imgLink: "../../src/assets/myImages/icons-hero.png",
            cusStyle: "shadow-violet-600"
        },
        {
            id: 5,
            name: "tailwind css",
            imgLink: "../../src/assets/myImages/tailwindcss.svg",
            cusStyle: "shadow-cyan-400"
        },
        {
            id: 6,
            name: "react js",
            imgLink: "../../src/assets/react.svg",
            cusStyle: "shadow-cyan-300"
        },
        {
            id: 7,
            name: "node js",
            imgLink: "../../src/assets/myImages/node-js.svg",
            cusStyle: "shadow-green-400"
        },
        {
            id: 8,
            name: "mongoDb",
            imgLink: "../../src/assets/myImages/free-mongodb-3-1175138.webp",
            cusStyle: "shadow-green-800"
        },
        {
            id: 9,
            name: "firebase",
            imgLink: "../../src/assets/myImages/images (1).png",
            cusStyle: "shadow-yellow-700"
        },
        {
            id: 10,
            name: "appwrite",
            imgLink: "../../src/assets/myImages/appwrite.png",
            cusStyle: "shadow-pink-500"
        },

    ]
  return (
    <>
        <div className="w-full h-full bg-gradient-to-b  to-black  from-gray-800 px-3 "  name="experience">
            <div className="max-w-screen-lg mx-auto h-full flex flex-col">
                <div className="w-full  mt-32 mb-32">
                    <div className="text-center mb-16">
                        <h1 className="text-white text-4xl sm:text-6xl uppercase font-bold mb-4">experience</h1>
                        <div className="h-2 rounded-lg bg-gradient-to-l from-cyan-400 via-slate-500 to-blue-400 mb-5 "></div>
                        <h1 className="text-white text-lg sm:text-xl capitalize">these are the technologies i've workerd with</h1>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">  

                        {
                            skills && skills.map((link) => (
                                <ExperienceCard key={link.id} {...link}/>
                            ))
                        }
                    
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Experience