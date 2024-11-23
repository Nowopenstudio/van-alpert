import { getData } from '@/app/lib/util/sanity';
import Image from 'next/image';
import { MuxVideo } from '@/app/lib/util/muxVideo';
import PortIndex from './proIndex';

export default async function ProjectPage(){
      const {data} = await getData(`{
        'com':*[_type=='projects' && category->{abbr}.abbr=="COM"]{title, category->{abbr}, artist, slug,vidCover{asset->{playbackId}}},
        'mus':*[_type=='projects' && category->{abbr}.abbr=="MUS"]{title, category->{abbr}, artist, slug,vidCover{asset->{playbackId}}},
        'shf':*[_type=='projects' && category->{abbr}.abbr=="SHF"]{title, category->{abbr}, artist, slug,vidCover{asset->{playbackId}}},
        'doc':*[_type=='projects' && category->{abbr}.abbr=="DOC"]{title, category->{abbr}, artist, slug,vidCover{asset->{playbackId}}}
        }`)

    return(
      
      <div>
          <article className="w-full" >
                  <PortIndex projects={data}/>
          </article>
      </div>

    )
}