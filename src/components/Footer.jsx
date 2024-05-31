import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-l from-cyan-400 via-slate-600 to-blue-500">
        <div className="p-3 flex justify-center items-center">
          <p className="flex justify-center items-center text-white font-bold text-xl capitalize"><FaRegCopyright/> developed by rakshit chaurasia</p>
        </div>
      </div>
    </>
  )
}

export default Footer