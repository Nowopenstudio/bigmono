"use client"

import { ChevronUpDown } from "@medusajs/icons"
import { clx } from "@modules/common/components/ui"
import { HttpTypes } from "@medusajs/types"
import { useParams, useRouter } from "next/navigation"
import { type ChangeEvent, useMemo } from "react"

export type CategoryRefinementItem = HttpTypes.StoreProductCategory

function categoryPathFromHandleTree(
  category: CategoryRefinementItem
): string {
  if (category.parent_category) {
    return `${categoryPathFromHandleTree(category.parent_category)}/${category.handle}`
  }
  return category.handle
}

/** Select value for “All products”; not a Medusa category id. */
const ALL_PRODUCTS_VALUE = "__all_products__"

type CategoryTypesProps = {
  categories: CategoryRefinementItem[]
  activeCategoryId?: string
  "data-testid"?: string
}

const CategoryTypes = ({
  categories,
  activeCategoryId,
  "data-testid": dataTestId,
}: CategoryTypesProps) => {
  const router = useRouter()
  const { countryCode } = useParams<{ countryCode: string }>()

  const selectedId = useMemo(() => {
    if (activeCategoryId && categories.some((c) => c.id === activeCategoryId)) {
      return activeCategoryId
    }
    if (!activeCategoryId) {
      return ALL_PRODUCTS_VALUE
    }
    return categories[0]?.id ?? ALL_PRODUCTS_VALUE
  }, [activeCategoryId, categories])

  if (!categories?.length) {
    return null
  }

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value
    if (!countryCode) return

    if (id === ALL_PRODUCTS_VALUE) {
      router.push(`/${countryCode}/products`, { scroll: false })
      return
    }

    const cat = categories.find((c) => c.id === id)
    if (!cat) return
    const path = categoryPathFromHandleTree(cat)
    router.push(`/${countryCode}/categories/${path}`, { scroll: false })
  }

  return (
    <div
      className="w-full border-b-[3px] border-black bg-[--orange] flex navHold items-stretch"
      data-testid={dataTestId}
    >
     
      <div className="relative flex-1 min-w-0 flex items-center">
        <select
          id="category-types-select"
          data-testid="category-type-select"
          value={selectedId}
          onChange={onChange}
          className={clx(
            "w-full h-full min-h-[48px] appearance-none bg-[--green] border-none",
            "py-3 pl-4 pr-12 text-sm  cursor-pointer outline-none navHold text-right"
          )}
        >
          <option value={ALL_PRODUCTS_VALUE}>All</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ui-fg-base"
          aria-hidden
        >
          <ChevronUpDown />
        </span>
      </div>
    </div>
  )
}

export default CategoryTypes
