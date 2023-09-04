import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import avatar1 from "../../public/images/profile/logo6.png"


const MotionLink = motion(Link)
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/'
        clasName='flex items-center justify-center rounded-full border border-solid border-transparent'
        whileHover={{transition:{duation:1, repeat:Infinity}}}>
            <Image 
            src={avatar1} 
            width={50} height={50} 
            alt=''/>
        </MotionLink>
    </div>
  )
}

export default Logo