'use client'

import { MuxVideoBG } from "@lib/util/muxPlayer";
import { Logo, ShapeA } from "@modules/assets/assets";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { clx } from "@modules/common/components/ui";
import { useParams, usePathname } from "next/navigation";
import { getRange } from '@lib/util/sanity';
import React, { useEffect, useState } from 'react';
import ReactLenis, { useLenis } from 'lenis/react';
import useResize from '@lib/hooks/useResize';





export default function Banner({cover}:any) {
  const page = usePathname();
  const { countryCode,handle } = useParams<{ countryCode: string, handle: string }>()
  const {winX, winY, mobile} = useResize()
  const [scrollY, setScroll]=useState<number>(0)
  const [condense, setCondense] = useState(false)

  
  const lenis = useLenis(({scroll, dimensions }) => {
   
      if(!condense && (scroll<=200)){
          const newRange = (200-scroll)/200
          setScroll(getRange(newRange,0,1,1,9))
 console.log('scroll',scroll, scrollY)
      }
      else{
        setScroll(1)
      
      }
    })

   

  useEffect(() => {
    if (handle || page.includes('/cart') || page.includes('/account')) {
      setCondense(true)
    } else {
      setCondense(false)
    }
  }, [handle, page])

  return (

<ReactLenis root>
  {cover && page === `/${countryCode}` ?(
      <div className="w-full h-[500px] grid grid-cols-12 left-0 border-black border-[3px] relative navHold">
              
              <LocalizedClientLink
                href="/"
                className="col-span-6 border-r-[3px] border-black uppercase bg-[--blue] relative overflow-hidden p-8 h-auto "
                data-testid="nav-store-link"
              >
                <ShapeA fill="#fd8026" className="absolute top-0 left-0 w-full h-full z-0 object-fill" preserveAspectRatio="none"/>
               
              </LocalizedClientLink>
     
      <div className="col-span-6 col-end-13 h-full bg-[--red] relative">
                
                  
                    <div className="h-full w-full bgMux noControl z-0"> <MuxVideoBG playbackId={cover.vid} title={`Shows Video`} ratio={cover.ratio}/></div>
                   
              
              </div>
              </div>):('' )}
              <div className={clx("overflow-hidden fixed w-auto h-[100vh] top-0 left-0 z-[200] pointer-events-none p-2")} style={{maxWidth: scrollY > 1 ?1000 : 55}} >
<div className="w-auto h-auto pointer-events-auto cursor-pointer"  style={{transformOrigin:'0 0',width:`${75*(scrollY)}px`}}>
  <LocalizedClientLink  href={'/'} scroll={false} >
                          <Logo className={clx("logo h-auto w-full")} fill={`#000000`}/>
                  </LocalizedClientLink>
</div>

</div>
    
</ReactLenis>


);
}
