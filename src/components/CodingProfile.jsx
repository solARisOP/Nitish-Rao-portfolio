import { CODING } from "../constants"
import { motion } from "framer-motion"
import { FaLink } from "react-icons/fa6"

function CodingProfile() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}} className="my-20 text-center text-4xl">
            Coding Profiles
        </motion.h2>
        <div>
            {CODING.map((profile, idx) => 
                <div key={idx} className="mb-8 flex flex-wrap lg:justify-center cursor-pointer rounded-xl">

                    <motion.div whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}} className="w-full lg:w-1/4 mb-10">
                        <profile.logo className={`text-5xl ${profile.color}`} />
                    </motion.div>

                    <motion.div whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}} className="w-full max-w-xl lg:w-3/4">

                        <h6 className="mb-2 font-semibold">
                            {profile.name}
                        </h6>

                        <p className="mb-4 text-neutral-400">
                            {profile.description}
                        </p>
                        
                        <div className="flex items-center h-14 justify-start">
                            <motion.a
                            whileHover={{scale: 1.7}}
                            href={profile.link} target="_blank">
                                <FaLink size={25} />
                            </motion.a>
                        </div>

                    </motion.div>

                </div>
            )}
        </div>
    </div>
  )
}

export default CodingProfile