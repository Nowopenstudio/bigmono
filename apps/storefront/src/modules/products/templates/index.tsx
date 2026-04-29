import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
  sanity?:any
  

}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
  sanity,
  
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="grid grid-cols-2 relative items-start  bg-[white]"
        data-testid="product-container"
      >
      
        <div className=" border-black w-full relative col-span-2 small:col-span-1 row-start-2  small:row-start-1 small:col-start-1 h-auto">
          <ImageGallery images={images} />
        </div>
        <div className="row-start-1 col-span-2  small:pb-0 small:col-span-1 h-auto small:h-[calc(100vh_-_55px)] relative small:sticky pt-[100px] med:pt-0 top-0 med:top-[100px]">
          <div className="flex flex-col w-full p-6 py-6 ">
            <ProductInfo product={product} sanity={sanity} />
            {/* <ProductTabs product={product} /> */}
          </div>
          <div className=" w-full">
            <ProductOnboardingCta />
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  sanity={sanity} 
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>
        </div>
      </div>
      <div
        
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
    
  )
  
}

export default ProductTemplate
