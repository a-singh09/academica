export default function Navbar() {
    return (
        <>
            {/* Header */}
            <header id="page-header" className="flex flex-none items-center  py-10">
                <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
                    {/* Logo */}
                    <div>
                        <a href="#" className="inline-flex items-center space-x-2 font-extrabold text-lg tracking-wide  hover:text-red-500">
                            
                        </a>
                    </div>
                    {/* END Logo */}
                    <div className="flex flex-col text-center md:flex-row md:items-center md:justify-items-start justify-items-start space-y-6 md:space-y-0 md:space-x-10">
                        {/* Navigation */}
                        <nav className="text-sm md:text-base space-x-4 md:space-x-6 ">
                            <a href="#" className="font-semibold hover:text-white text-gray-300">
                                <span>Home</span>
                            </a>
                            <a href="#about" className="font-semibold hover:text-white text-gray-300">
                                <span>About</span>
                            </a>
                            <a href="#testimonials" className="font-semibold hover:text-white text-gray-300">
                                <span>Testimonials</span>
                            </a>
                            <a href="#experience" className="font-semibold hover:text-white text-gray-300">
                                <span>Experience</span>
                            </a>
                        </nav>
                        {/* END Navigation */}


                        {/* Actions */}
                        <div className="flex items-center justify-center space-x-2">    
                            <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm drop-shadow-2xl border-red-500 text-red-500 hover:text-white hover:bg-red-700 hover:border-red-800 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:text-white active:border-red-500">
                                <span>Resume</span>
                            </a>
                        </div>
                        {/* END Actions */}
                    </div>
                </div>
            </header>
            {/* END Header */}
        </>
    )
}

