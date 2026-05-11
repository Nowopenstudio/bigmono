"use client"

import { HttpTypes } from "@medusajs/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import CategoryTypes from "./category-types"
import SortProducts, { SortOptions } from "./sort-products"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  "data-testid"?: string
  /** Product categories from Medusa (`listCategories()`). Renders a category navigation strip when provided. */
  categories?: HttpTypes.StoreProductCategory[]
  activeCategoryId?: string
  "data-testid-category-types"?: string
}

const RefinementList = ({
  sortBy,
  categories,
  activeCategoryId,
  "data-testid": dataTestId,
  "data-testid-category-types": categoryTypesTestId,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  } 

  return (
    <div className="flex flex-col border-b-[3px] border-black">
      {categories && categories.length > 0 && (
        <CategoryTypes
          categories={categories}
          activeCategoryId={activeCategoryId}
          data-testid={categoryTypesTestId}
        />
      )}
      <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} data-testid={dataTestId} />
    </div>
  )
}

export default RefinementList
