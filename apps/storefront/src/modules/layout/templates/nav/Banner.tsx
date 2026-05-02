'use client'

import { MuxVideoBG } from "@lib/util/muxPlayer"
import { Logo, ShapeA } from "@modules/assets/assets"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { clx } from "@modules/common/components/ui"
import { useParams, usePathname } from "next/navigation"
import { useCallback, useRef } from "react"
import ReactLenis, { useLenis } from "lenis/react"

const LOGO_MIN = 75
const LOGO_MAX = 675
const SCROLL_RANGE = 200

export default function Banner({ cover }: any) {
  const page = usePathname()
  const { countryCode, handle } = useParams<{ countryCode: string; handle: string }>()

  const isCondensed = Boolean(handle || page.includes("/cart") || page.includes("/account"))

  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useLenis(useCallback(({ scroll }: { scroll: number }) => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    if (isCondensed) {
      outer.style.maxWidth = "55px"
      inner.style.width = `${LOGO_MIN}px`
      return
    }

    const progress = Math.min(scroll / SCROLL_RANGE, 1)
    const logoWidth = LOGO_MAX - (LOGO_MAX - LOGO_MIN) * progress

    outer.style.maxWidth = progress < 1 ? "1000px" : "55px"
    inner.style.width = `${logoWidth}px`
  }, [isCondensed]))

  const initMaxWidth = isCondensed ? 55 : 1000
  const initLogoWidth = isCondensed ? LOGO_MIN : LOGO_MAX

  return (
    <ReactLenis root>
      {cover && page === `/${countryCode}` && (
        <div className="w-full h-[500px] grid grid-cols-12 left-0 border-black border-[3px] relative navHold">
          <LocalizedClientLink
            href="/"
            className="col-span-6 border-r-[3px] border-black uppercase bg-[--blue] relative overflow-hidden p-8 h-auto"
            data-testid="nav-store-link"
          >
            <ShapeA
              fill="#fd8026"
              className="absolute top-0 left-0 w-full h-full z-0 object-fill"
              preserveAspectRatio="none"
            />
          </LocalizedClientLink>

          <div className="col-span-6 col-end-13 h-full bg-[--red] relative">
            <div className="h-full w-full bgMux noControl z-0">
              <MuxVideoBG playbackId={cover.vid} title="Shows Video" ratio={cover.ratio} />
            </div>
          </div>
        </div>
      )}

      <div
        ref={outerRef}
        className="overflow-hidden fixed w-auto h-[100vh] top-0 left-0 z-[200] pointer-events-none p-2"
        style={{ maxWidth: initMaxWidth }}
      >
        <div
          ref={innerRef}
          className="w-auto h-auto pointer-events-auto cursor-pointer"
          style={{ transformOrigin: "0 0", width: initLogoWidth }}
        >
          <LocalizedClientLink href="/" scroll={false}>
            <Logo className={clx("logo h-auto w-full")} fill="#000000" />
          </LocalizedClientLink>
        </div>
      </div>
    </ReactLenis>
  )
}
