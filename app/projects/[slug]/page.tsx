import { getData } from '@/app/lib/util/sanity';
import Image from 'next/image';
import { MuxVideo } from '@/app/lib/util/muxVideo';
import { TextOn } from '@/app/lib/util/misc';

export default async function ProjectPage({params}:{params:{slug:string}}){
      const {data} = await getData(`*[_type=='projects' && slug.current == '${params.slug}']{title,artist,slug,category->{abbr},"imageUrl": cover.asset->url, work{"thumb":cover.asset->url,"ratio":video.asset->data.aspect_ratio, video{asset->{playbackId}}}, vidCover{asset->{playbackId}}}`)
      return(
      
      <div>
          <article className="w-full px-[20px] py-[60px] grid grid-cols-12 gap-[20px]" >
            <div className="col-span-12 col-start-1 xl:col-span-10 xl:col-start-2">
              {data[0].work?(

                
                   <MuxVideo playbackId={data[0].work.video.asset.playbackId} title={data[0].title} ratio={data[0].work.ratio}/>
              ):('')}
           
            </div>
            <div className="items-start uppercase col-span-full relative md:absolute top-0 left-0  py-[60px] md:py-[20px] grid grid-cols-12 md:w-full pointer-events-none">
    
                                    <div className="col-span-9 md:col-span-3 md:col-start-7">
                                        <p className="onNorm"><TextOn text={data[0].title} num={.2}/></p>
                                        <p className="onNorm"><TextOn text={data[0].artist} num={.3}/></p>
                                    </div>
                                </div>

          </article>
      </div>

    )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const query = await getData(`{
    'info':*[_type=='info'][0]{title,"about":pt::text(about)},
    'data':*[_type=='projects' && slug.current == '${params.slug}'][0]{title,artist,slug,category->{abbr},"imageUrl": cover.asset->url, work{"thumb":cover.asset->url,"ratio":video.asset->data.aspect_ratio, video{asset->{playbackId}}}, vidCover{asset->{playbackId}}}
 }`)
 const {data, info} = query.data  
  return {
    title: `${data.title} - ${data.artist} by Van Alpert`,
    keywords: 'Music videos, Director, Short Films, Writer, Feature Films, Commercials',
    description:info.about,
  };
}

