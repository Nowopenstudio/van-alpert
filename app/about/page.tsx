import { getData } from "../lib/util/sanity"
import { PortableText } from "next-sanity"


export default async function about({params}:{params:{slug:string}}){
      const {data} = await getData(`*[_type=='info']`)
    return(
      
      <div>
          <article className="w-full px-[20px]" >
            <div className="w-full grid grid-cols-12">
             <div className="mt-[60px] md:pl-[20px] col-span-12 col-start-1 md:col-span-3 uppercase md:col-start-10 md:mt-40px">
                <PortableText value={data[0].about}/>
             </div>
            </div>
          </article>
      </div>

    )
}