'use client'
import useResize from "@lib/hooks/useResize"
import { getRange } from "@lib/util/sanity"
import { useLenis } from "lenis/react"
import Image from "next/image"
import { useState } from "react"

const positions=[{x:170,y:-360},{x:90,y:-350},{x:-110,y:-350},{x:300,y:-450},{x:-90,y:-435},{x:-300,y:-440}]

const Hero = ({data}: {data: any}) => {
  const {winX, winY, mobile} = useResize()
  const [scrollY, setScroll]=useState<number>(0)
  const [condense, setCondense] = useState(false)

  
  const lenis = useLenis(({scroll, dimensions }) => {
   
      if(!condense && (scroll<winY)){
          const newRange = (scroll)/winY
          setScroll(getRange(newRange,0,1,1,0))
 console.log('scroll',scroll, scrollY)
      }
      else{
        setScroll(0)
      
      }
    })
  return (
    <div className="w-full h-auto grid grid-cols-3 pt-[100vh] bg-[--green]"> 
    <div className="fixed bottom-10 left-0 w-full h-auto  z-500"><h2>{scrollY}</h2></div>
    {data.map((item:any,i:number)=>{
      return(
        <div key={i} className="col-span-1 flex justify-center items-center aspect-[3/4]" style={{transformOrigin: `center bottom`, transform: `scale(${1-(.4*scrollY)}) translate(${positions[i].x*scrollY}%, ${positions[i].y*scrollY*scrollY}%)`}}>
          <Image src={item.cover} alt={item.title} width={1000} height={1000} className="w-auto h-full object-cover"/>
        </div>
      )
    })}
    </div>
  )
}

export default Hero
