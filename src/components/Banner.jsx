import { FaArrowRight } from "react-icons/fa6";
import Profile from "../../src/assets/myImages/profile.jpg"
import {Link} from "react-scroll";

const Banner = () => {

  return (
    <>
        <div className="w-full h-screen bg-gradient-to-b  to-gray-800 via-black from-black" name="home">
            <div className="max-w-screen-lg h-screen mx-auto flex md:flex-row flex-col justify-center items-center px-7">
                <div className="text-white mr-10 w-full mx-auto mb-16">
                    <h1 className="text-2xl sm:text-5xl lg:text-6xl uppercase font-bold w-full mb-5 text-gray-500 mt-16">full stack developer</h1>
                    <p className="mb-5 text-gray-300 text-[20px] md:text-2xl capitalize">Hi, I'm <b style={{"textShadow": "2px 2px 2px gray"}}>Rakshit Chaurasia</b>. And i'm a software engineer</p>
                    <button className="group px-2 py-3 sm:px-3 sm:py-4 uppercase font-bold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg cursor-pointer hover:scale-105 duration-300 flex justify-center items-center">
                        <Link to="portfolio" smooth duration={500}>portfolio</Link> <FaArrowRight className="ml-3 group-hover:rotate-90 duration-200"/>
                    </button>
                </div> 
                <div className="text-white rounded-lg w-full">
                    <img src={Profile} alt="img not found" className="w-44 sm:w-60 lg:w-80  mx-auto rounded-lg hover:scale-105 duration-300 bg-contain shadow-lg shadow-cyan-200"/>
                </div>
            </div>
        </div>

    </>
  )
}

export default Banner

// ../assets/myImages/profile.jpg