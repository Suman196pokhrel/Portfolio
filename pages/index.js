import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { calcLength } from 'framer-motion'


export default function Home({ pageInfo,socials, skills, projects }) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen
    overflow-y-scroll overflow-x-hidden z-0 space-y-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Suman pokhrel's - Portfolio</title>
        <meta name="Portfolio Page" content="A web page to showcase my skillset to the interested audience" />
      </Head>

      <Header socials={socials} />

      <section id='hero' className='' >
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='' >
        <About pageInfo={pageInfo} />
      </section>



      <section id="skills" className=''>
        <Skills skills={skills} />
      </section>


      <section id='projects' className=''>
        <Projects projects={projects} />
      </section>


      <section id="contact" className=''>
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
  console.log("Passed first Fetch")
  const socials = await fetchSocials()
  console.log("Passed second Fetch")
  const skills = await fetchSkills()
  const projects = await fetchProjects()



  return {
    props: {
      pageInfo,
      socials,
      skills,
      projects
    },
  }



}