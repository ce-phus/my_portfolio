import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import project1 from "../../public/images/projects/Project1.png"
import project3 from "../../public/images/projects/Project3.png"
import project2 from "../../public/images/projects/Project2.png"
import project4 from "../../public/images/projects/project4.jpeg"

const FramerImage=motion(Image); 


const FeaturedProject =({type, title, summary, img, link, github}) =>{
  return(
    <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl pl-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-bt-3xl dark:bg-light'/>
      <Link href={link} target ="_blank" className='w-1/2 cursor pointer overflow-hidden rounded-lg dark:text-light lg:w-full'>
        <FramerImage src ={img} alt={title} className="w-full h-auto"
         whileHover={{scale:1.05}}
         transition={{duration:0.2}}
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>

        <Link href={link} target='_blank' className='hover:underline'>
          <h2 className='my-2 w-full txt-left text-4xl font-bold dark:text-light sm:text-small'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div>
          <Link href={github} target="_blank" className='w-10 dark:text-light'><GithubIcon/></Link>
          <Link href={link} target="_blank" 
          className='ml-4 rounded-lg bg-dark text-light p[-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'
          >Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title, type, img,link, github}) =>{
  return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-bt-3xl dark:bg-light md:-righ-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
      <Link href={link} target ="_blank" className='w-full cursor pointer overflow-hidden rounded-lg '>
        <FramerImage src ={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-3xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline dark:text-light'>
          <h2 className='my-2 w-full txt-left text-4xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
        </Link>
        
        <div className=' w-full mt-2 flex items-center justify-between dark:text-light'>
        <Link href={link} target="_blank" 
          className='text-lg font-semibold underline md:text-base'
          >Visit</Link>
          <Link href={github} target="_blank" className='w-10 md:w-6'><GithubIcon/></Link>
          
        </div>
      </div>
    </article>
  )
}



const projects = () => {
  return (
    <>
      <Head>
        <title>Cephus | Projects Page</title>
        <meta name ="description" content='any description'/>
      </Head>
      <TransitionEffect/>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-15'>
          <motion.h1
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h1 dark:text-light text-center md:w-full pl-0 inline-block w-full text-dark font-bold capitalize text-6xl'
          >
            Project <span className='text-accent'>Highlights.</span> 
          </motion.h1>
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 mt-10'>
          <div className='col-span-12'>
            <FeaturedProject
            title="Predictive Maintainance of Turbo Engines Using LSTM"
            img={project1}
            summary="An Artificial Intelligence project app using django framework that uses Recurrent neural network to predict the remaining useful life of turbo engines using LSTM model."
            link='https://github.com/ce-phus/AI'
            github="https://github.com/ce-phus/AIdeployment"
            type="Featured Project"
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
          <Project
          
          title="Django Blog app"
          img={project2}
          summary="A Django blog application that allows users to create posts, comment on other people’s posts, like or dislike them, etc., using Python."
          link='https://github.com/ce-phus/web_'
          github="https://github.com/ce-phus"
          type="Featured Project"
                    />
          </div>
          <div className='col-span-6 sm:col-span-12'>
          <Project
          
          title="Django E-commerce Website"
          img={project3}
          summary="A professional E-commerce Website with the admin panel, where users can register and create accounts and make contact."
          link='https://github.com/ce-phus'
          github="https://github.com/ce-phus"
          type="Featured Project"
                    />
          </div>

          <div className='col-span-12'>
            <FeaturedProject
            title="FullStack E-commerce Web Application  using Nextjs, Redux and Django with DjangoRestFramwework."
            img={project4}
            summary=" A collection of projects that I have worked on, including open source contributions and personal side projects."
            link='https://github.com/ce-phus/AI'
            github="https://github.com/ce-phus/AIdeployment"
            type="Featured Project"
            />
          </div>
          </div>
          
        </Layout>
      </main>
    </>
  )
}

export default projects