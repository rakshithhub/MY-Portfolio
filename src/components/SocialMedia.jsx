import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaRegAddressCard } from "react-icons/fa";
import Resume from "../../src/assets/resume/Rakshit_Chau_resume.pdf";

export const SocialMedia = () => {

    const socialLink = [
        {
            id: 1,
            child: (
                <>
                    Github <FaGithub className="ml-3"/>
                </>
            ),
            cusStyle: "rounded-tr-lg",
            sLink: "https://github.com/rakshithhub",
            download: false
        },
        {
            id: 2,
            child: (
                <>
                    Linkedin <FaLinkedin className="ml-3"/>
                </>
            ),
            cusStyle: "hover:rounded-br-lg",
            sLink: "https://www.linkedin.com/in/rakshit-chaurasia-7a752b272",
            download: false
        },
        {
            id: 3,
            child: (
                <>
                    Email <TfiEmail className="ml-3"/>
                </>
            ),
            cusStyle: "hover:rounded-br-lg",
            sLink: "https://g.co/kgs/ErqFJoV",
            download: false
        },
        {
            id: 4,
            child: (
                <>
                    Resume <FaRegAddressCard className="ml-3"/>
                </>
            ),
            cusStyle: "rounded-br-lg",
            sLink: Resume,
            download: true
        }
    ]

  return (
    <>
        
        <div className="flex flex-col fixed top-[35%] left-0">
            <ul>

                {
                    socialLink && socialLink.map((link) => (
                        <li key={link.id} className={` bg-gray-500 flex justify-between items-center text-white p-2 text-2xl font-bold ml-[-110px] cursor-pointer hover:ml-0 duration-300 w-40 ${link.cusStyle}`}><a href={link.sLink} download={link.download} className="flex justify-between items-center w-full" target="_blank">{link.child}</a></li>
                    ))
                }

            </ul>
        </div>
    </>
  )
}
