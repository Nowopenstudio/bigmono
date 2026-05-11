import { notFound } from "next/navigation"
import { Suspense } from "react"

import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types" 

export default function CategoryTemplate({
  category,
  categories,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  /** Top-level (or fallback) categories from Medusa for the refinement strip */
  categories?: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category)
      getParents(category.parent_category)
    }
  }

  getParents(category)

  return (
    <div
      className="w-full border-x-[3px] border-black pt-[--start] bg-white pb-[55px]"
      data-testid="category-container"
    >
      <RefinementList
        sortBy={sort}
        categories={categories}
        activeCategoryId={category.id}
        data-testid="sort-by-container"
        data-testid-category-types="category-types-container"
      />
      <div className="w-full">
       
        
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={category.products?.length ?? 8}
            />
          }
        >
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            categoryId={category.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
