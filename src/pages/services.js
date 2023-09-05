import React from 'react'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import ContactForm from '@/components/ContactForm'
// import Link from 'next/link'
import { Link ,Element } from 'react-scroll'
import Image from 'next/image'
import Whatsapp from '../../public/images/profile/whatsapp-business-icon.png'
import mail from '../../public/images/profile/email-icon.png'
import phone from '../../public/images/profile/24-hours-call-icon.png'




const services = () => {
  return (
    <>
      <Head>
        <title>Cephus | Services Page</title>
        <meta name ="description" content='any description'/>
      </Head>
      <TransitionEffect/>
      <main className='flex flex-col w-full items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
            <motion.h1 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 dark:text-light text-center md:w-full pl-0 inline-block w-full text-dark font-bold capitalize text-6xl'
            >
                Quality <span className='text-accent'>Services</span>
            </motion.h1>
            <div className='grid grid-cols-3 justify-center items-center gap-4 sm:gap-6 mt-5 md:order-2 md:col-span-4'>
              <div className='pt-8 md:col-span-4'>
                <Link to="ContactForm" smooth={true} duration={500} className='border-2  cursor-pointer border-transparent hover:border-dark hover:bg-light hover:text-accent border-solid p-3 rounded-[2rem] font-bold bg-dark text-light border-white py-3'>Package 1</Link>
                <ol className='list-disc list-inside font-bold pt-5'>
                   <li className='mb-4'>Attractive Design</li>
                  <li className='mb-4'>Responsive Design</li>
                  <li className='mb-4'>Static Website</li>
                  <li className='mb-4'>5 Sections Max</li>
                  <li className='mb-4'>One Page (<span className='text-accent'>Landing Page</span>)</li>
                  <li className='mb-4'>Delivered in 24 hrs</li>
                </ol>
                </div>
                <div className=' md:col-span-4'>
                <Link to="ContactForm" smooth={true} duration={500} className='border-2  cursor-pointer border-transparent hover:border-dark hover:bg-light hover:text-accent border-solid p-3 rounded-[2rem] font-bold bg-dark text-light border-white py-3'>Package 2</Link>

                <ol className='list-disc list-inside font-bold pt-5'>
                  <li className='mb-4'>Attractive Design</li>
                  <li className='mb-4'>Responsive Design</li>
                  <li className='mb-4'>Static Website</li>
                  <li className='mb-4'>4 Pages Max</li>
                  <li className='mb-4'>Delivered in 3 Days</li>
                </ol>
                
                </div>
                <div className='md:col-span-4'>
                <Link to="ContactForm" smooth={true} duration={500} className='border-2  cursor-pointer border-transparent hover:border-dark hover:bg-light hover:text-accent border-solid p-3 rounded-[2rem] font-bold bg-dark text-light border-white py-3'>Package 3</Link>
                <ol className='list-disc list-inside font-bold pt-5'>
                  <li className='my-4'>Attractive Design</li>
                  <li className='mb-4'>Responsive Design</li>
                  <li className='mb-4'>Basic Ecommerce Website</li>
                  <li className='mb-4'>Payment Integrations</li>
                  <li className='mb-4'>5 pages max</li>
                  <li className='mb-4'>Delivered in 1 Week</li>
                </ol>
              </div>
              <div className='md:col-span-4'>
              <Link to="ContactForm" smooth={true} duration={500} className='border-2  cursor-pointer border-transparent hover:border-dark hover:bg-light hover:text-accent border-solid p-3 rounded-[2rem] font-bold bg-dark text-light border-white py-3'>Package 4</Link>
                <ol className='list-disc list-inside font-bold pt-5'>
                  <li className='my-4'>Attractive Design</li>
                  <li className='mb-4'>Responsive Design</li>
                  <li className='mb-4'>Professional Ecommerce Site</li>
                  <li className='mb-4'>Payment Integrations</li>
                  <li className='mb-4'>SEO</li>
                  <li className='mb-4'>Admin Training</li>
                  <li className='mb-4'>Delivered in 10 Days</li>
                </ol>
              </div>
              
              <div className='md:col-span-4'>
              <Link to="ContactForm" smooth={true} duration={500} className='border-2  cursor-pointer border-transparent hover:border-dark hover:bg-light hover:text-accent border-solid p-3 rounded-[2rem] font-bold bg-dark text-light border-white py-3'>Package 5</Link>
                <ol className='list-disc list-inside font-bold pt-5'>
                  <li className='my-4'>Attractive Design</li>
                  <li className='mb-4'>Responsive Design</li>
                  <li className='mb-4'>Custom Dynamic Website</li>
                  <li className='mb-4'>Admin Panel</li>
                  <li className='mb-4'>Admin Training</li>
                  <li className='mb-4'>Delivered in 17 Days</li>
                </ol>
              </div>
              <div className='md:col-span-4'>
              <Link to="ContactForm" smooth={true} duration={500} className='border-2  cursor-pointer border-transparent hover:border-dark hover:bg-light hover:text-accent border-solid p-3 rounded-[2rem] font-bold bg-dark text-light border-white py-3'>Package 6</Link>
                <ol className='list-disc list-inside font-bold pt-5'>
                  <li className='my-4'>Attractive Design</li>
                  <li className='mb-4'>Responsive Design</li>
                  <li className='mb-4'>Custom Ecommerce Website</li>
                  <li className='mb-4'>Admin Panel</li>
                  <li className='mb-4'>Admin Training</li>
                  <li className='mb-4'>Delivered in 30 Days</li>
                </ol>
              </div>
              
              
            </div>
            <h2 className=' mt-64 text-center font-bold text-5xl mb-10 dark:text-light'>
                Get In <span className='text-accent'>Touch.</span>
              </h2>
            <div className='mt-5  grid grid-cols-2 dark:text-light'>
              <div className='mr-7 md:col-span-2'>
                <h3 className='font-bold text-dark/75 text-3xl dark:text-light '>DON'T BE SHY <span className='text-accent'>!</span></h3>
                <p className='font-medium mt-4'>
                  Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.  
                </p>
                <div className='mt-5 flex flex-row md:py-10'>

                  <motion.a href='https://wa.link/5zwqtu' target={'_blank'}
                  whileHover={{y:-2}}
                  whileTap={{scale:0.9}}
                  className='w-6 mr-3 cursor-pointer'
                  >
                  <Image src={Whatsapp} width={30} height={15} alt=''/>
                  </motion.a>
                <motion.a href='mailto:cephusluke@gmail.com' target={'_blank'}
                  whileHover={{y:-2}}
                  whileTap={{scale:0.9}}
                  className='w-6 mx-7 cursor-pointer border-2 border-transparent border-solid dark:border-accent dark:bg-white rounded-[10rem] text-center '
                  >
                  <Image src={mail} width={50} height={50} alt=''/>
                  </motion.a>

                  <motion.a href='tel:0112989429' target={'_blank'}
                  whileHover={{y:-2}}
                  whileTap={{scale:0.9}}
                  className='w-6 ml-7 cursor-pointer border-2 border-solid border-transparent dark:border-accent dark:bg-light rounded-[2rem] '
                  >
                  <Image src={phone} width={30} height={15} alt=''/>
                  </motion.a>
                </div>
                    
                  
              </div>
              <section id='/contact'>
              <div className=''>
             <Element name='ContactForm'>
               <ContactForm/>
              </Element> 
              
              </div>
              </section>
              
              
            </div>

      </Layout>
      </main>
    </>
  )
}

export default services