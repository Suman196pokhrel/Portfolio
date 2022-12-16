import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 space-y-10'>
      <Head>
        <title>Suman's Portfolio</title>
        <meta name="Portfolio Page" content="A web page to showcase my skillset to the interested audience" />
      </Head>

      <Header />

      {/* Hero Section  */}
      <section id='hero' className='snap-start' >
        <Hero />
      </section>

      {/* About  */}
      <section id="about" className='snap-center' >
        <About  />
      </section>
      


      {/* Experience Section  */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>


      {/* Skills  */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>


      {/* Projects  */}


      {/* Contact  */}
     
    </div>
  )
}
