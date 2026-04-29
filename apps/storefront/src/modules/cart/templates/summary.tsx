"use client"

import { Button, Heading } from "@modules/common/components/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

type SummaryProps = {
  cart: HttpTypes.StoreCart
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return "address"
  } else if (cart?.shipping_methods?.length === 0) {
    return "delivery"
  } else {
    return "payment"
  }
}

const Summary = ({ cart }: SummaryProps) => {
  const step = getCheckoutStep(cart)

  return (
    <div className="flex flex-col  pb-55 small:pb-0 min-h-[calc(100vh-310px)] bg-[--yellow] relative">
      <div className="px-6 navHold uppercase h-[55px] flex items-center justify-center bg-[--orange] border-b-[3px] border-black">
        Summary
      </div>
      <DiscountCode cart={cart} />
    
      <CartTotals totals={cart} />
      <LocalizedClientLink
        className="small:absolute bottom-0 left-0 right-0 bg-[--red] border-y-[3px] border-black"
        href={"/checkout?step=" + step}
        data-testid="checkout-button"
      >
        <Button className="w-full h-[55px] richText navHold uppercase rounded-none bg-transparent">Go to checkout</Button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
