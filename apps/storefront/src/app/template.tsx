'use client'
import { motion } from "motion/react";

export default function Template({children}:any){
    return(
        <motion.div className="w-full relative overflow-x-hidden "
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ease:'easeInOut', duration:.75}}
        >
            {children}
        </motion.div>
    )
}

