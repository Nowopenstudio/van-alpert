
import React, { useEffect, useState } from "react";
import { MuxVideoBG } from "../lib/util/muxVideo";


export default function Preview({playbackId}:any) {
 

  return (
    
        <div className="col-span-3 row-start">
          <MuxVideoBG playbackId={playbackId} title={'previewThumb'}/>
        </div>
);
}
