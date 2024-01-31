import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import Layout from '@/components/Layout'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { fadeIn } from '../../variants'
import profile from '../../public/images/profile/avatarr.jpg'
import Image from 'next/image'
import Skill from '@/components/Skill'

const skills = [
    { name: 'UI/UX DESIGN', percentage: 90 },
    { name: 'Python', percentage: 95 },
    { name: 'Django', percentage: 85 },
    { name: 'API INTEGRATION', percentage: 75 },
    { name: 'POSTGRESQL', percentage: 80 },
    { name: 'CSS', percentage: 65 },
    // Add more skills
  ];

const AnimatedNumber = ({value})=>{
    const ref =useRef(null);
    const motionValue =useMotionValue(0)
    const springvalue =useSpring(motionValue, {duration:3000});
    const isInView =useInView(ref, {once: true});

    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])


useEffect(() => {
    springvalue.on("change",(latest)=>{
      // console.log('spring', latest)
      if(ref.current && latest.toFixed(0)<= value){
        ref.current.textContent=latest.toFixed(0)
      }
    })
  
    
  }, [springvalue, value])
  

  return <span ref={ref}></span>
};

const about = () => {
  return (
    <>
    <Head>
      <title>Cephus | About Page</title>
      <meta name ="description" content='any description'/>
    </Head>
    <TransitionEffect/>
    <main className='flex  flex-col w-full items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <motion.h1 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 dark:text-light text-center md:w-full pl-0 inline-block w-full text-dark font-bold capitalize text-6xl'
            >
                Who Am <span className='text-accent'>I ?</span>
            </motion.h1>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-6 mt-5'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg dark:text-light font-bold uppercase text-dark/75'>
                        Biography
                    </h2>
                    <p className='font-medium'>
                    I'm Peter Nakitare Koinange , a Full-Stack Developer with a flair for innovation. Alongside my Linux expertise, I thrive on crafting seamless digital experiences, blending design and functionality. Beyond coding, I'm a tech enthusiast, constantly exploring the latest trends. Join me in the journey where technology meets creativity, and let's shape the future together, one line of code at a time.
                    </p>
                    <p className='font-medium'>
                    I've embarked on an exciting journey as a Full-Stack Developer, with a strong foundation in Linux and a passion for innovation. Simultaneously. My work revolves around creating user-centric digital solutions that seamlessly blend form and function. When I'm not coding, I'm an avid tech explorer, always seeking the next big thing. Join me in this adventure where technology, creativity, and learning converge, and together, we'll shape the digital landscape of tomorrow.
                    </p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md-col-span-8 '>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                    <Image src={profile} alt='' className='w-full h-auto rounded-2xl'/>
                </div>
                <div className='col-span-2 flex flex-col items-end justify-center xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumber value={10}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl mt-5'>
                            <AnimatedNumber value={5}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                             <span className='inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl mt-5'>
                            <AnimatedNumber value={3}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark
                             dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-64 dark:text-light'>
                <h2 className='font-bold text-5xl mb-10 w-full dark:text-light'>
                    Education
                </h2>
                <motion.div 
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:'spring'}}
                className='font-bold'>
                    Bachelor of Science in Telecommunication And Information Engineering - <span className='text-accent/70'>Dedan Kimathi University Of Technology</span>
                    <div className='text-right flex font-medium'>2019-Present</div>
                </motion.div>
            </div>

            <div className='my-64 dark:text-light'>
                <h2 className='font-bold text-5xl mb-10 w-full dark:text-light]'>
                    Experience
                </h2>
                <motion.div 
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:'spring'}}
                className='font-bold'>
                   FreeLancer - <span className='text-accent/70'>Fiverr, Upwork and PeoplePerHour</span>
                    <div className='text-right flex font-medium'>2020-Present</div>
                </motion.div>
            </div>
            <div>
                <h2 className='font-bold text-center text-5xl mb-10 dark:text-light'>
                    My Skills
                </h2>
                <Skill/>
  

            </div>
        </Layout>   
    </main> 
    </>
  )
}

export default about