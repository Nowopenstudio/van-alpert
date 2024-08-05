import { getData } from "@/app/lib/sanity"
import { PortableText } from "next-sanity"


export default async function about({params}:{params:{slug:string}}){
      const {data} = await getData(`*[_type=='info']`)
      console.log(data[0].about)
    return(
      
      <div>
          <article className="w-full px-10" >
            <div className="w-full flex justify-end">
             <div className="w-1/4">
              <PortableText value={data[0].about}/>
             </div>
            </div>

          </article>
      </div>

    )
}