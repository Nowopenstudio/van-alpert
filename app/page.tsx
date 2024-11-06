
import Featured from "./components/featured";
import { getData } from "./lib/util/sanity";





export default async function Home() {
  const query = await getData(`{
    'feat':*[_type=='projects']{title,artist,slug,"imageUrl": cover.asset->url}}`)
    const {feat} = query.data  
    console.log(feat)
  return (
    <main className="w-full">
      <Featured feat={feat}/>
     
    </main>
  );
}
