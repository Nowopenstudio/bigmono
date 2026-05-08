'use client'
import { useLenis } from "lenis/react"
import { Text } from "@medusajs/ui"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ViewActive } from "@lib/util/viewActive"

const HeroGrid = ({ data }: { data: any }) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const winYRef = useRef(typeof window !== "undefined" ? window.innerHeight : 0)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const thumbnailsVisible = useRef(false)


  
  return (
    <div className="w-full h-auto grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 bg-[--green]">
      {data.map((item: any, i: number) => (
        <ViewActive key={i} styleSet="col-span-1 flex justify-center items-center aspect-[3/4] singleProduct relative ">
          <LocalizedClientLink
            
            href={`/products/${item.handle}`}
            ref={(el: any) => { itemRefs.current[i] = el }}
            className="w-full h-full"
          >
              <div
                style={{ animationDelay: `${i * 0.1}s` }}
                className="absolute top-0 left-0 w-full h-full fadeIn z-10 border-t-[3px] border-black border-r-[3px]"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority={i < 3}
                />
                  <div className="flex mt-4 absolute bottom-0 left-0 gap-x-4 w-full h-[55px]  border-t-[3px] border-black bg-[--blue] border-r-[3px]" style={{backgroundColor: item.prime.hex || undefined}}>
                    <div className="flex justify-start items-center  bg-[--green] border-r-[3px] border-black viewButton">
                          <Text className="navHold px-8 " data-testid="product-title">
                            View →
                          </Text>
                    </div>
                    <div className="flex h-full px-6 ">
                        <div className="flex items-center flex-grow-2 ">
                          <Text className="navHold " data-testid="product-title">
                            {item.title}
                          </Text>
                        </div>
                       
                        
                    </div>
                    
                    </div>
            </div>
        
          
        </LocalizedClientLink>
        </ViewActive>
      ))}
    </div>
  )
}

export default HeroGrid
