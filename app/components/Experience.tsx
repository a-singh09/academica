export default function Experience() {
    return (
        <>
            {/* Heading */}
            <div id="experience">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        My Teaching Experience
                    </h2>
                    <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-300 lg:w-2/3 mx-auto">
                        Nurturing Learning and Academic Excellence
                    </h3>
                </div>
            </div>
            {/* END Heading */}

            <div className=" pt-14 px-7">
                {/* Timeline: Centered with Extra Info */}
                <div className="relative py-5 dark:text-gray-100">
                    {/* Vertical Guide */}
                    <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 flex flex-col justify-center lg:left-1/2 lg:-ml-6" aria-hidden="true">
                        <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-b from-transparent to-red-200 rounded-t dark:to-teal-900" />
                        <div className="mx-auto w-1 grow bg-red-200 dark:bg-teal-900" />
                        <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-t from-transparent to-red-200 rounded-b dark:to-teal-900" />
                    </div>
                    {/* END Vertical Guide */}

                    {/* Timeline */}
                    <ul className="relative space-y-4 pl-10 md:pl-12 lg:pl-0">
                        {/* Event */}
                        <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto lg:pl-48">
                            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-200 ring-opacity-100 ring-offset-2 dark:bg-red-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
                            </div>
                            <div className="bg-gray-100 bg-opacity-25 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                                <h4 className="font-semibold mb-2">
                                    Jawahar Lal Nehru Polytechnic
                                </h4>
                                <p className="text-sm leading-relaxed">
                                    &#8226; Mahmudabad Sitapur-261203, Uttar Pradesh
                                </p>
                            </div>
                            <div className="px-4 py-2 lg:w-44 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6">
                                <p className="font-medium text-sm text-gray-300">
                                    2003-2005
                                </p>
                            </div>
                        </li>
                        {/* END Event */}

                        {/* Event */}
                        <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto lg:pr-48 ">
                            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
                                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-200 ring-opacity-100 ring-offset-2 dark:bg-red-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
                            </div>
                            <div className="bg-gray-100 bg-opacity-25 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                                <h4 className="font-semibold mb-2">
                                    Azad Institute of Engineering and Technology
                                </h4>
                                <p className="text-sm leading-relaxed">
                                    &#8226;  Lucknow-226008, Uttar Pradesh
                                </p>
                            </div>
                            <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6">
                                <p className="font-medium text-sm text-gray-300">
                                    2005-2007
                                </p>
                            </div>
                        </li>
                        {/* END Event */}

                        {/* Event */}
                        <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto lg:pl-48">
                            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-200 ring-opacity-100 ring-offset-2 dark:bg-red-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
                            </div>
                            <div className="bg-gray-100 bg-opacity-25 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                                <h4 className="font-semibold mb-2">
                                    Rama Institute of Engineering and Technology
                                </h4>
                                <p className="text-sm leading-relaxed">
                                    &#8226; Kanpur-209217, Uttar Pradesh
                                </p>
                            </div>
                            <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6">
                                <p className="font-medium text-sm text-gray-300">
                                    2007-2008
                                </p>
                            </div>
                        </li>
                        {/* END Event */}

                        {/* Event */}
                        <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto lg:pr-48">
                            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
                                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-200 ring-opacity-100 ring-offset-2 dark:bg-red-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
                            </div>
                            <div className="bg-gray-100 bg-opacity-25 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                                <h4 className="font-semibold mb-2">
                                    Ambalika Institute of Management and Technology
                                </h4>
                                <p className="text-sm leading-relaxed">
                                    &#8226; Lucknow-226020, Uttar Pradesh
                                </p>
                            </div>
                            <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6">
                                <p className="font-medium text-sm text-gray-300">
                                    2008-2011
                                </p>
                            </div>
                        </li>
                        {/* END Event */}
                        {/* Event */}
                        <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto lg:pl-48">
                            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-200 ring-opacity-100 ring-offset-2 dark:bg-red-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
                            </div>
                            <div className="bg-gray-100 bg-opacity-25 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                                <h4 className="font-semibold mb-2">
                                    Naraina College of Engineering and Technology
                                </h4>
                                <p className="text-sm leading-relaxed">
                                    &#8226; Kanpur-208020, Uttar Pradesh
                                </p>
                            </div>
                            <div className="px-4 py-2 lg:w-44 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6">
                                <p className="font-medium text-sm text-gray-300">
                                    2011-2013
                                </p>
                            </div>
                        </li>
                        {/* END Event */}

                        {/* Event */}
                        <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto lg:pr-48 ">
                            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
                                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-200 ring-opacity-100 ring-offset-2 dark:bg-red-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
                            </div>
                            <div className="bg-gray-100 bg-opacity-25 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                                <h4 className="font-semibold mb-2">
                                    Madan Mohan Malaviya University of Technology
                                </h4>
                                <p className="text-sm leading-relaxed">
                                    &#8226; Gorakhpur-273010, Uttar Pradesh
                                </p>
                            </div>
                            <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6">
                                <p className="font-medium text-sm text-gray-300">
                                    2016-2018
                                </p>
                            </div>
                        </li>
                        {/* END Event */}

                        {/* Event */}
                        <li className="relative lg:w-1/2 lg:pr-6 lg:mr-auto lg:pl-48">
                            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
                                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-200 ring-opacity-100 ring-offset-2 dark:bg-red-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
                            </div>
                            <div className="bg-gray-100 bg-opacity-25 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                                <h4 className="font-semibold mb-2">
                                    National Institute of Technology
                                </h4>
                                <p className="text-sm leading-relaxed">
                                    &#8226;  Hamirpur-177005, Himachal Pradesh
                                </p>

                            </div>
                            <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6">
                                <p className="font-medium text-sm text-gray-300">
                                    2018-2023
                                </p>
                            </div>
                        </li>
                        {/* END Event */}

                        {/* Event */}
                        <li className="relative lg:w-1/2 lg:pl-6 lg:ml-auto lg:pr-48">
                            <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
                                <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-200 ring-opacity-100 ring-offset-2 dark:bg-red-300 dark:ring-teal-900 dark:ring-offset-gray-900" />
                            </div>
                            <div className="bg-gray-100 bg-opacity-25 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
                                <h4 className="font-semibold mb-2">
                                    Dr. B R Ambedkar National Institute of Technology
                                </h4>
                                <p className="text-sm leading-relaxed">
                                    &#8226; Jalandhar (Punjab)
                                </p>
                            </div>
                            <div className="px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6">
                                <p className="font-medium text-sm text-gray-300">
                                    2023 - Present
                                </p>
                            </div>
                        </li>
                        {/* END Event */}
                    </ul>
                    {/* END Timeline */}
                </div>
                {/* END Timeline: Centered with Extra Info */}
            </div>
        </>
    )
}
