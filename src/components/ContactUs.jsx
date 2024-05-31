
const ContactUs = () => {
  return (
    <>
        
        <div className="w-full h-screen bg-gradient-to-b  to-gray-800  from-black px-3"  name="contact">
            <div className="max-w-screen-lg mx-auto h-full flex flex-col justify-center content-between">
                <div className="w-full">
                    <div className="text-center mb-14">
                        <h1 className="text-white text-4xl sm:text-6xl uppercase font-bold mb-4">Contact us</h1>
                        <div className="h-2 rounded-lg bg-gradient-to-l from-cyan-400 via-slate-500 to-blue-400"></div>
                        <h1 className="text-white text-lg sm:text-xl capitalize">submit the form below to get in touch with me</h1>
                    </div>

                    <div className="max-w-screen-sm mx-auto">
                        <form action="https://getform.io/f/paqgzlza" method="POST" className="flex flex-col p-3">
                            <input type="text" name="name" className="px-1 py-2 border border-white outline-none bg-transparent text-white text-lg mb-7" placeholder="Enter your name"/>
                            <input type="text" name="email" className="px-1 py-2 border border-white outline-none bg-transparent text-white text-lg mb-7" placeholder="Enter your email"/>
                            <textarea name="message" id="" cols={10} rows={6} className="px-1 py-2 border border-white outline-none bg-transparent text-white text-lg mb-7" placeholder="Enter your message "></textarea>
                            <button type="submit" className="px-2 py-3 sm:px-3 sm:py-4 capitalize font-bold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg cursor-pointer hover:scale-105 duration-300 text-white flex justify-center items-center w-36 mx-auto">
                                Let's talks
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactUs