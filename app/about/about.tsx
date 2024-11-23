"use client"
import { PortableText } from "next-sanity"
import { motion, AnimatePresence } from "framer-motion"



export default function About({data}:{data?:any}){
     
    return(
      
      
      <AnimatePresence>
            <motion.div key={'about'} className="w-full px-[20px]" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ease:'easeInOut',duration:0.75}}>
              <div className="w-full grid grid-cols-12">
               <div className="mt-[60px] md:pl-[20px] col-span-12 col-start-1 md:col-span-3 uppercase md:col-start-10 md:mt-40px">
                  <PortableText value={data[0].about}/>
               </div>
              </div>
            </motion.div>
        
      </AnimatePresence>

    )
}