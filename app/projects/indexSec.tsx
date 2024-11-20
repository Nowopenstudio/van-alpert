'use client'


import Link from "next/link";
import React, { useEffect, useState } from "react";
import Preview from "./preview";


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
    
        <div className="col-span-12 md:col-span-6 lg:col-span-3 row-start">
          {hover?(
            <div className="previewVid fixed xy-center pointer-events-none z-0 w-[50vw]">
              <Preview playbackId={hover}/>
            </div>
          ):('')}
            <div className="w-full uppercase mb-[60px] relative z-1">{title}</div>
            {work.map((item,i)=>{
                return(
                 <Link key={`project-${i}`} href={`projects/${item.slug.current}`} onMouseOver={()=>setVid(item.vidCover.asset.playbackId)} onMouseOut={()=>setEnd()}>
                    <div className="indexSingle w-full mb-[40px] uppercase relative" >
                      <p>{item.title}</p>
                      <p>{item.artist}</p>
                    </div>
                 </Link>
                )
            })}
            {!work.length?(
              <p className="uppercase">Coming Soon</p>
            ):('')}
        </div>
);
}
