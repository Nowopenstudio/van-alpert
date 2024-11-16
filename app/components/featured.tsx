'use client'

import Link from "next/link"
import Image from 'next/image';
import { motion } from "framer-motion";
import { MuxVideoBG } from "../lib/util/muxVideo";

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
        <article className="w-[100vw] relative mx-auto px-[10px] sm:px-[20px] uppercase mt-10">
           <h1 className="w-full mb-[20px]">Selected Works</h1>
           <motion.div className="w-full grid grid-cols-12 gap-[20px] items-start pb-[100px]" initial="hidden"
    animate="visible" variants={list}>
                {feat.map((single,i)=>(

                 <motion.div key={`${i}-feat-mo`} className="col-span-12 sm:col-span-6 lg:col-span-4 relative" variants={item}>
                      <Link  key={`${i}-feat`} className="w-full" href={`/projects/${single.slug.current}`} >
                           <div className="w-full" >
                                <div className="w-full noControl"
                                >
                                  <MuxVideoBG playbackId={single.vidCover.asset.playbackId} title={single.title}/>
                                </div>
                                <div className="w-full flex items-start justify-start h-[40px] py-[10px] ">
                                    <div className='w-1/4'>
                                        <p>{`${single.category.abbr} ${i+1}`}</p>
        
                                    </div>
                                    <div className="w-3/4 uppercase">
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