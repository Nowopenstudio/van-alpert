'use client'
import Link from "next/link"
import { urlFor, getData } from "../lib/sanity";
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
        ease:'easeInOut',duration:0.25,
          when: "afterChildren",
        },
      },
  }
  
  const item = {
    visible: { opacity: 1, transition:{ease:'easeInOut',duration:.75}},
    hidden: { opacity: 0, transition:{ease:'easeInOut',duration:.75}},
  }
  
  
  

export default async function Featured(){
    const {data} = await getData(`*[_type=='projects']{title,artist,slug,"imageUrl": cover.asset->url}`)
    return(
        <article className="w-full relative mx-auto px-10 uppercase mt-10">
           <h1 className="w-full mb-10">Selected Works</h1>
           <motion.div className="w-full flex items-start" initial="hidden"
    animate="visible" variants={list}>
                {data.map((single,i)=>(

                 <motion.div variants={item} >
                      <Link  key={`i-feat`}className="w-1/4" href={`/projects/${single.slug.current}`} >
                           <div className="w-full" >
                                <div className="w-full"
                                >
                                    <Image alt="image" src={single.imageUrl} width={1080} height={1080} className="object-cover"/>
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