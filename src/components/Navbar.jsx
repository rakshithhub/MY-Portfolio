import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-scroll";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const links = [
        {
            id:1,
            lName: "home"
        },
        {
            id:2,
            lName: "about"
        },
        {
            id:3,
            lName: "portfolio"
        },
        {
            id:4,
            lName: "experience"
        },
        {
            id:5,
            lName: "contact"
        }
    ]

  return (
    <>
        <div className="w-screen bg-black px-6 flex items-center h-20 fixed top-0 bg-black
        ">
            <div className="flex justify-between w-full">
                <div className="">
                    <h1 className="text-white pacifico-regular text-3xl uppercase shadow-lg font-bold">Rakshit</h1>
                </div>

                {toggle ? <IoMdClose className="text-white text-4xl font-bold cursor-pointer block lg:hidden" onClick={() => setToggle(!toggle)}/>  : <IoMdMenu className="text-white text-4xl font-bold cursor-pointer lg:hidden" onClick={() => setToggle(!toggle)}/>}

                <ul className="text-white hidden lg:flex gap-6">
                    {
                        links && links.map((link) => (
                            <li key={link.id} className="text-2xl text-gray-500 font-semibold hover:scale-105 duration-300 cursor-pointer hover:text-white capitalize"> <Link to={link.lName} smooth duration={500}>{link.lName}</Link> </li>
                        ))
                    }
                </ul>
            </div>
        </div>


        {
            toggle ? (
                <div className={`w-full h-full bg-gradient-to-b from-black to-gray-800 fixed top-20 right-0`}>
            <ul className="text-white flex flex-col gap-6 justify-center items-center h-full">
                {
                    links && links.map((link) => (
                        <li key={link.id} className="text-3xl text-gray-500 font-semibold hover:scale-105 duration-300 cursor-pointer hover:text-white capitalize my-3"><Link to={link.lName} smooth duration={500} onClick={() => setToggle(!toggle)}>{link.lName}</Link></li>
                    ))
                }
            </ul>
        </div>
            ) : null
        }
 
    </>
  )
}

export default Navbar