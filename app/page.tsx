import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroContent from './components/HeroContent'
import Working from './components/Working'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Email from './components/Email'
import Services from './components/Services'
import ProjectDisplay from './components/ProjectDisplay'
import Experience from './components/Experience'

export default function Home() {
  return (
    <>
      {/* Hero Section: Subtle Gradient with Header Links */}
      <div className='bg-gradient-to-tr text-gray-100 from-rose-950 via-indigo-950 to-orange-950'>
      <Navbar />
      
      <HeroContent />
      <Services />
      <Working />
      <About />
      <Experience />
      {/* <ProjectDisplay /> */}
      <Testimonials />
      <Email />
    
      <Footer />

      </div>
    </>
  )
}
