import { motion } from 'framer-motion'
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { useLoaderData } from 'react-router-dom';

function Project() {
    const data = useLoaderData()
    return (
        <>
            <motion.h1
            initial={{opacity: 0, y: -100 }}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}} className='my-20 text-center font-thin text-7xl'>
                {data.title}
            </motion.h1>

            <motion.h2
            initial={{opacity: 0, x: -100 }}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}} className='my-20 font-light text-center text-3xl'>
                {data.subtitle}
            </motion.h2>

            <motion.div className='flex flex-wrap justify-center items-center gap-5 my-10' 
            initial={{opacity: 0, x: 100 }}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}} >
                {data.technologies.map((tech, idx)=>
                    <span key={idx} className="rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-500"> 
                        {tech}
                    </span>
                )}
            </motion.div>

            <div className='flex items-center h-14 justify-center'>
                <motion.a
                whileHover={{scale: 1.5}}
                className='mx-10'
                 href={data.code} target="_blank">
                    <IoCodeSlashOutline size={35} />
                </motion.a>

                {data.deploy ? <motion.a
                whileHover={{scale: 1.5}}
                className='mx-10'
                 href={data.deploy} target="_blank">
                    <FaLink size={35} />
                </motion.a> : null}
            </div>

            <motion.h2
            initial={{opacity: 0, x: -100 }}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}} className='my-10 text-2xl'>
                about <span className='text-neutral-500 '>{data.title}</span>
            </motion.h2>

            <p className='my-10 whitespace-pre-line leading-8'>
                {data.description}
            </p>
        </>
    )
}

export default Project