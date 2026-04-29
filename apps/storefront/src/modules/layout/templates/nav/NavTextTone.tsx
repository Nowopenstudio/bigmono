"use client"

import { clx } from "@modules/common/components/ui"
import { useParams, usePathname } from "next/navigation"

type NavTextToneProps = {
  children: React.ReactNode
}

export default function NavTextTone({ children }: NavTextToneProps) {
  const pathname = usePathname()
  const { countryCode } = useParams<{ countryCode: string }>()

  const homePath = `/${countryCode}`
  const isHomepage = pathname === homePath || pathname === `${homePath}/`

  return <div className={clx(isHomepage ? "text-white" : "text-black")}>{children}</div>
}
