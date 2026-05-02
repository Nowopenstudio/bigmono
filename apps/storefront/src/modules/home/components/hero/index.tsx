'use client'
import { useLenis } from "lenis/react"
import { Text } from "@medusajs/ui"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const positions = [
  { x: 170,  y: -360 },
  { x: 90,   y: -350 },
  { x: -110, y: -350 },
  { x: 300,  y: -450 },
  { x: -90,  y: -435 },
  { x: -300, y: -440 },
]

const Hero = ({ data }: { data: any }) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const winYRef = useRef(typeof window !== "undefined" ? window.innerHeight : 0)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const thumbnailsVisible = useRef(false)

  useEffect(() => {
    const onResize = () => { winYRef.current = window.innerHeight }
    winYRef.current = window.innerHeight
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useLenis(useCallback(({ scroll }: { scroll: number }) => {
    const winY = winYRef.current
    if (!winY) return

    const progress = Math.min(scroll / winY, 1)
    const t = 1 - Math.pow(progress, 2.2)

    // Write transforms directly to DOM — no React re-render per frame
    itemRefs.current.forEach((el, i) => {
      if (!el) return
      const { x, y } = positions[i]
      el.style.transform = `scale(${1 - 0.4 * t}) translate(${x * t}%, ${y * t * t}%)`
    })

    // Only trigger a React re-render when the thumbnail visibility actually changes
    const visible = t === 0
    if (visible !== thumbnailsVisible.current) {
      thumbnailsVisible.current = visible
      setShowThumbnails(visible)
    }
  }, []))

  return (
    <div className="w-full h-auto grid grid-cols-3 pt-[100vh] bg-[--green]">
      {data.map((item: any, i: number) => (
        <LocalizedClientLink
          key={i}
          href={`/products/${item.handle}`}
          ref={(el: any) => { itemRefs.current[i] = el }}
          className="col-span-1 flex justify-center items-center aspect-[3/4] singleProduct "
          style={{ transformOrigin: "center bottom" }}
        >
          <Image
            src={item.cover}
            alt={item.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover fade-in fullBody"
            priority={i < 3}
          />
          {showThumbnails && (
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
          )}
        </LocalizedClientLink>
      ))}
    </div>
  )
}

export default Hero
