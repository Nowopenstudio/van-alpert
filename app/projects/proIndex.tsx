'use client'

import React, { useEffect, useState } from "react";
import IndexSec from "./indexSec";


export default function PortIndex({projects}:any) {
 
  
  return (
    
        <div className="w-full grid grid-cols-12 px-[20px] min-h-[80vh] items-end">
           <div className="w-full grid grid-cols-12 col-span-full">
                <IndexSec work={projects.com} title="Commercials"/>
                <IndexSec work={projects.mus} title="Music Videos"/>
                <IndexSec work={projects.doc} title="Documentaries"/>
                <IndexSec work={projects.shf} title="Short Films"/>
           </div>
        </div>
);
}
