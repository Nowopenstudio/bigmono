'use client'

import { animate, useMotionValue, motion } from "motion/react"
import useMeasure from "react-use-measure"
import { useEffect } from "react"
import { Star } from "@modules/assets/assets"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const ITEM_COUNT = 20

export default function CTAScroll({ data, time }: any) {
  const [ref, { width }] = useMeasure()
  const xTranslation = useMotionValue(0)

  useEffect(() => {
    if (!width) return
    const controls = animate(xTranslation, [-width + width / 3, -width / 3], {
      ease: "linear",
      duration: time,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    })
    return controls.stop
  }, [xTranslation, width, time])

  return (
    <motion.div
      ref={ref}
      className="flex left-0 items-center top-[0] z-[1] gap-4 w-max h-full navHold"
      style={{ x: xTranslation, color: "black" }}
    >
      {Array.from({ length: ITEM_COUNT }).map((_, i) => (
        <LocalizedClientLink
          key={i}
          href={`/${data.link}`}
          className="flex flex-shrink-0 items-center uppercase gap-4"
        >
          <p>{data.text}</p>
          <Star className="w-[26px] h-auto" fill="black" />
        </LocalizedClientLink>
      ))}
    </motion.div>
  )
}
