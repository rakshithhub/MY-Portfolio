import ProjectCard from "./ProjectCard";
import InstaBlog from '../../src/assets/myImages/2.png';
import FoodHub from '../../src/assets/myImages/1.png';
import FirebaseAuth from '../../src/assets/myImages/3.png';
import WeatherApp from '../../src/assets/myImages/4.png';
import LearnTech from '../../src/assets/myImages/5.png';
import TypingTest from '../../src/assets/myImages/6.png';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            imageLink: InstaBlog,
            proName: "insta-blog",
            demoLink: "react-blog-sand.vercel.app",
            codeLink: "https://github.com/rakshithhub/react-blog.git"
        },
        {
            id: 2,
            imageLink: FoodHub,
            proName: "food-hub",
            demoLink: "food-hub-beta-delicious.vercel.app",
            codeLink: "https://github.com/rakshithhub/Food-Hub.git"
        },
        {
            id: 3,
            imageLink: FirebaseAuth,
            proName: "firebase-auth",
            demoLink: "firebase-auth-bice.vercel.app",
            codeLink: "https://github.com/rakshithhub/Firebase-Auth.git"
        },
        {
            id: 4,
            imageLink: WeatherApp,
            proName: "weather-app",
            demoLink: "weather-api-theta-lilac.vercel.app",
            codeLink: "https://github.com/rakshithhub/weatherApi.git"
        },
        {
            id: 5,
            imageLink: LearnTech,
            proName: "learn-tech",
            demoLink: "react-tailwind-website-mocha.vercel.app",
            codeLink: "https://github.com/rakshithhub/ReactTailwind-website.git"
        },
        {
            id: 6,
            imageLink: TypingTest,
            proName: "typing-test",
            demoLink: "typing-test-brown.vercel.app",
            codeLink: "https://github.com/rakshithhub/TypingTest.git"
        }

    ]
  return (
    <>
        <div className="w-full h-full bg-gradient-to-b  to-gray-800  from-black px-3 "  name="portfolio">
            <div className="max-w-screen-lg mx-auto h-full flex flex-col">
                <div className="w-full  mt-32 mb-32">
                    <div className="text-center mb-16">
                        <h1 className="text-white text-4xl sm:text-6xl uppercase font-bold mb-4">portfolio</h1>
                        <div className="h-2 rounded-lg bg-gradient-to-l from-cyan-400 via-slate-500 to-blue-400 mb-5 "></div>
                        <h1 className="text-white text-lg sm:text-xl capitalize">Check out some of my work right here</h1>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">  
                        
                        {
                            projects && projects.map((project) => (
                                <ProjectCard key={project.id} {...project}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio