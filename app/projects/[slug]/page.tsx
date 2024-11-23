import { getData } from '@/app/lib/util/sanity';
import Image from 'next/image';
import { MuxVideo } from '@/app/lib/util/muxVideo';
import { TextOn } from '@/app/lib/util/misc';

export default async function ProjectPage({params}:{params:{slug:string}}){
      const {data} = await getData(`*[_type=='projects' && slug.current == '${params.slug}']{title,artist,slug,category->{abbr},"imageUrl": cover.asset->url, work{"thumb":cover.asset->url,video{asset->{playbackId}}}, vidCover{asset->{playbackId}}}`)
      console.log(data[0])
      return(
      
      <div>
          <article className="w-full px-[20px] py-[60px] grid grid-cols-12 gap-[20px]" >
            <div className="col-span-12 col-start-1 xl:col-span-8 xl:col-start-3">
              {data[0].work?(

                
                   <MuxVideo playbackId={data[0].work.video.asset.playbackId} title={data[0].title}/>
              ):('')}
           
            </div>
            <div className="items-start uppercase col-span-full relative md:absolute top-0 left-0  py-[60px] md:py-[20px] grid grid-cols-12 md:w-full pointer-events-none">
    
                                    <div className=" col-span-3 md:col-start-7">
                                        <p className="onNorm"><TextOn text={data[0].title} num={.2}/></p>
                                        <p className="onNorm"><TextOn text={data[0].artist} num={.3}/></p>
                                    </div>
                                </div>

          </article>
      </div>

    )
}