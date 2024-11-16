
import Featured from "./components/featured";
import { getData } from "./lib/util/sanity";





export default async function Home() {
  const query = await getData(`{
    'feat':*[_type=='feature']{featProjects[]->{title,artist,slug,"imageUrl": cover.asset->url, vidCover{asset->{playbackId}}, category->{abbr}
  }}}`)
    const {feat} = query.data  

  return (
    <main className="w-full">
      <Featured feat={feat[0].featProjects}/>
    </main>
  );
}
