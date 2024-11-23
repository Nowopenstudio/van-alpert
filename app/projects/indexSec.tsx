'use client'


import Link from "next/link";
import React, { useEffect, useState } from "react";
import Preview from "./preview";
import { TextOn } from "../lib/util/misc";


export default function IndexSec({work, title}:any) {
  const [hover, setHover] = useState(null);
  console.log(work[0])
  
  
  const setVid=(id)=>{
    setHover(id)
    console.log(id)
  }
  const setEnd=()=>{
    setHover(null)
    console.log('out')
  }

  return (
    
        <div className="col-span-12 xs:mb-[40px] sm:mb-[100px] lg:mb-0 md:col-span-6 lg:col-span-3 row-start px-[10px]">
          {hover?(
            <div className="previewVid fixed xy-center pointer-events-none z-0">
              <Preview playbackId={hover}/>
            </div>
          ):('')}
            <div className="w-full uppercase mb-[40px] md:mb-[60px] relative z-1 onNorm"><TextOn text={title} num={.2}/></div>
            {work.map((item,i)=>{
                return(
                 <Link key={`project-${i}`} href={`projects/${item.slug.current}`} onMouseOver={()=>setVid(item.vidCover.asset.playbackId)} onMouseOut={()=>setEnd()}>
                    <div className="indexSingle w-full mb-[20px] md:mb-[40px] uppercase relative">
                      <p className="onNorm"><TextOn text={item.title} num={(i*.1)}/></p>
                      <p className="onNorm"><TextOn text={item.artist} num={(i*.1)+.1}/></p>
                    </div>
                 </Link>
                )
            })}
            {!work.length?(
              <p className="uppercase onNorm"><TextOn text={`COMING SOON`} num={.1}/></p>
            ):('')}
        </div>
);
}
