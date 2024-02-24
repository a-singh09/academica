export default function About() {
  return (
    <>
      {/* About Section */}
      <div className=" overflow-hidden" id="about">
        {/* About Content */}
        <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="lg:w-1/2 lg:flex lg:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                ABOUT ME
              </h1>
              <h2 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-300">
                Currently I am working as an Assistant Professor at <span className='text-red-500'>Dr. BR Ambedkar National Institute of Technology, Jalandhar.</span> I had published 4-Book Chapters and more than <span className='text-red-500'>45 Research Articles</span> in SCI and Scopus Indexed High Impact Journals and Conferences.
                I had successfully supervised <span className='text-red-500'>02 Ph.D.</span> (Awarded), more than <span className='text-red-500'>17 PG</span> and <span className='text-red-500'>10 UG </span>students. Currently supervising <span className='text-red-500'>03 Ph.D.</span>, more than <span className='text-red-500'>04 PG</span> and <span className='text-red-500'>08 UG </span>research scholars at NIT Jalandhar. My Research Interest is <span className='text-red-500'>Image processing (Medical Image Processing), Computer Vision, Machine Learning/Deep Learning</span> and <span className='text-red-500'> Pattern Recognition.</span>
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                <a href="https://in.linkedin.com/in/dr-nagendra-pratap-singh-b1b0bb47?trk=public_profile_samename-profile" target="_blank" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 drop-shadow-2xl  border-red-500 text-red-500 hover:text-white hover:bg-red-700 hover:border-red-800 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:text-white active:border-red-500">
                  <span>CONNECT WITH ME</span>
                </a>

              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
            <div className="border-l border-red-500 pl-8">
              <h3 className="text-xl font-semibold mb-2 text-red-500">Contact Details</h3>
              <p className="text-gray-400"><span className="text-white">Email:</span> singhnp@nitj.ac.in</p>
              <p className="text-gray-400"><span className="text-white">Phone:</span> +91 7007907254</p>
              <p className="text-gray-400"><span className="text-white">Address:</span> Department of Computer Science and Engineering
                National Institute of Technology,
                Jalandhar (Panjab) - 144011</p>
            </div>
          </div>
        </div>
        {/* END About Content */}
      </div>
      {/* END About Section */}
    </>
  )
}
