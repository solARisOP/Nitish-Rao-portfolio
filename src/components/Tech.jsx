import { 
    RiReactjsLine,
    RiTailwindCssFill
 } from "react-icons/ri"
import { 
    SiMongodb,
    SiExpress,
    SiDjango,
    SiJavascript,
    SiCplusplus,
    SiGithub,
    SiPostman
 } from "react-icons/si"
import { 
    FaNodeJs,
    FaPython,
    FaDocker
 } from "react-icons/fa" 
 import { DiRedis } from "react-icons/di"
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { MdHttp } from "react-icons/md";

import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

function Tech() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className='my-20 text-center text-4xl'> Technologies </motion.h2>
        <motion.div whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100 }}
        transition={{duration: 1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-white"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDjango className="text-7xl text-green-700"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-yellow-300"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-7xl text-sky-600"/>
            </motion.div>
            <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-sky-800"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <MdHttp className="text-7xl text-green-600"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGithub className="text-7xl text-white"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <VscVscode className="text-7xl text-sky-600"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostman className="text-7xl text-orange-600"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech