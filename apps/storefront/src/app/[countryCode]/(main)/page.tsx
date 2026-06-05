import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { getData } from "@lib/util/sanity"
import HeroGrid from "@modules/home/components/hero/grid"
import CollectScroll from "./collectScroll"



export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const query = await getData(`{
    'data':*[_type=='settings'][0]{feat[]->{title,handle,prime,"cover":cover.asset->url,thumbnail,hero}}
    }`)
  const {data} = query.data  


  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      {data.hero?<Hero data={data.feat} />:
      <HeroGrid data={data.feat} />}
      
      <div className="pb-[55px]">
      <div className="h-[55px] bg-[--red] relative overflow-hidden  border-black border-t-[3px]">
        <CollectScroll data={{text:"View Full Collection"}} time={20} />
      </div>
      </div>
    </>
  )
}



export async function generateMetadata() {
  const query = await getData(`{
    'data':*[_type=='settings'][0]{meta{title,description,keywords,"image":image.asset->url}}
 }`)
 const {data} = query.data  
  return {
    title: `${data.meta.title}`,
    keywords: `${data.meta.keywords}`,
    description:`${data.meta.description}`,
    openGraph: {
      images: `${data.meta.image}?auto=format&amp;w=1200`,
      url:`/`,
      type:'website',
    },
    twitter:{
      site:`@UniswapFND`,
      card: "summary_large_image"
    },
    alternates: {
        canonical: '/',
      }
  };
}