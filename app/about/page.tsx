import { getData } from "../lib/util/sanity"
import { PortableText } from "next-sanity"


export default async function about({params}:{params:{slug:string}}){
      const {data} = await getData(`*[_type=='info']`)
    return(
      
      <div>
          <article className="w-full px-10" >
            <div className="w-full flex justify-end">
             <div className="w-1/4 uppercase">
              <PortableText value={data[0].about}/>
             </div>
            </div>

          </article>
      </div>

    )
}