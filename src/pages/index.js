import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Image from 'next/image'
import profilepic from "../../public/images/profile/avatar0.png"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import bulb from "../../public/images/profile/bulb.png"
import HireMe from '@/components/HireMe'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
       
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <motion.div 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-1/2 md:w-full pl-0'>
              <Image src={profilepic} width={560} height={400} alt='' className='lg:hidden md:inline-block md:w-full'/>
            </motion.div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <motion.h1 
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h1 inline-block w-full text-dark font-bold capitalize text-6xl dark:text-light'>
                Exploring a World <br/>of Design<br/>Artistry and <span className='text-accent'> Innovation</span>
              </motion.h1>
              <p className='my-4 text-base font-medium md:text-small
              sm:text-xs'>
              Welcome to my portfolio! Here, you'll witness the culmination of countless sleepless nights dedicated to weaving together unique ideas and crafting designs that not only catch the eye but also leave a lasting impression. I believe that creativity knows no boundaries, and in my quest to push those limits, I've poured my heart and soul into every project. Each pixel, every stroke of the brush, and every line of code reflects my unwavering commitment to delivering innovative solutions. Join me on this journey as we explore a world where imagination thrives, and creativity knows no bounds.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href ="/dummy.pdf" target={'_blank'}
                className='bg-dark text-light flex items-center rounded-lg p-2.5 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light' download={true}
                >
                Resume<LinkArrow className={'w-6 ml-1'}></LinkArrow></Link><Link href='/' target={'_blank'}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >Contact</Link>
              </div>
            </div>
            
          </div>

        </Layout>

        <HireMe/>

        <div className='absolute right-8 bottom-0 inline-block w-28 animate-pulse lg:hidden'>
          <Image src={bulb} alt='' className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
