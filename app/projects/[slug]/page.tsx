import { getData } from '@/app/lib/util/sanity';
import Image from 'next/image';
import { MuxVideo } from '@/app/lib/util/muxVideo';

export default async function ProjectPage({params}:{params:{slug:string}}){
      const {data} = await getData(`*[_type=='projects' && slug.current == '${params.slug}']{title,artist,slug,category->{abbr},"imageUrl": cover.asset->url, work{"thumb":cover.asset->url,video{asset->{playbackId}}}, vidCover{asset->{playbackId}}}`)
    return(
      
      <div>
          <article className="w-full px-[20px] py-[60px] grid grid-cols-12 gap-[20px]" >
            <div className="col-span-12 col-start-1 xl:col-span-8 xl:col-start-3">
              {data[0].work?(

                
                   <MuxVideo playbackId={data[0].work.video.asset.playbackId} title={data[0].title}/>
              ):('')}
           
            </div>
            <div className="w-full flex items-start justify-start h-[100px] py-[10px] uppercase">
                                    <div className='w-1/4'>
                                        <p>{}</p>
        
                                    </div>
                                    <div className="w-3/4">
                                        <p>{data[0].title}</p>
                                        <p>{data[0].artist}</p>
                                    </div>
                                </div>

          </article>
      </div>

    )
}