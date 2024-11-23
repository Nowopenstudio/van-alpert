
import React, { useEffect, useState } from "react";
import { MuxVideoBG } from "../lib/util/muxVideo";


export default function Preview({playbackId}:any) {
 

  return (
    
        <div className=" w-[100vw] lg:w-[40vw] row-start">
          <MuxVideoBG playbackId={playbackId} title={'previewThumb'}/>
        </div>
);
}
