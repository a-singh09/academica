import TestimonialSection from "./TestimonialSection";

export default function Testimonials() {
  return (
    <>
      {/* Testimonials Section: Boxed Multiple Alternate */}
      <div className="" id="testimonials">
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="text-center">
            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-red-500">
              Impactful Professor
            </div>
            <h2 className="mb-3 text-3xl font-black text-white md:text-4xl lg:mx-auto lg:w-2/3 lg:leading-tight">
              Changing Lives Through Education
            </h2>
            <h3 className="text-lg text-gray-200 font-medium leading-relaxed lg:mx-auto lg:w-3/5">
              Explore the stories of individuals whose lives have been transformed by Dr. NP Sir&apos;s dedication to teaching and mentorship.
            </h3>
          </div>
          {/* END Heading */}

          {/* Feedback */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            <TestimonialSection
              content="Shameer was struggling in his studies until he met Dr. NP Sir. With the professor's guidance, Shameer improved his grades and gained a new perspective on learning."
              name="Shameer Ali"
              designation="NIT Jalandhar"
            />

            <TestimonialSection
              content="Rohil had difficulty grasping complex concepts in class. Dr. NP Sir's dedication to teaching helped Rohil overcome his challenges and excel in his studies."
              name="Rohil Bansal"
              designation="NIT Jalandhar"
            />

            <TestimonialSection
              content="Mehtab was a reserved student who lacked confidence in his abilities. Dr. NP Sir's mentorship and encouragement empowered Mehtab to become a leader in class discussions."
              name="Mehtab Singh"
              designation="NIT Jalandhar"
            />
          </div>
          {/* END Feedback */}
        </div>
      </div>
      {/* END Testimonials Section: Boxed Multiple Alternate */}
    </>
  )
}
