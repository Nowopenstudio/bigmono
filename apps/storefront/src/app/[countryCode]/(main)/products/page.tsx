import { Metadata } from "next"

import { listCategories } from "@lib/data/categories"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Products",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: Promise<{
    sortBy?: SortOptions
    page?: string
  }>
  params: Promise<{
    countryCode: string
  }>
}

export default async function StorePage(props: Params) {
  const params = await props.params
  const searchParams = await props.searchParams
  const { sortBy, page } = searchParams

  const categoryList = await listCategories()
  const rootCategories =
    categoryList?.filter((c) => !c.parent_category) ?? categoryList ?? []
  const categoriesForRefinement =
    rootCategories.length > 0 ? rootCategories : categoryList ?? []

  return (
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
      categories={categoriesForRefinement}
    />
  )
}
