'use client'

import Link from "next/link"
import Image from 'next/image';
import { motion } from "framer-motion";

const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 1,
      },
    }),
    hidden: { opacity: 0 },
  }

  const list = {
    visible: {
        opacity: 1,
        transition: {
            ease:'easeInOut',duration:.25,
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
      hidden: {
        opacity: 0,
        transition: {
        ease:'easeInOut',duration:0.25
        },
      },
  }
  
  const item = {
    visible: { opacity: 1, transition:{ease:'easeInOut',duration:.75}},
    hidden: { opacity: 0, transition:{ease:'easeInOut',duration:.75}},
  }
  
  
  

export default function Featured({feat}:any){
  
    return(
        <article className="w-[100vw] relative mx-auto px-10 uppercase mt-10">
           <h1 className="w-full mb-10">Selected Works</h1>
           <motion.div className="w-full flex flex-wrap items-start" initial="hidden"
    animate="visible" variants={list}>
                {feat.map((single,i)=>(

                 <motion.div key={`${i}-feat-mo`} className="w-full sm:w-1/2 lg:w-1/3 relative" variants={item}>
                      <Link  key={`${i}-feat`} className="w-full" href={`/projects/${single.slug.current}`} >
                           <div className="w-full" >
                                <div className="w-full"
                                >
                                   <Image alt="image" height={0}  width={0} sizes="100vw"  src={single.imageUrl}  className="w-full object-fill "/>
                                </div>
                                <div className="w-full flex items-start justify-start">
                                    <div className='w-1/4'>
                                        <p>{}</p>
        
                                    </div>
                                    <div className="w-3/4">
                                        <p>{single.title}</p>
                                        <p>{single.artist}</p>
                                    </div>
                                </div>
                           </div>
                      </Link>
                 </motion.div>
                )
                )}
           </motion.div>
        </article>
    );
}