import { getData } from "../lib/util/sanity"
import About from "./about"
import { AnimatePresence } from "framer-motion"


export default async function about({params}:{params:{slug:string}}){
      const {data} = await getData(`*[_type=='info']`)
    return(
      
      
      <About data={data}/>

    )
}