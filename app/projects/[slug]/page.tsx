import { getData } from '@/app/lib/util/sanity';
import Image from 'next/image';

export default async function ProjectPage({params}:{params:{slug:string}}){
      const {data} = await getData(`*[_type=='projects' && slug.current == '${params.slug}']{title,artist,slug,"imageUrl": cover.asset->url}`)
    return(
      
      <div>
          <article className="w-full px-10" >
            <div className="w-full">
              <Image alt="image" src={data[0].imageUrl} width={1920} height={1920} className="object-cover"/>
            </div>

          </article>
      </div>

    )
}