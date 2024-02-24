import { FaBook, FaChalkboardTeacher } from 'react-icons/fa'
import { MdSportsBasketball } from 'react-icons/md'

export default function Services() {
    return (
        <>
            {/* Services Section */}
            <div className="">
                <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 space-y-16">
                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            My Areas of Expertise
                        </h2>
                        <div className="w-12 h-1.5 bg-red-500 rounded-lg mb-3 mx-auto" />
                        <h3 className="md:text-lg text-gray-300 md:leading-relaxed font-medium lg:w-2/3 mx-auto">
                            With a wealth of knowledge and experience, I am committed to advancing research and fostering meaningful learning experiences for my students.
                        </h3>
                    </div>
                    {/* END Heading */}

                    {/* Services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                        {/* Research Focus */}
                        <div className="group p-6 lg:p-8 xl:p-10 rounded-xl bg-white bg-opacity-25">
                            <div className="relative w-12 mb-8 text-red-500">
                                {/* Replace with appropriate icon for research */}
                                <FaBook className="inline-block w-10 h-10 right-0 bottom-0 transition translate-x-2 translate-y-2 text-red-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-white">
                                Research Focus
                            </h4>
                            <p className="leading-relaxed text-gray-300 text-sm font-medium">
                                Investigating groundbreaking topics in Machine Learning, striving to contribute to the academic community&apos;s understanding of Digital Image Processing and Computer Vision.
                            </p>
                        </div>

                        {/* Teaching Philosophy */}
                        <div className="group p-6 lg:p-8 xl:p-10 bg-white bg-opacity-25 rounded-xl">
                            <div className="relative w-12 mb-8 text-red-500">
                                {/* Replace with appropriate icon for teaching */}
                                <FaChalkboardTeacher className="inline-block w-10 h-10 right-0 bottom-0 transition translate-x-2 translate-y-2 text-red-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-white">
                                Teaching Philosophy
                            </h4>
                            <p className="leading-relaxed text-gray-300 text-sm font-medium">
                                Dedicated to cultivating an engaging and inclusive classroom environment, emphasizing critical thinking and collaborative learning.
                            </p>
                        </div>

                        {/* Student Engagement */}
                        <div className="group p-6 lg:p-8 xl:p-10 bg-white bg-opacity-25 rounded-xl">
                            <div className="relative w-12 mb-8 text-red-500">
                                {/* Replace with appropriate icon for student engagement */}
                                <MdSportsBasketball className="inline-block w-10 h-10 right-0 bottom-0 transition translate-x-2 translate-y-2 text-red-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-white">
                                Student Engagement
                            </h4>
                            <p className="leading-relaxed text-gray-300 text-sm font-medium">
                                Actively engaging with students through PACE college club, fostering a supportive and collaborative learning community.
                            </p>
                        </div>
                    </div>
                    {/* END Services */}
                </div>
            </div>
            {/* END Services Section */}
        </>
    )
}
