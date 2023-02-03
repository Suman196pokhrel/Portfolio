import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'


import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'


export default function Home({ pageInfo, experiences, socials, skills, projects }) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 space-y-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Suman pokhrel's - Portfolio</title>
        <meta name="Portfolio Page" content="A web page to showcase my skillset to the interested audience" />
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start' >
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center' >
        <About pageInfo={pageInfo} />
      </section>



      {/* <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section> */}


      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>


      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>


      <section id="contact" className='snap-start'>
        <Contact pageInfo={pageInfo} />
      </section>

      <Link href={'#hero'}>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 hover:h-12 hover:w-12 transition-all duration-150 hover:animate-pulse'
              src="https://cdn0.iconfinder.com/data/icons/arrows-3-12/32/arrow_chevron_direction-01_207-512.png" alt="" />
          </div>
        </footer>
      </Link>

    </div>
  )
}


export async function getStaticProps(context) {

  console.log("Running GetStaticProps Function")

  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences()
  const socials = await fetchSocials()
  const skills = await fetchSkills()
  const projects = await fetchProjects()



  return {
    props: {
      pageInfo,
      experiences,
      socials,
      skills,
      projects
    },

    revalidate: 10,
  }



}